# 🌙 moonlit letters — email template

A reusable newsletter template that matches justapilatesprincess.com.
Built for MailerLite's **custom HTML editor** (included on the free plan).

## Files

- `moonlit-letter.html` — the designed email. Table-based layout with inline
  styles so it renders correctly in Gmail, Apple Mail, Outlook, etc.
- `moonlit-letter.txt` — plain-text version. Paste it into MailerLite's
  plain-text tab on each send (good for deliverability).

## How to send a letter

1. In MailerLite: **Campaigns → Create campaign → Custom HTML editor**.
2. Paste the full contents of `moonlit-letter.html`.
3. Edit the spots marked with `✏️` comments in the HTML:
   - **preview text** (the line shown next to the subject in the inbox)
   - **edition line** (e.g. `moonlit letter · august 2026`)
   - **headline**
   - **body paragraphs** (each paragraph is its own `<p>` tag — copy one to add more)
   - **event chips** (copy/delete the whole chip `<table>` per event)
   - **button** link + label (or delete the button table)
4. Update the plain-text tab from `moonlit-letter.txt`.
5. Send a test email to yourself before the real send. Always.

## Things to know

- `{$unsubscribe}` is a MailerLite variable — **leave it exactly as is**.
  MailerLite replaces it with a working unsubscribe link and won't let a
  campaign send without it.
- To greet subscribers by name, replace `hi princess 👑` with
  `hi {$name} 👑` (MailerLite fills in the signup-form name).
- The crest image loads from the live site
  (`https://justapilatesprincess.com/images/logo.jpg`), so don't delete
  that file from the repo.
- Fonts: Apple Mail shows the real Cormorant Garamond + Karla; Gmail and
  Outlook fall back to Georgia + Arial, which are chosen to read close.
- Keep the design edits in this repo file first, then re-paste into
  MailerLite — that way the template stays version-controlled.
