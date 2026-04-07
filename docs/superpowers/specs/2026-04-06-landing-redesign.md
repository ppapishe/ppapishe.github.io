# Landing Page Redesign — Design Spec
Date: 2026-04-06

## Summary

Five targeted changes to the portfolio landing page: correcting personal data, redesigning the hero section, merging the About section into the hero, updating company card CTA copy, and rebranding the Hertz/Dollar-Thrifty entry.

---

## 1. Data Corrections

### `src/data/personal.ts`
- `title`: change from `"Staff Engineer at Slack"` to `"Senior Software Engineer at Slack"`

### `src/data/companies.ts` — Slack entry
- `role`: change from `"Staff Engineer"` to `"Senior Software Engineer"`
- `team`: change from `"TODO: Fill in team name"` to `"Datastores Foundation"`
- `tagline`: update to reflect DB automation + Vitess scale work
- `narrative`: update to mention Vitess, database automation, and the Datastores Foundation team mission

### `src/data/companies.ts` — Rental entry (Dollar Thrifty → Hertz)
- `name`: `"Hertz"` (Dollar Thrifty Automotive Group was acquired by Hertz in 2012)
- `shortName`: `"Hertz"`
- `brandPrimary`: `#FFB81C` (Hertz yellow)
- `brandSecondary`: `#1a1a1a` (black)
- `brandAccent`: `#000000`
- `tagline`: note the acquisition, e.g. "formerly Dollar Thrifty Automotive Group, acquired by Hertz"

---

## 2. Hero Section Redesign

**File:** `src/components/landing/HeroSection.tsx`

**Current state:** Full-viewport dark gradient, centered "PP" avatar circle, name, title, and a pill "View my work" button.

**New design:** Editorial/typographic style.

### Visual treatment
- Background: light cream `#f9f7f4` (or `#ffffff` — pick the cleaner option)
- No avatar/initials circle
- Role line **above** the name: small caps, muted color, e.g. `SENIOR SOFTWARE ENGINEER · SLACK · DATASTORES`
- Name: very large (clamp 2.5rem–4.5rem), weight 900, tight letter-spacing (–0.04em), dark `#111111`
- Bio: 2–3 sentences directly below the name, ~`0.9375rem`, muted gray, `lineHeight: 1.6`
- Two small actions below the bio:
  - `↓ My work` — scrolls to `#orbit` (the company cards section)
  - Social links: LinkedIn, GitHub (small, understated)
- No full-viewport min-height requirement — the section is tall but not forced to 100vh

### Bio content to use (placeholder until real content filled)
```
Started as an Oracle DBA, worked my way up through database reliability engineering.
Currently on the Datastores Foundation team at Slack, automating database operations
and scaling Vitess to handle Slack's data infrastructure.
```

### Remove
- Dark gradient background
- "PP" initials avatar
- Framer Motion bounce-down arrow at the bottom

---

## 3. About Section — Removed from Page

**File:** `src/App.tsx` → `LandingPage` component

- Remove `<AboutSection />` from the `LandingPage` render sequence
- `src/components/landing/AboutSection.tsx` is **not deleted** — just no longer used
- The bio content now lives in `HeroSection.tsx` (see section 2)
- `personal.bio` array is still the data source; hero reads `personal.bio[0]` + `personal.bio[1]` (first two paragraphs, skipping TODO entries)

---

## 4. Company Card CTA Copy

**File:** `src/components/landing/CompanyOrbit.tsx`

- Change the bottom line of each `CompanyCard` from:
  `View in {company.name} UI →`
  to:
  `Enter {company.name} →`

Single-line change in the `CompanyCard` component.

---

## 5. Hertz Theme — Color Update

**File:** `src/components/themes/rental/RentalShell.tsx`

- The `RentalShell` reads colors from `companies.rental` via `company.brandPrimary` / `company.brandSecondary`
- No structural changes to the shell needed — the brand color update in `companies.ts` flows through automatically
- Verify the Hertz yellow (`#FFB81C`) reads well against black text and white text; adjust any hardcoded color values in `RentalShell.tsx` that currently reference the old orange (`#e8a200`) or red (`#cc2500`) directly

---

## 6. What Does NOT Change

- `SkillsSection.tsx` — no changes
- `ContactSection.tsx` — no changes
- All four theme shells (Slack, HBOMax, AT&T, Rental) — structure unchanged; only Rental gets a color refresh from the data change
- Test suite — existing 14 tests still pass; no new test cases required for these changes
- Routing, store, animations — untouched

---

## Files Touched

| File | Change |
|---|---|
| `src/data/personal.ts` | Title fix |
| `src/data/companies.ts` | Slack role/team/narrative; Rental → Hertz rebrand |
| `src/components/landing/HeroSection.tsx` | Full redesign |
| `src/App.tsx` | Remove `<AboutSection />` from `LandingPage` |
| `src/components/landing/CompanyOrbit.tsx` | CTA copy: "Enter [Company] →" |
| `src/components/themes/rental/RentalShell.tsx` | Verify no hardcoded old colors |

---

## Success Criteria

- `npm run build` passes with zero TS errors
- `npm test` — all 14 tests pass
- Hero looks editorial: light background, large bold name, bio inline, no avatar
- Company cards read "Enter Slack →", "Enter WBD →", etc.
- Rental/Hertz theme renders in yellow/black
- `personal.title` and `companies.slack.role` both say "Senior Software Engineer"
