# just a pilates princess 👑

The website for [justapilatesprincess.com](https://justapilatesprincess.com) — desi-lates flows, restorative movement for beginners, and stretch & recovery, with a focus on women's health.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | Homepage — hero, the three pillars, and your credentials + rotating testimonials |
| `flows.html` | The flows — all five signature classes on the "morning → moonlight" day arc |
| `library.html` | Searchable exercise library (search + category filters + detail pop-ups) — **currently hidden behind a "coming soon" popup** (see below) |
| `contact.html` | Booking page — form sends straight to `justapilatesprincess@gmail.com` |
| `merch.html` | Merch shop — **currently hidden behind a "coming soon" popup** (see below) |
| `card.html` | Your digital business card — link it from a QR code at events |
| `mailing.html` | Mailing list signup — signups arrive in `justapilatesprincess@gmail.com` with the subject "💌 new mailing list signup" |
| `CNAME` | Tells GitHub Pages the site lives at `justapilatesprincess.com` — don't delete |
| `exercises.js` | **The exercise data — this is the file you'll edit most.** Every exercise's steps, cues, and video live here |
| `styles.css` | All styling (colors and fonts are defined at the top in `:root`) |
| `main.js` | Nav, scroll animations, and the library search logic |
| `images/` | Put `logo.jpg` here (your circular logo) |

## Before you launch — 1 small thing

1. **Make the copy yours.** I wrote all the class descriptions and exercise instructions in your voice as a starting point — read through `index.html` and especially `exercises.js` and tweak anything that doesn't sound like you.

(The contact form runs on [FormSubmit](https://formsubmit.co) and is already activated — submissions land in `justapilatesprincess@gmail.com`.)

## Re-opening the exercise library & merch

The library and merch tabs are still in the nav, but clicking them (or any link into them) shows a "coming soon" popup — all the content in `library.html`, `merch.html`, and `exercises.js` is saved and untouched. When you're ready to open a tab, just delete its `data-coming-soon="…"` attributes from the HTML files (search the project for `data-coming-soon`) and the original links work again.

## Mailing list

`mailing.html` runs on the same FormSubmit setup as the booking form — every signup lands in your inbox with the subject "💌 new mailing list signup", so your "list" is those emails. When someone signs up, they're redirected back to the page with a thank-you note. To actually send a newsletter later, you can collect those addresses into any email tool (or just BCC them).

## Dark mode

The site follows each visitor's system light/dark preference automatically, and the moon/sun button in the nav lets them override it (the choice is remembered per browser). If you tweak colors, the light palette lives in `:root` at the top of `styles.css` and the dark palette right below it in `:root[data-theme="dark"]`.

## Discount codes

The booking form has a discount-code field. The codes live at the top of `main.js` in `DISCOUNT_CODES` — add or retire codes by editing that list. Heads up: since this is a static site, codes are visible to anyone who reads the page source, and they don't process payment — the code just arrives with the booking email so **you** apply the discount when you invoice. Treat them as marketing, not security.

## Editing testimonials

The rotating quotes on the homepage live in `main.js` in the `TESTIMONIALS` array (currently the seven reviews from your personal site). Add new ones as quoted strings.

## Adding an exercise

Open `exercises.js`, copy any block between `{ ... },`, and edit it. The comment at the top of the file explains each field. To add a video, upload it to YouTube and paste the video ID (the part after `watch?v=`) into `videoId`.

## Deploying to justapilatesprincess.com

Easiest path — **GitHub Pages** (free):

1. On [github.com/new](https://github.com/new), create a **public** repo named `justapilatesprincess` (no README/gitignore — the repo already exists locally).
2. In this folder, run:

   ```sh
   git remote add origin git@github.com:nehamalepati/justapilatesprincess.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Source: Deploy from a branch → main / root**. The `CNAME` file in this repo fills in the custom domain automatically — once DNS is set up, check **Enforce HTTPS**.
4. At your domain registrar (wherever you bought the domain), add DNS records:
   - Four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `nehamalepati.github.io`
5. Wait for DNS (minutes to a few hours) and you're live. ✨

Netlify or Vercel also work great — drag the folder into their dashboard and point the domain at it.
