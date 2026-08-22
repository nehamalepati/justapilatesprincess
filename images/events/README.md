# the scrapbook — event photos & videos

drop media for past events here, one folder per event:

- `matcha-movement/` — matcha, movement, & mindfulness (aug 22, 2026)
- `natya-nomz/` — natya & nomz (jul 25, 2026)
- `pilates-matcha/` — pilates & matcha (jul 18, 2026)

then open `events.html`, find the **✏️ THE SCRAPBOOK** script near the bottom,
and list each filename in the order you want it to appear, e.g.

```js
"natya-nomz": [
  "images/events/natya-nomz/01.jpg",
  "images/events/natya-nomz/flow-clip.mp4",
],
```

`.mp4` / `.mov` / `.webm` show as playable videos; everything else is a photo
(tap to open big). a filename that doesn't exist just quietly skips itself.

tips:
- export iphone photos as **.jpg** — .heic won't load in most browsers
- keep videos smallish (under ~50 mb) so github pages serves them quickly
- for a new past event: copy a whole `<article class="past-event">` block in
  `events.html`, give it a new folder name, and add that name to the script
