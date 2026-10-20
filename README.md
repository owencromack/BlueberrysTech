# Blueberry's Tech

A static GitHub Pages site for bookmarklets, with Games and Utilities tabs ready for future additions.

## Publish on GitHub Pages
1. Upload the contents of this folder to the repository root (keep `index.html`, `style.css`, and `app.js` together).
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.

## Add or update bookmarklets
The bookmarklet library is stored in `app.js` as a list. Each item has an id, name, category, description, search keywords, and a `javascript:` URL. The interface uses no emoji icons. The individual `.txt` files in `bookmarklets/` are convenient backups, including Ad Remover, Scientific Calculator, 3D Page View, Autoclicker, and Edit Page (ContentEditable); the website copies the version embedded in `app.js`. When updating a bookmarklet, update its item in `app.js` too.

## Using a bookmarklet
Use its **Copy bookmarklet** button, create a browser bookmark, and paste the copied `javascript:` text into the bookmark's URL/address field. Then tap the bookmark while on a webpage. Some browsers and websites restrict bookmarklets. Only use tools on pages you are allowed to modify.

This website only copies bookmarklet text; it does not execute bookmarklets on the Blueberry's Tech page itself.


Additional bookmarklet: `bookmarklets/edit-page-contenteditable.txt` toggles `document.body.contentEditable` between `true` and `false` for editing the current page.
