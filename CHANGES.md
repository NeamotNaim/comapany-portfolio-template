# Change Log

This file tracks incremental changes applied to the RecursionSoft portfolio project, executed one-by-one.

## Plan (next small steps)

- Step 1: Add this CHANGES.md to document changes.
- Step 2: Improve UX — ensure the "Products" menu item shows as active on `/products` and all nested routes (e.g., `/products/novabank`).
- Step 3: Basic SEO — set document titles per route.

## Executed

- 2025-08-08: Step 1 completed — created `CHANGES.md` with plan and execution log.
- 2025-08-08: Step 2 completed — `MenuBar` highlights Products for `/products` and nested routes.
- 2025-08-08: Step 3 completed — Added `useDocumentTitle` hook and wrapped routes with `Title` to set per-route document titles.
- 2025-08-08: Cleanup — Added titles for blog detail routes; removed duplicate `/analytics` route; fixed unused import.
- 2025-08-08: Footer — Updated Services links to point to specific service routes.
- 2025-08-08: Menu — Services and Case Studies links now remain active on nested routes.
- 2025-08-08: Accessibility — Added “Skip to content” link and main content anchor.
- 2025-08-08: Performance — Enabled route-level lazy loading with Suspense fallback.
- 2025-08-08: UX — Mobile menu now auto-closes on route change.
