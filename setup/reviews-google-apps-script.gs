/**
 * Portfolio Reviews backend — Google Apps Script (free)
 * ------------------------------------------------------
 * Saves every review submitted on primenahid.github.io into a Google Sheet,
 * stores the reviewer's photo in a Google Drive folder, emails you a notice,
 * and serves APPROVED reviews back to the website.
 *
 * Setup: see setup/REVIEWS-SETUP.md
 */

// ===== Settings =====
const SHEET_NAME    = 'Reviews';
const PHOTO_FOLDER  = 'Portfolio Review Photos';
const NOTIFY_EMAIL  = 'primenahid@gmail.com';   // you get an email for each new review
const AUTO_APPROVE  = false;  // false = you tick "Approved" in the sheet before a review shows on the site (recommended)
const MAX_PHOTO_BYTES = 1500000; // ~1.5 MB (the website already compresses photos to ~50–100 KB)

const HEADERS = ['Timestamp', 'Name', 'Role', 'Rating', 'Review', 'Email', 'Photo URL', 'Photo ID', 'Language', 'Approved'];

// ----- Website reads approved reviews: GET ?action=list -----
function doGet(e) {
  const sheet = getSheet_();
  const rows = sheet.getDataRange().getValues().slice(1);
  const reviews = rows
    .filter(r => r[9] === true || String(r[9]).toUpperCase() === 'TRUE')
    .reverse()           // newest first
    .slice(0, 30)
    .map(r => ({
      name: String(r[1]),
      role: String(r[2]),
      rating: Number(r[3]) || 5,
      text: String(r[4]),
      photo: r[7] ? 'https://drive.google.com/thumbnail?id=' + r[7] + '&sz=w240' : ''
    }));
  return json_({ ok: true, reviews: reviews });
}

// ----- Website submits a review: POST (JSON as text/plain) -----
function doPost(e) {
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (d._honey) return json_({ ok: true });                       // bot trap
    const name   = clean_(d.name, 60);
    const role   = clean_(d.role, 80);
    const text   = clean_(d.text, 600);
    const email  = clean_(d.email, 120);
    const rating = Math.max(1, Math.min(5, parseInt(d.rating, 10) || 5));
    if (!name || !role || text.length < 15 || d.consent !== true) {
      return json_({ ok: false, error: 'missing fields' });
    }

    // Save the photo (optional)
    let photoUrl = '', photoId = '';
    if (d.photo && /^data:image\/(jpeg|png|webp);base64,/.test(d.photo)) {
      const base64 = d.photo.split(',')[1];
      const bytes = Utilities.base64Decode(base64);
      if (bytes.length <= MAX_PHOTO_BYTES) {
        const mime = d.photo.substring(5, d.photo.indexOf(';'));
        const blob = Utilities.newBlob(bytes, mime, 'review-' + Date.now() + '.jpg');
        const file = getFolder_().createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        photoId = file.getId();
        photoUrl = file.getUrl();
      }
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    getSheet_().appendRow([new Date(), name, role, rating, text, email, photoUrl, photoId, clean_(d.lang, 5), AUTO_APPROVE]);
    lock.releaseLock();

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, 'New portfolio review — ' + name,
        name + ' (' + role + ') — ' + rating + '/5\n\n' + text + '\n\n' +
        (photoUrl ? 'Photo: ' + photoUrl + '\n' : '') +
        (AUTO_APPROVE ? 'It is already live on your site.' : 'To publish it, open the "Reviews" sheet and tick "Approved".'));
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// ----- Helpers -----
function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange('J2:J').insertCheckboxes();
  }
  return sh;
}
function getFolder_() {
  const it = DriveApp.getFoldersByName(PHOTO_FOLDER);
  return it.hasNext() ? it.next() : DriveApp.createFolder(PHOTO_FOLDER);
}
function clean_(v, max) {
  return String(v || '').replace(/[<>]/g, '').trim().substring(0, max);
}
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Run this once from the editor (▶ Run) to create the sheet and grant permissions.
function setup() {
  getSheet_();
  getFolder_();
}
