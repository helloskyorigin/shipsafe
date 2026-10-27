# ShipSafe

ShipSafe is a developer-first application security assessment product.

## Landing page

This repository currently contains the **landing page** in a lightweight, dependency-free stack:

- index.html — semantic marketing page and illustrative results preview
- styles.css — responsive white/off-white design and restrained animations
- script.js — mobile navigation, scroll reveals, FAQ support, and honest pre-launch dialog
- favicon.svg — minimal wordmark icon

### Local preview

Run a static server from the repository root:

```sh
python3 -m http.server 4173
```

Visit http://localhost:4173.

The page works on static hosting and requires no package installation or build step.

### Product plan

1. Landing page — implemented.
2. Explicit GitHub-based, read-only application connection and real security assessment — **not implemented yet**.
3. Free severity overview, based on completed checks — **not implemented yet**.
4. One-time $19 detailed findings, evidence, potential impact and suggested remediation with payment verification — **not implemented yet**.

**Important:** The security finding counts and examples shown on the landing page are illustrative and labeled as such. The CTA opens an honest pre-launch message, not a fake scanning flow. Do not claim a real scan, payment capability, or implemented security data-handling guarantees until they are built and tested. Minimize source-code retention, mask credentials and use isolated analysis workers when the backend is added.

### Design principles

- White professional visual system, premium typography, no gaming or hacker effects.
- Product-first, without positioning as a GitHub repository checker.
- One-time payment, no mandatory ShipSafe user account in the planned V1.
- Accessible interactions, usable on mobile, with reduced-motion support.
