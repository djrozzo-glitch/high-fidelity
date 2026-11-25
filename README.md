# High Fidelity — Photoreal Asset Pack

Prepared for game integration.

## Contents

### Backgrounds
- `assets/bg-01-shop.webp` — main record shop
- `assets/bg-02-stockroom.webp` — backroom / stockroom
- `assets/bg-03-rooftop.webp` — rooftop sunset
- `assets/bg-04-clouds.webp` — above the clouds
- `assets/bg-05-orbit.webp` — orbital / final stage

All backgrounds are vertical **1080×1920** WebP files.

### Crates
- `assets/crate-01.png`
- `assets/crate-02.png`
- `assets/crate-03.png`
- `assets/crate-04.png`

All crate sprites are **1024×768** transparent PNG files on a consistent canvas for easy swapping in-game.

## Notes
- Visual style: photoreal, warm, stylish record-shop aesthetic.
- Visible sleeve art is **original**, inspired by the visual language of classic electronic-music releases, but does **not** directly copy real album covers.
- No text or logos baked into the assets.

## Suggested mapping
```js
const backgrounds = [
  'assets/bg-01-shop.webp',
  'assets/bg-02-stockroom.webp',
  'assets/bg-03-rooftop.webp',
  'assets/bg-04-clouds.webp',
  'assets/bg-05-orbit.webp'
];

const crates = [
  'assets/crate-01.png',
  'assets/crate-02.png',
  'assets/crate-03.png',
  'assets/crate-04.png'
];
```
