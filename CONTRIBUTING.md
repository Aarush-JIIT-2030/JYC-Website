# Contributing to JYC Website

JYC is a student-facing campus product. Keep changes focused, accessible and data-first.

## Before a pull request

```bash
npm ci
npm run build
npm run qa
```

For UI work, also test desktop and mobile in both light and dark mode.

## Principles

- Prefer small, composable changes.
- Keep exact search matches ahead of fuzzy matches.
- Do not invent public JYC content.
- AI may recommend edits, but admins approve and publish them.
- Never commit `.env.local`, service-role keys or private credentials.
- Keep keyboard navigation and visible focus states working.
