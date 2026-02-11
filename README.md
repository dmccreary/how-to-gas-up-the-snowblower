[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://dmccreary.github.io/how-to-gas-up-the-snowblower/)
[![Last Commit](https://img.shields.io/github/last-commit/dmccreary/how-to-gas-up-the-snowblower)](https://github.com/dmccreary/how-to-gas-up-the-snowblower/commits/main)
[![Issues](https://img.shields.io/github/issues/dmccreary/how-to-gas-up-the-snowblower)](https://github.com/dmccreary/how-to-gas-up-the-snowblower/issues)
[![Stars](https://img.shields.io/github/stars/dmccreary/how-to-gas-up-the-snowblower?style=social)](https://github.com/dmccreary/how-to-gas-up-the-snowblower/stargazers)
[![Forks](https://img.shields.io/github/forks/dmccreary/how-to-gas-up-the-snowblower?style=social)](https://github.com/dmccreary/how-to-gas-up-the-snowblower/network/members)

# How to Gas Up the Snowblower

Interactive educational site and micro-simulator for mixing two-cycle gas and oil for small engines.

Live site: https://dmccreary.github.io/how-to-gas-up-the-snowblower/

## What This Contains

- A static website build (MkDocs Material output) at the repository root.
- An interactive p5.js simulator at:
  - `sims/gas-oil-mix/main.html`
  - `sims/gas-oil-mix/gas-oil-mix.js`
- Simulator metadata at:
  - `sims/gas-oil-mix/metadata.json`

## Simulator Summary

The **Gas and Oil Mix Calculator** lets learners:

- Select gas amount (0.25 to 5.0 gallons)
- Select gas:oil ratio (25:1 to 80:1)
- See required oil in:
  - fluid ounces
  - milliliters
  - tablespoons

## Run Locally

This is a static site, so no build is required for basic preview.

1. Start a local web server from the repo root:

```bash
python3 -m http.server 8000
```

2. Open:

- `http://localhost:8000/` for the site
- `http://localhost:8000/sims/gas-oil-mix/main.html` for the standalone simulator

## Project Layout

```text
.
|-- index.html
|-- assets/
|-- img/
|-- search/
|-- sims/
|   `-- gas-oil-mix/
|       |-- index.html
|       |-- main.html
|       |-- gas-oil-mix.js
|       `-- metadata.json
`-- sitemap.xml
```

## Notes

- The repository currently contains built static files, not the full MkDocs source tree.
- The simulator depends on p5.js loaded from a CDN.
