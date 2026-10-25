# PULSE ACLS Study Lab

Responsive ACLS flashcard study app with topic filters, shuffle, missed-card review, local progress, and Supabase account-based cross-device progress sync.

## Publish updates
1. Open the existing `pulse-acls` GitHub repository.
2. Replace `index.html` with this updated version. Also upload/replace `manifest.json` and `sw.js` if prompted.
3. Open the GitHub Pages site and sign up or sign in. Use the same account on every device.

## Supabase setup
The app uses the Supabase project URL and browser-safe publishable key configured in `index.html`. Never put a `service_role` or secret key in client-side code. The `public.acls_progress` table must have `user_id` (uuid primary key), `ratings` (jsonb default `{}`), and `updated_at` (timestamptz default `now()`). Enable RLS and create an `ALL` policy for role `authenticated` with both `USING (auth.uid() = user_id)` and `WITH CHECK (auth.uid() = user_id)`.

If Supabase email confirmation is enabled, users must confirm the sign-up email before signing in. Do not store patient information in this study app.

## Clinical disclaimer
For educational revision only. Verify ACLS algorithms, medication doses, and energy settings against current resuscitation guidance and local protocols before clinical use.
