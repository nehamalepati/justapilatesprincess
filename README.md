# just a pilates princess 👑

The website for [justapilatesprincess.com](https://justapilatesprincess.com) — desi-lates flows, restorative movement for beginners, and stretch & recovery, with a focus on women's health.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | Homepage — hero, the three pillars, and your credentials + rotating testimonials |
| `flows.html` | The flows — all five signature classes on the "morning → moonlight" day arc |
| `library.html` | Searchable exercise library (search + category filters + detail pop-ups) |
| `contact.html` | Booking page — form sends straight to `justapilatesprincess@gmail.com` |
| `merch.html` | Merch shop — cards start as "coming soon"; swap in real shop links when you're ready (there's a how-to comment in the file) |
| `exercises.js` | **The exercise data — this is the file you'll edit most.** Every exercise's steps, cues, and video live here |
| `styles.css` | All styling (colors and fonts are defined at the top in `:root`) |
| `main.js` | Nav, scroll animations, and the library search logic |
| `images/` | Put `logo.jpg` here (your circular logo) |

## Before you launch — 3 small things

1. **Add your logo.** Save your logo image as `images/logo.jpg`. (The site works without it, but it's cuter with it.)
2. **Activate the contact form.** The form uses [FormSubmit](https://formsubmit.co) (free, no account). The **first time** someone submits it, FormSubmit emails `justapilatesprincess@gmail.com` a confirmation link — click it once and all future submissions arrive normally. Do a test submission yourself to trigger this.
3. **Make the copy yours.** I wrote all the class descriptions and exercise instructions in your voice as a starting point — read through `index.html` and especially `exercises.js` and tweak anything that doesn't sound like you.

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

1. Create a repo on GitHub (e.g. `justapilatesprincess`) and push this folder to it.
2. In the repo: **Settings → Pages → Source: Deploy from a branch → main / root**.
3. Still in Pages settings, set **Custom domain** to `justapilatesprincess.com` and check **Enforce HTTPS**.
4. At your domain registrar (wherever you bought the domain), add DNS records:
   - Four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<your-github-username>.github.io`
5. Wait for DNS (minutes to a few hours) and you're live. ✨

Netlify or Vercel also work great — drag the folder into their dashboard and point the domain at it.
