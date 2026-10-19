# DESIGN.md

Planning record for the site redesign (built with the `/awwwards` skill). Later passes read this
file so the site stays consistent.

## Brief

- **Subject:** Praneeth Papishetty, storage engineer. 13 years with relational and NoSQL stores.
  Now Senior Software Engineer, Datastores Foundation, Slack.
- **Audience:** recruiters and hiring managers for server-side storage and data systems roles.
- **Job of the site:** show depth in data systems through specific, true stories. Link the PDF
  resume. Later, host blog posts.
- **Constraints:** black and white only. Minimal. Terminal flavor with Swiss simplicity. No vanity
  stats and no counting numbers. One page plus a blog. Text follows ASD-STE100 in spirit: short
  sentences, active voice, one idea per sentence.
- **Stack:** the existing Vite + React + React Router (HashRouter) app on GitHub Pages. Add GSAP
  (ScrollTrigger, SplitText) and Lenis. Remove framer-motion and Tailwind (one animation clock,
  plain CSS tokens).

## Concepts considered

| | Idea | Anchor | O / F / Fe / P |
|---|---|---|---|
| **1. Compaction** (picked) | The career is a set of time windows. Each window starts as loose fragments and compacts into one block as you scroll | The TWCS fix for Cassandra at AT&T; compaction as a real storage mechanism | 4 / 5 / 4 / 2 |
| 2. EXPLAIN | The homepage is a query plan of the career, read bottom up | Years of query tuning | 4 / 4 / 4 / 3 |
| 3. Replication | Every headline is written once, then copied to replica columns with lag | GoldenGate cascade at AT&T, Vitess replicas at Slack | 4 / 4 / 4 / 3 |

Picked 1: it comes from the owner's own story, it survives to every section, and it joins the terminal
(fragments) and Swiss (compacted blocks) looks the owner chose. From 3 we take one detail: the email
link replicates.

## Concept card

```
Idea:        A career shown as time windows that compact from loose fragments into clean blocks.
Metaphor:    An LSM storage engine: flushes, SSTables, time-window compaction, TTL.
Signature:   Each window's fragments (tools, systems) drift loose, then settle into one aligned
             row as the window scrolls into place. Scrubbed by scroll, one driver module.
Emotion:     Calm order arriving. Noise becomes structure.
Motion verb: settle and merge. Loose things drift, then lock into rows.
Screenshot:  A window mid-compaction: half the fragments still loose, half locked under the
             company name.
```

Details that carry the concept:
- **Hero intro:** the letters of the name arrive loose and settle into the name.
- **Status line (fixed, bottom left):** names the window in view and its state
  ("window 2015 → 2019 · compacting" / "compacted"). Real information: where you are.
- **Footer email:** replication. Two replica lines copy the address with a short lag on hover or
  focus.
- **404:** "This key expired. TTL reached."
- **Idle:** loose fragments drift a few pixels on the ticker. Compacted fragments hold still.

## Art direction

### Palette

| Role | Value | Note |
|---|---|---|
| ground | `#FFFFFF` | page |
| ink | `#0A0A0A` | text, rules, inverted blocks |
| muted | `#5C5C5C` | meta text, 6.6:1 on ground |
| line | `rgb(10 10 10 / 0.14)` | hairlines |
| loose | `#8A8A8A` | fragments before compaction (decorative, 3.5:1, large mono only) |
| curtain | `#0A0A0A` | page transition |

The footer inverts (ink ground, white text). No accent color: emphasis is weight, size and
inversion.

### Type

- **Schibsted Grotesk** (Google, 400 / 500 / 600): display and body. Display weight 500,
  tracking from -0.045em (mega) to -0.02em (m). Body 17 to 18 px, leading 1.55.
- **Martian Mono** (Google, 300 / 400): meta, labels, fragments, status line. 12 to 13 px, weight
  300 to 400, tracking 0.
- Fluid scale in `src/styles/tokens.css` (`--t-mega` to `--t-xs`).

### Grid and rhythm

- 12 columns, fluid gutter. Content max width 1240 px. Meta labels sit in columns 1 to 3, content
  in columns 4 to 12 on desktop. One column on phones.
- Section rhythm varies: hero is tall and sparse, windows are dense, writing is short, footer is
  tall.

### Shape

Radius 0 everywhere. Hairlines are 1 px ink or line.

### Motion language

- Eases: `expo.out` for settle, `expo.inOut` for the curtain, `power3.out` for small UI,
  `steps(n)` for replication only.
- Durations: hover 0.3 to 0.45 s; settle 1.1 to 1.3 s; curtain 0.8 s each way.
- Compaction is scrubbed (scrub 0.6) from window top at 85% to 35% of the viewport.
- One clock: GSAP ticker drives Lenis, ScrollTrigger and the idle drift.
- Reduced motion: no Lenis, no scrub, no split. Fragments render compacted. Replicas show in
  full.

### Interaction roles (one treatment each)

| Role | Treatment |
|---|---|
| Nav links | underline draws on hover and focus; current page keeps it |
| Primary CTA (resume, blog link) | ink floods the box from the left, text inverts |
| Email | replication lines type out under it |
| Inline links | underline at rest, thickens on hover |
| Utility links (social) | underline on hover |

### Composition plan

```
HERO (sparse, left aligned)
+------------------------------------------------------------+
| PP            work  writing  resume.pdf                     |
|                                                             |
| Praneeth                                                    |
| Papishetty                    (mega, letters settle)        |
|                                                             |
| -- rule ---------------------------------------------------- |
| meta: role, team, city     | I build data systems and the  |
|                            | tools that keep them running. |
+------------------------------------------------------------+

WINDOWS (4x, index rows; fragments compact into the tag row)
+------------------------------------------------------------+
| window          | Company name (xl)                          |
| 2026 -> now     | role · team                                |
|                 | [frag] [frag] [frag] [frag]  <- settle row |
|                 | - compacted line                           |
|                 | - compacted line                           |
+------------------------------------------------------------+

FACTS (two columns, mono keys)
| stack by group             | education / certification     |

WRITING (one line + CTA)
| Notes from the data layer.            [ Read the blog -> ] |

FOOTER (inverted)
| me@praneethpapishetty.com                                   |
| replica 1  me@...                                           |
| replica 2  me@...                                           |
| linkedin  github  instagram                     resume.pdf  |
```

### Genericness test

- A generic model would ship "fade up on every section" and counting stats. Removed both: only
  the windows move on scroll, and nothing counts.
- A generic terminal site fakes a shell prompt and hex offsets. Removed the hex offsets (user
  feedback). The terminal flavor lives in mono fragments and the status line, which carry real
  information.
- A generic portfolio uses three equal project cards. Projects live inside their time window
  instead.

## Decisions

- No loader: a one-page personal site does not earn one. The hero intro is the first moment.
- No WebGL: the concept is typographic.
- Idle motion: only loose fragments drift. The page is still once everything is compacted. This
  is deliberate.
- Education and certification stay on the site (they were already there). The PDF resume does
  not list them (owner's choice).
