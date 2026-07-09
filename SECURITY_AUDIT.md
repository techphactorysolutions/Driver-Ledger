# GigLens v4 Public Security Audit

Build audited: GigLens v4.0.0

## Result

No API keys, passwords, private keys, bearer tokens, GitHub tokens, OpenAI keys, AWS keys, Google API keys, Stripe keys, SendGrid keys, Slack tokens, Discord webhooks, JWT-like tokens, or `.env` files were found in the release package.

## External endpoint found

The public runtime uses one third-party OCR script:

- `https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js`

This is used for browser-side OCR loading. No private API key is attached to it. The version is pinned and the exact response is protected by the verified SHA-384 integrity value in `index.html`. Worker/core/language paths are also pinned in `app.js`.

## Public exposure status

No obvious embedded secret prevents publishing the tested files as a static GitHub Pages or Netlify app.

Important operational notes:

- GigLens has no backend account system.
- User data is stored in the visitor's browser `localStorage`.
- Visitors to the public URL do not see your personal local data.
- Anyone with physical/browser access to your device could see your local GigLens data.
- Users should export JSON backups before clearing browser/site data.
- Do not add private API keys to `app.js`, `index.html`, or any public static file in the future.

## Implemented controls

- Restrictive Content Security Policy in `index.html` and `_headers`.
- `object-src 'none'`, `base-uri 'self'`, same-origin form actions, no-referrer policy, MIME sniffing protection, framing denial, and a restrictive permissions policy.
- Exact Tesseract.js version and Subresource Integrity pin.
- Service worker ignores cross-origin traffic and caches only known same-origin browser asset classes.
- No backend, secrets, analytics beacon, remote user database, or dynamic code execution.
- Automated obvious-secret patterns remain in `tests/test_static_app.py` and `tools/smoke-startup.js`.
- Private vulnerability reporting and GitHub operational guidance are documented in `SECURITY.md`.

## Remaining security boundary

No static package can guarantee that a compromised maintainer account, repository administrator, device, browser, or hosting provider can never alter public files. Configure branch protection, least-privilege Pages deployment, two-factor authentication, and review requirements in GitHub. Self-hosting the pinned OCR worker/core/language files would further reduce CDN availability and supply-chain exposure in a future release.
