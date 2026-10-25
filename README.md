# PULSE ACLS Study Lab

A responsive, installable-style Progressive Web App prototype with 50 adult ACLS revision flashcards, topic filtering, shuffle, missed-card review, and browser-local progress.

## Publish it
1. Create a GitHub repository named `pulse-acls`.
2. Upload `index.html`, `manifest.json`, and `sw.js` to the repository root.
3. In repository Settings → Pages, publish from the main branch and root folder.
4. Open the published HTTPS URL on your Mac, phone, and work PC.

## Install
- Mac/Windows Chrome or Edge: open the hosted URL and use the install icon in the address bar, if offered.
- iPhone: open the hosted URL in Safari → Share → Add to Home Screen.
- Android: open the hosted URL in Chrome → menu → Install app / Add to Home screen.

## Important limitation
Ratings are saved in local browser storage. They persist on each device, but do not synchronise between devices. True cross-device progress needs an authenticated cloud database and configuration (for example Supabase or Firebase). Do not store patient data in this study app.

## Clinical disclaimer
For educational revision only. ACLS algorithms, medication doses and energy settings can change and may differ by local protocol. Verify against current AHA guidance and your institution's resuscitation protocol before clinical use.
