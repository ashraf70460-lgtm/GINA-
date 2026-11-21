# GINA Asthma Mastery

Asthma learning, bedside tools, patient follow-up and clinic reports based on the
**GINA 2026** Global Strategy for Asthma Management and Prevention.

Developed by **Dr. Ashraf Ahmed**.

## What's inside

- Clinic dashboard with patient KPIs, attention list and review schedule
- 18 learning modules (GINA 2026 content plus clearly labelled supplementary sources)
- 30 bedside tools: diagnosis, control and risk, step finder, spirometry, PRAM,
  exacerbation grader, action plans, biologics, OCS stewardship, ventilation helper and more
- Patient follow-up with charts and 8 printable reports (Print / Save as PDF)
- Flashcards, MCQs, clinical cases and a "What's new" quiz
- Works offline after the first visit (installable as an app on phones)

Patient records are stored only in the browser of the device that entered them.
Use initials or IDs, never full names. Use **Patients → Backup** to move records.

## Project layout

```
index.html              app code (UI, tools, follow-up, study)
content/config.js       edition list + active edition
content/SCHEMA.md       how the content files are structured
content/gina-2026/      all guideline content for the 2026 edition
sw.js                   offline support
vercel.json             Vercel settings (static site, no build step)
tools/make_standalone.py  builds a single-file offline copy
```

## Deploying on Vercel

This is a static site with no build step.

1. In Vercel, **Add New → Project → Import** this GitHub repository.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Deploy. Every push to `main` redeploys automatically.

## Updating to a new GINA edition

1. Copy `content/gina-2026/` to `content/gina-2027/` and change `"2026"` to `"2027"`
   in each `GINA.register(...)` call.
2. Update the content from the new report (see `content/SCHEMA.md`).
3. In `content/config.js` add the edition and set `activeEdition: "2027"`.
4. Add the new file paths to the list at the top of `sw.js` and bump `CACHE`.
5. Commit and push: Vercel publishes it. The 2026 edition stays viewable as an archive.

## Single-file offline copy

```
python3 tools/make_standalone.py . GINA-Asthma-Mastery.html
```

## Disclaimer

Educational and decision-support tool. It does not replace clinical judgement,
local guidelines, product information or the official GINA report.
Not affiliated with or endorsed by the Global Initiative for Asthma.
GINA content is copyrighted; keep use personal or educational unless permission is obtained.
