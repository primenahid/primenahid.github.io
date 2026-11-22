# Reviews & Testimonials — one-time setup (≈10 minutes, free)

Visitors can click **Write a review** on the site, fill in their name, who they are, a star rating,
the review and an optional photo. With this setup every review is **saved automatically** to a
Google Sheet in your Google account, photos go to a Google Drive folder, and you get an email.
You tick **Approved** in the sheet, and the review appears on the website automatically.

> Until this is set up, reviews are still sent to primenahid@gmail.com by email (without the photo).

## Steps

1. Open **https://sheets.new** (signed in as primenahid@gmail.com). Name the sheet e.g. *Portfolio Reviews*.
2. In the sheet: **Extensions → Apps Script**.
3. Delete the sample code, then copy-paste everything from `setup/reviews-google-apps-script.gs`. Click 💾 **Save**.
4. In the toolbar choose the function **`setup`** and click **▶ Run**. Google asks for permission →
   *Review permissions* → choose your account → *Advanced* → *Go to (project) (unsafe)* → **Allow**.
   (It's your own script; this lets it write to your sheet, Drive and send you email.)
   A **Reviews** tab with an **Approved** checkbox column is created.
5. **Deploy → New deployment** → ⚙️ *Select type* → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   → **Deploy** → copy the **Web app URL** (ends with `/exec`).
6. In the website's `index.html`, find this line near the top and paste the URL between the quotes:
   ```html
   <meta name="reviews-api" content="https://script.google.com/macros/s/XXXX/exec">
   ```
   (On GitHub: open `index.html` → ✏️ → edit → **Commit changes**. Or send the URL to Claude.)

Done. Test it: open your site → **Write a review** → submit → check the sheet and your email.

## Publishing a review
Open the sheet → tick **Approved** on that row. Refresh the website — it's live.
Untick to hide it again. Delete the row to remove it completely.

Prefer reviews to go live instantly? In the script set `AUTO_APPROVE = true`, save, then
**Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. (Not recommended — spam would show too.)

## Notes
- Photos are resized in the visitor's browser (~480 px) before upload, so they're small and fast.
- Photos are stored in Drive folder *Portfolio Review Photos* and shared "anyone with the link → view"
  so the website can display them.
- If you change the script later, always redeploy as a **New version** (the URL stays the same).
