# GigLens Security Policy

GigLens is a static, local-first PWA. It has no application server, account database, analytics tracker, payment processor, or cloud delivery store. Delivery records and settings remain in the browser's local storage unless the user explicitly exports a backup.

## Reporting a vulnerability

Please use the repository's private GitHub Security Advisory reporting flow when available. Do not open a public issue containing an unpatched exploit, private user data, credentials, or screenshots with customer addresses.

Include the affected release, browser/device, reproduction steps, expected behavior, actual behavior, and the smallest safe proof of concept. Remove customer names, addresses, and order details before attaching files.

## Deployment controls

- Require pull-request review and status checks on the publishing branch.
- Restrict GitHub Pages deployment permissions to the intended maintainers.
- Enable two-factor authentication and signed commits for maintainers.
- Review dependency and workflow changes before merging.
- Publish only the tested release archive or repository root; never publish old extracted release folders.

No static site can guarantee that a compromised GitHub account, repository administrator, browser, device, or hosting provider can never alter files. These controls reduce that risk; branch protection and account security must also be configured in GitHub.
