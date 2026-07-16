# 🌙 moonlit letters — email template

A reusable newsletter template that matches justapilatesprincess.com.
Built for MailerLite's **custom HTML editor** (included on the free plan).

## Files

- `moonlit-letter.html` — the designed newsletter. Table-based layout with
  inline styles so it renders correctly in Gmail, Apple Mail, Outlook, etc.
- `moonlit-letter.txt` — plain-text version. Paste it into MailerLite's
  plain-text tab on each send (good for deliverability).
- `moonlit-welcome.html` / `.txt` — the automatic welcome email for new
  subscribers (evergreen — no dated content, so it never goes stale).
- `partiful-text.txt` — SMS copy for a Partiful text blast to attendees.

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

## Automatic welcome email

Set this up once in MailerLite and every new subscriber gets the welcome
letter instantly:

1. **Automations → Create automation** (or pick the "Welcome new
   subscribers" template).
2. Trigger: **When subscriber joins a group** → choose your main group
   (e.g. "moonlit letters").
3. Add an **Email** step → subject like `you're on the list, princess 👑`
   → design with the **custom HTML editor** → paste `moonlit-welcome.html`
   (or import from
   <https://justapilatesprincess.com/email/moonlit-welcome.html>).
4. Turn the automation **on**.

To make signups land in MailerLite automatically (so the welcome fires
with no manual step), the site form in `mailing.html` has a MailerLite
hand-off built in — it just needs your form's action URL once:

1. In MailerLite: **Forms → Embedded forms → Create embedded form**
   (name it anything, pick your "moonlit letters" group).
2. On the form's **HTML code** step, find the line that looks like
   `<form action="https://assets.mailerlite.com/jsonp/…/subscribe"`
   and copy that URL.
3. In `mailing.html`, paste it into `var ML_FORM_ACTION = "";` near the
   bottom of the file, then commit and push.

After that, every signup goes to MailerLite (triggering the welcome
email) *and* still emails your inbox via FormSubmit as before. Anyone
already in your inbox from before the swap still needs a one-time manual
import (tick "start automations for imported subscribers" if you want
them welcomed too).

## Texting attendees on Partiful

Partiful can't send designed emails — hosts message guests by SMS text
blast. The play: text a short note that links to the letter, which is
hosted live at <https://justapilatesprincess.com/email/moonlit-letter.html>.

1. Open the event on Partiful (as the host) → **Manage** (or the ⋯ menu).
2. Choose **Send a Text Blast** (Partiful texts everyone who RSVP'd;
   you can target Going / Maybe).
3. Paste the message from `partiful-text.txt` and send.

Note: the unsubscribe link at the bottom of the letter is a MailerLite
placeholder — it only works in emails MailerLite sends, not on the web
page. That's fine for a text-blast audience (they can't unsubscribe
from a web page anyway).

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
