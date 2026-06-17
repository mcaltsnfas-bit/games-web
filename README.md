# Web Arcade

A small hand-built collection of browser games — no build tools, no frameworks, just HTML, CSS, and vanilla JavaScript. Deployed as a static site (e.g. GitHub Pages).

## Games

- **Snake** — classic grid snake with real self-collision, speed-up as you grow, and a saved high score.
- **Pong** — versus a CPU paddle that's beatable, first to 5 points wins.
- **Tic-Tac-Toe** — versus an unbeatable minimax AI (best you can do is draw), with draw detection.
- **2048** — the sliding tile-merge puzzle, keyboard and swipe controls.
- **Memory Match** — flip and pair cards, tracks your best move count.
- **Breakout** — brick breaker with paddle physics and three lives.
- **Sky Dodger** — flappy-style obstacle dodger.
- **Star Defender** — Space-Invaders-style shooter with escalating waves.

## Structure

```
index.html          homepage: search, category filters, game grid
style.css            shared design system used by every page
script.js            homepage search/filter/"surprise me" logic
games/<name>/index.html      each game, self-contained
games/<name>/thumbnail.svg   hand-drawn thumbnail art
```

Each game page links straight back to `style.css` at the project root, so there's one shared theme across the whole site. High scores are stored per-game in `localStorage`, so they persist across visits in the same browser.

## Running locally

No build step — open `index.html` directly, or serve the folder with any static file server.
