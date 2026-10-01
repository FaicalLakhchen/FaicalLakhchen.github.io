# faicallakhchen.github.io

Personal academic website of Lakhchen Faïçal, served by GitHub Pages.

## Structure

| Path | Content |
|---|---|
| `index.html` | Home: about, publications, teaching, contact |
| `Award.html` | Bank Al-Maghrib Prize page and media coverage |
| `teaching/licence/*.html` | One page per Licence course (chapter table + resources) |
| `assets/css/style.css` | Shared stylesheet (light and dark themes) |
| `assets/js/main.js` | Mobile menu, back-to-top, chapter search, "coming soon" links |
| `assets/img/` | Profile photo, award ceremony photo, favicon |
| `assets/docs/` | Hosted documents (Bank Al-Maghrib press release) |

## Adding a download link

On the course pages, every button not yet published has `href="#TODO"` and
is shown greyed out as "Bientôt disponible". Replace `#TODO` with the real
link (for example a Dropbox share link) and the button becomes active automatically.
Each chapter row has an id (`ch01`, `ch02`, ...) to make it easy to find.

Tip for Dropbox: replace `dl=0` with `dl=1` at the end of the link to force a
direct download instead of the Dropbox preview page.
