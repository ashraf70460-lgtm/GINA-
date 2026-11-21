# Content schema — GINA Asthma Mastery

All guideline content lives in `content/`, separate from the app code in `index.html`.
To add a new GINA edition you only add a folder and edit `config.js`. No code changes.

## Folder layout

```
index.html                 app code (UI, calculators, follow-up, learning engine)
content/
  config.js                edition list + activeEdition
  SCHEMA.md                this file
  gina-2026/
    meta.js                edition info + module list
    topics.js              learning topics (Summary → Key points → Body → Pearls)
    data.js                structured tables used by calculators and algorithms
    learning.js            flashcards, MCQs, clinical cases
    whatsnew.js            hand-written "What's new" vs previous edition
```

Each file calls `GINA.register("<edition>", "<part>", value)`. Files are plain JavaScript
(not JSON) so the app also works when opened directly from disk (file://), where browsers
block fetching JSON.

## How to update when a new report is released

1. Copy `content/gina-2026/` to `content/gina-2027/`.
2. In every file change `GINA.register("2026", …)` to `GINA.register("2027", …)`.
3. Edit the content to match the new report (or give the new PDF to Claude together with
   this SCHEMA.md and ask it to regenerate the five files).
4. In `config.js` add the new edition to `editions` and set `activeEdition: "2027"`.
5. The Update Centre will automatically show a diff against 2026 (topics added/removed/
   changed, data tables changed). 2026 stays viewable in read-only archive mode.

## meta.js

```js
{ edition, title, released, pageNote,
  modules: [ { id, title, short, color, blurb } ] }
```
`color` is one of: blue, teal, violet, orange, pink, green, red, indigo, amber, slate, cyan, lime.

## topics.js — array of topics

| field     | type      | notes |
|-----------|-----------|-------|
| id        | string    | stable id; keep the same across editions so the diff can match it |
| module    | string    | a module id from meta.js |
| title     | string    | |
| ref       | string    | GINA box / page reference |
| summary   | string    | 1–3 sentences |
| keyPoints | string[]  | bullet points |
| body      | HTML string | tables use `class="tbl"`, wrap wide tables in `<div class="scroll">`; callouts `<div class="callout warn">` |
| pearls    | string[]  | "Pearls & pitfalls" |
| widget    | string?   | interactive component id (see list below) |

Widget ids available in the app: `dxflow, bdrcalc, pefvar, controltool, scoretool, stepsadult,
initialadult, martdoses, icsdose, initialchild, stepschild, psdx, stepspreschool, actionplan,
severity6, pram, ocscalc, severetree, t2check, biologics, copdsyndrome`.

## data.js — keys used by the calculators

- `icsDoses.adult[]`, `icsDoses.child[]`: `{ id, drug, lowMin, lowMax, medMax }`, or
  `{ lowMedMax, highFrom | highAbove | highNA }` where GINA merges low/medium, or `{ deviceDependent: true }`.
- `icsDoses.preschool.rows[]`: `[drug, low dose text]`.
- `martDoses.groups[]`: `{ age, product, seek, rows: [[step, dose]] }`, `notes[]`.
- `stepsAdult.track1|track2`: `{ name, reliever, steps: [{ n, label, text }] }`, `other[]`.
- `stepsChild`, `stepsPreschool`: `{ steps: [{ n, label, text, other, consider? }], reliever }`.
- `initialAdult.rows[]`: `{ id, presenting, t1, t2 }`; `initialChild.rows[]`: `{ id, presenting, rec }`.
- `riskFactors`: `{ exacerbation: [{ id, label, high? }], airflow[], sideEffects[] }`.
- `severity6.levels.{mild|moderate|severe|life}`: `{ criteria[], primary[], ed[] }`, plus `ocs`, `discharge[]`, `admission[]`.
- `pram.items[]`: `{ id, label, options: [[text, points]] }`, `bands: [[min, max, label]]`.
- `preschoolAcute`: `{ transfer[], meds: [[drug, dose]] }`.
- `actionPlans.regimens[]`: `{ id, label, usual, worse, seek }` with placeholders `{RELIEVER} {MAINT} {N}`; `ocsAdult, ocsChild, ocsWhen` (`{PEF60}`).
- `biologics.classes[]`: `{ id, name, drugs, age, dosing, eligibility, predictors[], outcome, trial, adverse }`; `nonAsthma: [[drug, indication, dose, age]]`.
- `severeTree.stages[]`: `{ n, band: gp|sp|co, title, text }`; `t2criteria: { eos, feno, sputum }`.
- `copdSyndrome`: `{ asthma[], copd[], treat: { asthma[], both[], copd[] } }`.
- `preschoolDx.criteria[]`: `{ id, title, text }`.

Every block has a `ref` string shown under the tool.

## learning.js

- `flashcards[]`: `{ id, m (module id), q, a, ref, tag? ("new2026") }`
- `mcqs[]`: `{ id, m, q, o: [options], a: index of correct option, e: explanation, ref, tag? }`
- `cases[]`: `{ id, title, tag, steps: [{ text, o[], a, e }] }`

Use `tag: "new<edition>"` (e.g. `new2027`) for items about the new edition's changes;
the "What's new quiz" picks these up automatically.

## whatsnew.js

```js
{ previous: "2025", ref, items: [ { area, title, text, module } ] }
```
