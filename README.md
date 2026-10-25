# PULSE ACLS Study Lab — private sync code

## Enable cloud sync (one-time setup)

1. In Supabase, open **SQL Editor** and choose **New query**.
2. Open `SUPABASE_SETUP.sql`, copy all its contents into the SQL editor, and click **Run**. This creates a separate sync table and two RPC functions. The existing `acls_progress` table and its policy are not used by this version.
3. Upload the updated `index.html`, `manifest.json`, and `sw.js` to the root of your `pulse-acls` GitHub repository and commit the changes. Upload `SUPABASE_SETUP.sql` too if you want to keep it in the repository; it is not needed by the website after setup.
4. Open the deployed website. On your main device, click **Create sync code** and keep the code somewhere safe.
5. On each other device, open the same website, paste that exact code into the input, and click **Connect with code**.

## Important

- No email or password is used. The sync code is a bearer secret: anyone who has it can read or overwrite the ratings associated with it. Do not post it publicly or put it in a public repository.
- The code is saved in that browser on each connected device. If you clear browser data, you may need to paste the code again.
- Existing local ratings are merged into the remote ratings when connecting. Keep a copy of your code before changing devices.
- This sync setup only syncs card ratings, not the current card position or shuffled order.
- Keep the Supabase publishable key in the website; never use a service-role/secret key in client-side code.
