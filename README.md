# PULSE ACLS Study Lab — 4-digit PIN sync

## One-time setup

1. Open the Supabase SQL Editor for your `pulse-acls` project.
2. Open `SUPABASE_SETUP.sql`, copy all of it into a new SQL query, and click **Run**. This updates the sync functions to accept a 4-digit PIN.
3. Upload `index.html`, `manifest.json`, and `sw.js` from this folder to the root of your `pulse-acls` GitHub repository and commit. Wait for GitHub Pages to deploy.
4. On your main device, open the website and click **Create sync code**. It creates a four-digit PIN. Save it.
5. On your other devices, enter the same PIN and click **Connect with code**.

## Important limitation

A 4-digit PIN has only 10,000 possible combinations and is much less secure than a long random code. This is a convenience feature for personal study progress, not confidential information. Anyone who guesses or obtains the PIN may access or overwrite the synced ratings. Do not reuse this PIN for anything else.

No email or password is required. Your existing local ratings are merged with cloud ratings when you connect. Keep your PIN somewhere safe; clearing browser data may require entering it again.
