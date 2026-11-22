# Nahid Hasan — Portfolio

Bilingual (English / 日本語) portfolio website for **https://primenahid.github.io**.
Plain HTML + CSS + JavaScript — no build step, no dependencies. Works directly on GitHub Pages.

## Features
- Modern responsive design (desktop, tablet, mobile)
- Light / dark mode (follows the visitor's system setting, with a toggle)
- English ⇄ Japanese switch (auto-detects Japanese browsers; share `?lang=ja` links with Japanese recruiters)
- Photo galleries with a lightbox (arrow keys, swipe, “+N more” thumbnails)
- Certificate filter (IT & Security / Marketing & Design / Teaching)
- **“Save CV as PDF”** button — prints a clean 2‑page A4 résumé from the same content
- One-click copy for email / phone
- **Free book section** — 3D animated cover, “Download free PDF” + “Read online”, page previews
- Advanced motion: intro loader (once per visit), animated aurora background, custom cursor, magnetic buttons, sliding nav indicator, circular dark-mode reveal, scroll-filling experience timeline, image curtain reveals, headline wipes, smooth certificate filtering, back-to-top progress ring, full-screen mobile menu
- Motion: word-by-word hero title, count-up stats, sakura petals, card spotlight, 3D tilt (all switched off for visitors who prefer reduced motion)
- SEO: Open Graph image, JSON-LD (Person), sitemap, robots.txt, custom 404
- Optimised images (WebP + small thumbnails) for fast loading

## Publish on GitHub Pages
1. Open your repository `primenahid/primenahid.github.io` on GitHub.
2. Delete the old files (or replace them) and upload **everything inside this folder**
   (`index.html`, `404.html`, `assets/`, `favicon.svg`, etc.) to the repository root.
   - Web: *Add file → Upload files* → drag the folder contents → *Commit changes*.
   - Git:
     ```bash
     git clone https://github.com/primenahid/primenahid.github.io.git
     cd primenahid.github.io
     git rm -r --quiet .  &&  git commit -m "Remove old site"
     # copy the new files into this folder, then:
     git add .  &&  git commit -m "New portfolio design"  &&  git push
     ```
3. *Settings → Pages* → Source: **Deploy from a branch**, Branch: **main** / **root**.
4. Wait ~1 minute, then open https://primenahid.github.io (hard-refresh with Ctrl+Shift+R).

## Editing content
| What | Where |
|---|---|
| English text (default) | `index.html` |
| All translations (EN + JA) | `assets/js/main.js` → `const T = { en: {...}, ja: {...} }` |
| Colours, fonts, spacing | `assets/css/style.css` → `:root` variables at the top |
| Photos | `assets/images/<section>/` (full size) and `.../thumbs/` (≈640px wide) |

Text with a `data-i18n="key"` attribute is replaced by the translation for that key — when you change English
text, update the same key in both `en` and `ja` in `main.js`.

**Update the free book:** replace `assets/books/EdQoR-Academy-N5-30-Day-Foundation.pdf` with the new version (keep the same file
name), and if the cover changed, replace `assets/images/book/cover.webp`.

**EdQoR Academy website:** linked as https://edqoracademy.com (hero badge, experience card, free book, contact).

**Reviews & testimonials:** visitors click **Write a review** (name, role, star rating, review, optional photo).
Follow `setup/REVIEWS-SETUP.md` once (≈10 min, free) — then every review is saved automatically to your Google Sheet,
the photo to Google Drive, and you get an email. Tick **Approved** in the sheet and it appears on the site.
Until then, reviews are emailed to you. You can also add reviews by hand in `assets/data/reviews.json`.

**Add a LinkedIn link:** copy one `<li>` in the `contact__list` in `index.html` and change the URL/label.

**Add a new photo:** save a WebP in `assets/images/experience/` plus a smaller copy in `.../thumbs/`, then copy an existing
`<button class="thumb" ...>` line. Buttons with the same `data-group` become one swipeable gallery.

## Privacy
This repository is public. Before publishing, double-check images for personal details (phone numbers, ID numbers). Remove any you don't want public.
