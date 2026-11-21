/* Structured clinical data used by the calculators and interactive algorithms.
   Every block carries a "ref" so the app can show where it came from. */
GINA.register("2026", "data", {

  /* ---------- Box 4-2: daily METERED ICS doses (mcg) ----------
     lowMax: top of low range; medMax: top of medium range (above = high).
     lowMedMax: used where GINA gives one value spanning low–medium. */
  icsDoses: {
    ref: "Box 4-2 p.77",
    adult: [
      { id: "bdp-std", drug: "Beclometasone dipropionate (pMDI, standard particle, HFA)", lowMin: 200, lowMax: 500, medMax: 1000 },
      { id: "bdp-xf", drug: "Beclometasone dipropionate (DPI or pMDI, extrafine, HFA)", lowMin: 100, lowMax: 200, medMax: 400 },
      { id: "bud", drug: "Budesonide (DPI, or pMDI standard particle, HFA)", lowMin: 200, lowMax: 400, medMax: 800 },
      { id: "cic", drug: "Ciclesonide (pMDI, extrafine, HFA)", lowMin: 80, lowMax: 160, medMax: 320 },
      { id: "ff", drug: "Fluticasone furoate (DPI)", lowMedMax: 100, highFrom: 200 },
      { id: "fp-dpi", drug: "Fluticasone propionate (DPI)", lowMin: 100, lowMax: 250, medMax: 500 },
      { id: "fp-mdi", drug: "Fluticasone propionate (pMDI, standard particle, HFA)", lowMin: 100, lowMax: 250, medMax: 500 },
      { id: "mf-dpi", drug: "Mometasone furoate (DPI)", deviceDependent: true },
      { id: "mf-mdi", drug: "Mometasone furoate (pMDI, standard particle, HFA)", lowMedMin: 200, lowMedMax: 400, highAbove: 400 }
    ],
    child: [
      { id: "bdp-std", drug: "Beclometasone dipropionate (pMDI, standard particle, HFA)", lowMin: 100, lowMax: 200, medMax: 400 },
      { id: "bdp-xf", drug: "Beclometasone dipropionate (pMDI, extrafine, HFA)", lowMin: 50, lowMax: 100, medMax: 200 },
      { id: "bud", drug: "Budesonide (DPI, or pMDI standard particle, HFA)", lowMin: 100, lowMax: 200, medMax: 400 },
      { id: "bud-neb", drug: "Budesonide (nebules)", lowMin: 250, lowMax: 500, medMax: 1000 },
      { id: "cic", drug: "Ciclesonide (pMDI, extrafine, HFA)", lowMin: 80, lowMax: 80, medMax: 160 },
      { id: "ff", drug: "Fluticasone furoate (DPI)", lowMedMax: 50, highNA: true },
      { id: "fp-dpi", drug: "Fluticasone propionate (DPI)", lowMin: 50, lowMax: 100, medMax: 200 },
      { id: "fp-mdi", drug: "Fluticasone propionate (pMDI, standard particle, HFA)", lowMin: 50, lowMax: 100, medMax: 200 },
      { id: "mf-mdi", drug: "Mometasone furoate (pMDI, standard particle, HFA)", lowMedMax: 100, highFrom: 200 }
    ],
    preschool: {
      ref: "Box 11-3 p.208",
      rows: [
        ["BDP (pMDI, standard particle, HFA)", "100 (ages 5 years and older)"],
        ["BDP (pMDI, extrafine particle, HFA)", "50 (ages 5 years and older)"],
        ["Budesonide nebulized", "500 (ages 1 year and older)"],
        ["Budesonide, pMDI or DPI", "Awaiting systematic review"],
        ["Fluticasone propionate (pMDI, standard particle, HFA)", "50 (ages 4 years and older)"],
        ["Fluticasone furoate (DPI)", "Not sufficiently studied in children ≤5 years"],
        ["Mometasone furoate (pMDI, standard particle, HFA)", "100 (ages 5 years and older)"],
        ["Ciclesonide (pMDI, extrafine particle, HFA)", "Not sufficiently studied in children ≤5 years"]
      ]
    }
  },

  /* ---------- Box 4-8B ---------- */
  martDoses: {
    ref: "Box 4-8B p.91",
    groups: [
      { age: "Children 6–11 years", product: "Budesonide-formoterol DPI or pMDI 80/4.5 (100/6 metered), or BDP-formoterol 100/6", seek: 8,
        rows: [["Steps 1–2 AIR-only", "1 inhalation as needed"], ["Step 3 MART", "1 inhalation once daily + 1 as needed"], ["Step 4 MART", "1 inhalation twice daily + 1 as needed"], ["Step 5 MART", "Not recommended"]] },
      { age: "Adolescents 12–17 years", product: "Budesonide-formoterol DPI or pMDI 160/4.5 (200/6 metered), or BDP-formoterol 100/6", seek: 12,
        rows: [["Steps 1–2 AIR-only", "1 inhalation as needed"], ["Step 3 MART", "1 inhalation twice (or once) daily + 1 as needed"], ["Steps 4–5 MART", "2 inhalations twice daily + 1 as needed"]] },
      { age: "Adults 18+", product: "Budesonide-formoterol DPI or pMDI 160/4.5 (200/6 metered), or BDP-formoterol 100/6", seek: 12,
        rows: [["Steps 1–2 AIR-only", "1 inhalation as needed"], ["Step 3 MART", "1 inhalation twice (or once) daily + 1 as needed"], ["Steps 4–5 MART", "2 inhalations twice daily + 1 as needed"]] }
    ],
    notes: [
      "Budesonide-formoterol doses shown as delivered dose (metered dose in brackets); BDP-formoterol shown as metered dose.",
      "BDP-formoterol has not been studied for as-needed-only use (Steps 1–2) but may be suitable.",
      "Budesonide-formoterol 80/2.25 (100/3) pMDI: double the inhalations (AIR 2 as needed; Step 3 MART 2 bd + 2 as needed; Step 4 MART 4 bd + 2 as needed). Seek care if >24 inhalations in 24 h.",
      "Do NOT use budesonide-formoterol 320/9 (400/12) or BDP-formoterol 200/6 as a reliever.",
      "For pMDI use a spacer, and shake before every actuation."
    ]
  },

  /* ---------- Box 4-6 ---------- */
  stepsAdult: {
    ref: "Box 4-6 p.83",
    track1: {
      name: "Track 1 · preferred", reliever: "As-needed low-dose ICS-formoterol",
      steps: [
        { n: "1–2", label: "AIR-only", text: "As-needed low-dose ICS-formoterol" },
        { n: "3", label: "Low-dose MART", text: "Low-dose maintenance ICS-formoterol + same as reliever" },
        { n: "4", label: "Medium-dose MART", text: "Medium-dose maintenance ICS-formoterol + same as reliever" },
        { n: "5", label: "Add-on & phenotype", text: "Add-on LAMA · refer for phenotype assessment · consider high-dose ICS-formoterol trial · anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP" }
      ]
    },
    track2: {
      name: "Track 2 · alternative", reliever: "As-needed low-dose ICS-SABA (or, if not available, as-needed SABA)",
      steps: [
        { n: "1", label: "AIR-only", text: "As-needed low-dose ICS+SABA (combination or separate inhalers)" },
        { n: "2", label: "Low-dose ICS", text: "Low-dose maintenance ICS" },
        { n: "3", label: "Low-dose ICS-LABA", text: "Low-dose maintenance ICS-LABA" },
        { n: "4", label: "Medium-dose ICS-LABA", text: "Medium-dose maintenance ICS-LABA" },
        { n: "5", label: "Add-on & phenotype", text: "Add-on LAMA · refer for phenotype assessment · consider high-dose ICS-LABA trial · anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP" }
      ]
    },
    other: [
      "Other controller options (less evidence or efficacy): LTRA (warn about neuropsychiatric effects), ICS taken whenever SABA is taken; maintenance OCS only as last resort.",
      "Allergen immunotherapy: consider HDM SLIT for sensitised patients with not-well-controlled (but stable) asthma.",
      "Non-pharmacological: smoking cessation, physical activity, pulmonary rehabilitation, weight reduction, vaccinations."
    ]
  },

  stepsChild: {
    ref: "Box 4-12 p.104",
    steps: [
      { n: "1", label: "AIR-only", text: "As-needed low-dose ICS-formoterol, OR as-needed low-dose ICS+SABA (combination or separate inhalers)", other: "" },
      { n: "2", label: "Daily low-dose ICS", text: "Daily low-dose ICS", other: "As-needed low-dose ICS-formoterol or ICS-SABA; or daily LTRA" },
      { n: "3", label: "Three options", text: "Medium-dose ICS, OR low-dose ICS-LABA, OR low-dose ICS-formoterol MART", other: "Low-dose ICS + LTRA" },
      { n: "4", label: "Escalate", text: "Medium-dose ICS-LABA, OR low-dose ICS-formoterol MART (Step 4 dose = 2× Step 3), OR refer for expert advice", other: "Add tiotropium or LTRA to Step 3 preferred controller" },
      { n: "5", label: "Specialist", text: "Refer for phenotypic assessment; consider higher-dose ICS-LABA or add-on therapy, e.g. LAMA, anti-IgE, anti-IL4Rα, anti-IL5", other: "Refer for expert advice" }
    ],
    reliever: "As-needed low-dose ICS-formoterol or as-needed low-dose ICS-SABA, or as-needed SABA (if AIR not available)"
  },

  stepsPreschool: {
    ref: "Box 11-2 p.207",
    steps: [
      { n: "1", label: "No daily controller", text: "Insufficient evidence for daily controller", other: "Consider intermittent short-course ICS at onset of viral illness", consider: "Infrequent viral wheezing, no or minimal interval symptoms" },
      { n: "2", label: "Daily low-dose ICS", text: "Daily low-dose ICS (see Box 11-3)", other: "Daily LTRA, or intermittent short-course ICS at onset of respiratory illness", consider: "Symptoms not well controlled, or ≥1 severe exacerbation in past year" },
      { n: "3", label: "Double low dose", text: "Double the ‘low dose’ ICS", other: "Consider referral for expert assessment", consider: "Not well controlled on low-dose ICS" },
      { n: "4", label: "Refer", text: "Continue controller and refer for expert assessment", other: "", consider: "Not well controlled on Step 3 ICS" }
    ],
    reliever: "As-needed short-acting beta2-agonist"
  },

  /* ---------- Box 4-4 and 4-10 ---------- */
  initialAdult: {
    ref: "Box 4-4 p.81",
    rows: [
      { id: "infrequent", presenting: "Infrequent symptoms, e.g. ≤2 days/week",
        t1: "As-needed low-dose ICS-formoterol (Evidence A)",
        t2: "As-needed low-dose ICS+SABA, combination or separate inhalers (Evidence B). Daily ICS adherence is unlikely with such infrequent symptoms." },
      { id: "lt35", presenting: "Symptoms less than 3–5 days/week, normal or mildly reduced lung function",
        t1: "As-needed low-dose ICS-formoterol (Evidence A)",
        t2: "Daily low-dose ICS plus as-needed low-dose ICS-SABA (Evidence B) or as-needed SABA. Consider likely adherence first." },
      { id: "mostdays", presenting: "Symptoms most days (≥4 days/week), or night waking ≥1/week, or low lung function",
        t1: "Low-dose ICS-formoterol MART (Evidence A)",
        t2: "Low-dose ICS-LABA plus as-needed ICS-SABA (Evidence B) OR medium-dose ICS plus as-needed SABA (Evidence A)." },
      { id: "daily", presenting: "Daily symptoms or night waking ≥1/week AND low lung function or recent exacerbation",
        t1: "Medium-dose ICS-formoterol MART (Evidence B)",
        t2: "Medium-dose ICS-LABA plus as-needed ICS-SABA (Evidence B) or as-needed SABA." },
      { id: "acute", presenting: "Initial presentation is an acute exacerbation",
        t1: "Treat as exacerbation (Box 9-4, 9-6), short OCS course if severe; start medium-dose MART (Evidence D)",
        t2: "Treat as exacerbation, OCS if severe; start medium-dose ICS-LABA plus as-needed SABA (Evidence D)" }
    ]
  },
  initialChild: {
    ref: "Box 4-10 p.102",
    rows: [
      { id: "infrequent", presenting: "Infrequent symptoms, e.g. ≤2 days/week",
        rec: "As-needed low-dose ICS-formoterol (Evidence B), OR as-needed low-dose ICS+SABA: combination ICS-SABA (Evidence C) or ICS taken whenever SABA is taken (Evidence B)" },
      { id: "34", presenting: "Symptoms 3–4 days/week",
        rec: "Daily low-dose ICS + as-needed SABA (Evidence A) or + as-needed ICS-SABA (Evidence B). Non-preferred: as-needed ICS-formoterol (C), ICS whenever SABA taken (B), daily LTRA." },
      { id: "mostdays", presenting: "Symptoms most days (4–5 days/week), night waking ≥1/week, or low lung function",
        rec: "Low-dose ICS-LABA or medium-dose ICS + as-needed SABA (Evidence A) or ICS-SABA (C), OR low-dose ICS-formoterol MART (Evidence B)" },
      { id: "daily", presenting: "Daily symptoms or night waking ≥1/week AND low lung function or recent exacerbation",
        rec: "Medium-dose ICS-LABA + as-needed SABA or ICS-SABA, OR low-dose ICS-formoterol MART" },
      { id: "acute", presenting: "Initial presentation is an acute exacerbation",
        rec: "Treat as exacerbation (Box 9-4), OCS if severe; start Step 3 or Step 4 treatment before discharge" }
    ]
  },

  /* ---------- Box 2-2 / 11-1 risk factors for the checklist ---------- */
  riskFactors: {
    ref: "Box 2-2B p.41",
    exacerbation: [
      { id: "saba", label: "SABA over-use (≥3 × 200-dose canisters/year)", high: false },
      { id: "saba12", label: "SABA ≥1 canister/month (mortality risk)", high: true },
      { id: "noics", label: "Inadequate ICS: not prescribed, poor adherence or incorrect technique" },
      { id: "obesity", label: "Obesity" },
      { id: "crs", label: "Chronic rhinosinusitis" },
      { id: "gerd", label: "GERD" },
      { id: "food", label: "Confirmed food allergy", high: true },
      { id: "preg", label: "Pregnancy" },
      { id: "smoke", label: "Smoking or e-cigarettes" },
      { id: "allergen", label: "Allergen exposure if sensitised" },
      { id: "pollution", label: "Air pollution" },
      { id: "psych", label: "Major psychological or socioeconomic problems" },
      { id: "fev60", label: "FEV1 <60% predicted", high: true },
      { id: "bdr", label: "High bronchodilator responsiveness" },
      { id: "t2", label: "Raised blood eosinophils or high FeNO" },
      { id: "icu", label: "Ever intubated or in ICU for asthma", high: true },
      { id: "sev1", label: "≥1 severe exacerbation in the last year", high: true }
    ],
    preschool: [
      { id: "sev", label: "≥1 severe acute episode (ED, hospitalisation or OCS) in previous year", high: true },
      { id: "unc", label: "Uncontrolled asthma symptoms" },
      { id: "season", label: "Start of the child's usual flare-up season (especially autumn)" },
      { id: "indoor", label: "Indoor exposures: tobacco smoke, indoor pollution, house dust mite, cockroach, pets, mould" },
      { id: "psych", label: "Major psychological or socioeconomic problems for child or family" },
      { id: "adh", label: "Poor adherence to ICS or incorrect inhaler technique" },
      { id: "outdoor", label: "Outdoor air pollution (NO₂, particles)" }
    ],
    airflow: ["Preterm birth / low birth weight / greater infant weight gain", "Frequent productive cough", "No ICS despite severe exacerbation history", "Tobacco smoke, noxious chemicals, occupational exposures", "Low initial FEV1", "Sputum or blood eosinophilia"],
    sideEffects: ["Frequent OCS", "Long-term high-dose or potent ICS", "CYP450 inhibitors (ritonavir, ketoconazole, itraconazole)", "Poor inhaler technique (local effects)"]
  },

  /* ---------- Box 9-4 / 9-6: severity ≥6 years ---------- */
  severity6: {
    ref: "Box 9-4 p.181; Box 9-6 p.186",
    levels: {
      mild: {
        criteria: ["Talks in sentences, can lie down, not agitated", "Respiratory rate normal or mildly increased", "No or mild accessory muscle use", "No or mild expiratory wheeze", "Normal air entry", "SpO₂ (air) ≥94%", "PEF >70% personal best or predicted", "If <18 y: PRAM 1–3"],
        primary: ["Salbutamol 4 puffs by pMDI + spacer, OR budesonide-formoterol 160/4.5 mcg 2 puffs", "Assess response; if needed repeat once after 30–60 min"],
        ed: ["Salbutamol 4 puffs by pMDI + spacer, OR budesonide-formoterol 160/4.5 mcg 2 puffs", "Assess response; if needed repeat once after 30–60 min"]
      },
      moderate: {
        criteria: ["Talks in phrases, prefers sitting, not agitated", "Respiratory rate increased but ≤30/min", "Accessory muscle use", "Expiratory wheeze", "Decreased air entry", "SpO₂ (air) ≥92%", "PEF 50–70% personal best or predicted", "If <18 y: PRAM 4–7"],
        primary: ["Salbutamol 4–6 puffs by pMDI + spacer (or 2.5 mg nebulised), up to 3 times if needed, 20–30 min apart", "If ipratropium available and needed: 4 puffs with salbutamol, up to 3 times", "Start oral corticosteroids"],
        ed: ["Salbutamol 4–6 puffs + ipratropium 4 puffs by pMDI + spacer, OR salbutamol 2.5 mg + ipratropium 0.25 mg nebulised", "If needed give up to 3 times, 20–30 min apart", "Start systemic corticosteroids"]
      },
      severe: {
        criteria: ["Unable to speak, drink or lie down", "SpO₂ (air) <92%", "Respiratory rate >30/min", "Silent or quiet chest", "PEF <50% personal best or predicted", "If <18 y: PRAM 8–10 (8–12 in primary care)"],
        primary: ["ARRANGE TRANSFER to acute care facility; start treatment immediately", "If anaphylaxis + asthma: epinephrine first", "Salbutamol 6–10 puffs by pMDI + spacer (or 5 mg nebulised), repeat every 20–30 min if needed", "Ipratropium 4 puffs each time salbutamol given, up to 3 times", "Oxygen: target 92–95%", "Systemic corticosteroids; monitor continuously"],
        ed: ["If anaphylaxis + asthma: IM epinephrine first", "Salbutamol 6–10 puffs + ipratropium 4 puffs by pMDI + spacer, OR salbutamol 5 mg + ipratropium 0.25 mg nebulised, up to 3 times 20–30 min apart", "Oxygen to SpO₂ 92–95%", "Systemic corticosteroids", "Consider IV magnesium sulfate (2 g over 20 min)", "Monitor continuously"]
      },
      life: {
        criteria: ["Drowsy, confused or cyanosed", "Quiet/silent chest", "If <18 y: highest PRAM category (11–12)"],
        primary: ["ARRANGE TRANSFER; start treatment immediately as for severe", "If anaphylaxis + asthma: epinephrine first"],
        ed: ["Start immediately: nebulised salbutamol + ipratropium, oxygen, systemic corticosteroids", "If anaphylaxis + asthma: IM epinephrine first", "CALL FOR HELP from PICU/ICU or anaesthesia", "IV access; oxygen 100% non-rebreather; IV magnesium; chest X-ray; blood gases; monitor for SABA toxicity; monitor continuously"]
      }
    },
    ocs: "Adults: prednisolone 1 mg/kg/day up to 50 mg, usually 5–7 days. Children 6–11: 1–2 mg/kg/day up to 40 mg, 3–5 days.",
    discharge: ["Symptoms/signs meet ‘mild’ criteria for ≥1–2 h after last salbutamol", "SpO₂ ≥92% on room air", "PEF or FEV1 >70% personal best or predicted", "Adequate resources at home"],
    admission: ["SpO₂ <92% on room air", "Ongoing need for SABA more often than every 1–2 h", "Dyspnoea persisting 4–6 h after systemic corticosteroids", "Factors affecting adherence or follow-up, or red flags for asthma death (Box 9-1)"]
  },

  /* ---------- Box 12-2 PRAM ---------- */
  pram: {
    ref: "Box 12-2 p.218 (PRAM © 2011 Francine Ducharme, reproduced in GINA with permission)",
    items: [
      { id: "spo2", label: "O₂ saturation", options: [["≥95%", 0], ["92–94%", 1], ["<92%", 2]] },
      { id: "supra", label: "Suprasternal retraction", options: [["Absent", 0], ["Present", 2]] },
      { id: "scal", label: "Scalene muscle contraction", options: [["Absent", 0], ["Present", 2]] },
      { id: "air", label: "Air entry (worst lung field)", options: [["Normal", 0], ["Decreased at the base", 1], ["Decreased at apex and base", 2], ["Minimal or absent", 3]] },
      { id: "wh", label: "Wheezing (two worst zones)", options: [["Absent", 0], ["Expiratory only", 1], ["Inspiratory (± expiratory)", 2], ["Audible without stethoscope, or silent chest", 3]] }
    ],
    bands: [[0, 3, "Mild"], [4, 7, "Moderate"], [8, 12, "Severe"]],
    note: "Valid for ages 2–17 years. In the GINA acute flowcharts, PRAM 8–10 = severe and 11–12 = life-threatening."
  },

  /* ---------- Box 12-1/12-4: preschool acute ---------- */
  preschoolAcute: {
    ref: "Box 12-1, 12-3, 12-4 p.217–220",
    transfer: ["Cyanosis", "Unable to speak or drink", "Respiratory rate >40/min", "SpO₂ <92% on room air", "Quiet chest when dyspnoeic", "No response to 4–6 puffs salbutamol every 20 min ×3 over 1 h", "Persistent tachypnoea despite 3 salbutamol doses", "Social situation limits home management"],
    meds: [
      ["Oxygen", "Face mask or nasal prongs to keep SpO₂ ≥92%"],
      ["Salbutamol", "4+ puffs (100 mcg) by spacer one at a time, or 2.5 mg nebulised; moderate/severe: every 20 min up to 3 times, then reassess"],
      ["Prednisolone", "1–2 mg/kg (max 20 mg <2 y; max 30 mg 2–5 y) for 3–5 days"],
      ["Dexamethasone", "0.3–0.6 mg/kg (max 12 mg) for total 1–2 days"],
      ["Methylprednisolone IV", "1 mg/kg 6-hourly on day 1"],
      ["Ipratropium", "4 puffs of 20 mcg (or 0.25 mg nebulised) with SABA up to 3 times"],
      ["Magnesium sulfate IV", "40–50 mg/kg (max 2 g) over 10–20 min, ≥2 years, severe"]
    ]
  },

  /* ---------- Box 9-2 action plans ---------- */
  actionPlans: {
    ref: "Box 9-2 p.174",
    regimens: [
      { id: "t1-air", label: "Track 1 · Steps 1–2 · AIR-only ICS-formoterol", usual: "Use 1 inhalation of {RELIEVER} whenever you have symptoms. No daily inhaler.", worse: "Keep taking 1 inhalation of {RELIEVER} whenever needed. You can take an extra inhalation a few minutes later.", seek: "Seek medical care if you need more than {N} inhalations in 24 hours." },
      { id: "t1-mart", label: "Track 1 · Steps 3–5 · MART ICS-formoterol", usual: "Take your maintenance dose every day: {MAINT}. Use 1 extra inhalation whenever you have symptoms.", worse: "Continue your usual maintenance dose. Take 1 extra inhalation of {RELIEVER} whenever needed.", seek: "Seek medical care if you need more than {N} inhalations in total (maintenance + reliever) in 24 hours." },
      { id: "t2-icssaba-1", label: "Track 2 · Step 1 · as-needed ICS-SABA", usual: "Take 2 inhalations of ICS-SABA (budesonide-salbutamol) when you have symptoms.", worse: "Take 2 inhalations of ICS-SABA as needed.", seek: "Seek medical care if you need more than 6 doses (12 inhalations) of ICS-SABA in 24 hours." },
      { id: "t2-icssaba-m", label: "Track 2 · Steps 2–4 · maintenance + ICS-SABA reliever", usual: "Take your maintenance inhaler every day: {MAINT}. Take 2 inhalations of ICS-SABA when you have symptoms.", worse: "Continue your usual maintenance dose. Take 2 inhalations of ICS-SABA as needed.", seek: "Seek medical care if you need more than 6 doses (12 inhalations) of ICS-SABA in 24 hours." },
      { id: "t2-saba-1", label: "Track 2 · Step 1 · SABA + ICS separate inhalers", usual: "When you have symptoms, take SABA and also take your ICS inhaler each time (e.g. 1 inhalation of BDP 40 mcg per SABA inhalation).", worse: "Take SABA 2 inhalations every 4–6 hours if needed, with ICS each time.", seek: "Seek medical care if you need more than 12 inhalations of SABA in 24 hours." },
      { id: "t2-saba-ics", label: "Track 2 · Step 2 · maintenance ICS + SABA", usual: "Take your ICS every day: {MAINT}. Take SABA 2 inhalations when you have symptoms.", worse: "Consider quadrupling your maintenance ICS dose for 1–2 weeks (as agreed with your doctor). SABA 2 inhalations every 4–6 hours if needed.", seek: "Seek medical care if you need more than 12 inhalations of SABA in 24 hours." },
      { id: "t2-saba-icslaba", label: "Track 2 · Steps 3–4 · maintenance ICS-LABA + SABA", usual: "Take your ICS-LABA every day: {MAINT}. Take SABA 2 inhalations when you have symptoms.", worse: "If ICS-formoterol: consider quadrupling maintenance for 1–2 weeks. If other ICS-LABA: step up to a higher-dose formulation, or add a separate ICS inhaler (adults). SABA 2 inhalations every 4–6 hours if needed.", seek: "Seek medical care if you need more than 12 inhalations of SABA in 24 hours." }
    ],
    ocsAdult: "Prednisolone 40–50 mg once daily (morning) for 5–7 days. No taper needed if less than 2 weeks.",
    ocsChild: "Prednisolone 1–2 mg/kg/day (max 40 mg) for 3–5 days, or dexamethasone 0.3–0.6 mg/kg (max 12 mg) for 1–2 days total.",
    ocsWhen: "Start OCS (and contact your doctor) if no improvement after 2–3 days of increased inhaler use, if getting rapidly worse, or if peak flow falls below {PEF60} L/min (60% of best)."
  },

  /* ---------- Section 8: biologics ---------- */
  biologics: {
    ref: "p.162–167; Box 8-4 p.154; Box 8-6 p.166",
    classes: [
      { id: "ige", name: "Anti-IgE", drugs: "Omalizumab, biosimilar omalizumab-igec", age: 6,
        dosing: "SC every 2–4 weeks; dose by weight and total serum IgE", eligibility: "Sensitisation to inhaled allergen (SPT or sIgE); total IgE and weight within dosing range; exacerbations in last year",
        predictors: ["Childhood-onset asthma (+)", "Allergen-driven symptoms (+)", "Baseline IgE does NOT predict response"],
        outcome: "≈44% fewer severe exacerbations (RCT meta-analysis); 59% in observational data", trial: "≥4 months", adverse: "Injection-site reactions; anaphylaxis ≈0.2%; contains polysorbate" },
      { id: "il5", name: "Anti-IL5 / anti-IL5Rα", drugs: "Mepolizumab (≥6 y), benralizumab (≥12 y), depemokimab (≥12 y), reslizumab IV (≥18 y)", age: 6,
        dosing: "Mepolizumab 100 mg SC q4w (40 mg q4w age 6–11); benralizumab 30 mg SC q4w ×3 then q8w; depemokimab 100 mg SC q26w; reslizumab 3 mg/kg IV q4w", eligibility: "Severe exacerbations in last year; blood eosinophils above local level (e.g. ≥150 or ≥300/µL)",
        predictors: ["Higher blood eosinophils (+++)", "More exacerbations in prior year (+++)", "Adult-onset asthma (++)", "Nasal polyposis (++)", "Maintenance OCS at baseline", "FEV1 <65% (one study)"],
        outcome: "47–54% fewer severe exacerbations; depemokimab 48–58%; ≈50% OCS dose reduction (mepolizumab, benralizumab)", trial: "≥4 months (6 months for depemokimab)", adverse: "Injection-site reactions; anaphylaxis rare" },
      { id: "il4", name: "Anti-IL4Rα", drugs: "Dupilumab", age: 6,
        dosing: "≥12 y: 200 or 300 mg SC q2w (300 mg if OCS-dependent, atopic dermatitis or CRSwNP); 6–11 y weight-based", eligibility: "Severe exacerbations in last year; eosinophils ≥150 and ≤1500/µL or FeNO ≥25 ppb, OR maintenance OCS",
        predictors: ["Higher blood eosinophils (+++)", "Higher FeNO (+++)", "Nasal polyposis (++)"],
        outcome: "≈56% fewer severe exacerbations; OCS dose reduction 50% greater than placebo", trial: "≥4 months", adverse: "Injection-site reactions; transient eosinophilia (4–13%); rare EGPA unmasking. Not for eosinophils >1500/µL." },
      { id: "tslp", name: "Anti-TSLP", drugs: "Tezepelumab", age: 12,
        dosing: "210 mg SC every 4 weeks", eligibility: "Severe exacerbations in last year; with or without Type 2 markers",
        predictors: ["Higher blood eosinophils (+++)", "Higher FeNO (+++)", "Nasal polyposis (++)"],
        outcome: "30–70% fewer severe exacerbations; improved QoL, lung function, symptoms; no OCS-sparing effect shown", trial: "≥4 months", adverse: "Injection-site reactions; anaphylaxis rare" }
    ],
    nonAsthma: [
      ["Omalizumab / omalizumab-igec", "IgE-mediated food allergy", "Weight and IgE based", "≥1 year"],
      ["Omalizumab / omalizumab-igec", "CRSwNP", "Weight and IgE based", "≥18 years"],
      ["Omalizumab / omalizumab-igec", "Chronic spontaneous urticaria", "150 or 300 mg SC q4w", "≥12 years"],
      ["Mepolizumab", "CRSwNP", "100 mg SC q4w", "≥18 years"],
      ["Mepolizumab", "COPD, eosinophilic phenotype", "100 mg SC q4w", "≥18 years"],
      ["Mepolizumab", "EGPA", "300 mg SC q4w", "≥18 years"],
      ["Mepolizumab", "Hypereosinophilic syndrome", "300 mg SC q4w", "≥12 years"],
      ["Depemokimab", "CRSwNP", "100 mg SC q26w", "≥18 years"],
      ["Benralizumab", "EGPA", "30 mg SC q4w", "≥18 years"],
      ["Dupilumab", "Moderate–severe atopic dermatitis", "Adults 300 mg q2w; children by age/weight", "≥6 months"],
      ["Dupilumab", "Chronic spontaneous urticaria", "By age/weight", "≥12 years"],
      ["Dupilumab", "CRSwNP", "300 mg SC q2w", "≥12 years"],
      ["Dupilumab", "COPD, chronic bronchitis + eosinophilic", "300 mg SC q2w", "≥18 years"],
      ["Dupilumab", "Eosinophilic oesophagitis", "Weight-based", "≥1 year"],
      ["Tezepelumab", "CRSwNP", "210 mg q4w", "≥12 years"]
    ]
  },

  /* ---------- Box 8-2 to 8-5 ---------- */
  severeTree: {
    ref: "Box 8-2 to 8-5 p.152–155",
    stages: [
      { n: 1, band: "gp", title: "Confirm the diagnosis", text: "Asthma vs differential diagnoses. For adolescents/adults with symptoms and/or exacerbations despite medium- or high-dose ICS-LABA, or on maintenance OCS." },
      { n: 2, band: "gp", title: "Look for contributing factors", text: "Incorrect technique · suboptimal adherence · comorbidities (obesity, GERD, CRS ± polyps, OSA, ILO) · modifiable risks and triggers (smoking, environment, allergens, beta-blockers, NSAIDs) · SABA over-use · side-effects · anxiety, depression, social difficulties." },
      { n: 3, band: "gp", title: "Optimise management", text: "Education · technique and adherence · switch to ICS-formoterol MART · non-pharmacological (smoking cessation, exercise, weight loss, mucus clearance, vaccines) · treat comorbidities · non-biologic add-ons (LAMA, LTRA) · high-dose ICS-LABA trial 3–6 months." },
      { n: 4, band: "gp", title: "Review after ~3–6 months", text: "Still uncontrolled → severe asthma likely: refer. Controlled → step down (OCS first); if asthma worsens on step-down → restore dose, severe asthma likely." },
      { n: 5, band: "sp", title: "Investigate further, patient support", text: "CXR/HRCT · SPT/sIgE · other airway conditions (AERD, ABPA, bronchiectasis, malacia, TB/MAC) · OCS side-effects (cortisol, DEXA) · non-pulmonary conditions · eosinophils ≥300: exclude parasites; ≥1500: consider EGPA · social/psychological support · MDT · registry/trials." },
      { n: 6, band: "sp", title: "Assess severe asthma phenotype", text: "Type 2-high if on high-dose ICS: eosinophils ≥150/µL and/or FeNO ≥20 ppb and/or sputum eosinophils ≥2% and/or clinically allergen-driven. If not elevated, repeat up to 3×, ≥1–2 weeks after OCS or on lowest OCS dose." },
      { n: 7, band: "sp", title: "Consider other treatments", text: "Type 2-high: adherence tests, ↑ICS 3–6 months, treat T2 phenotypes (AERD, ABPA, CRS, polyps, AD). Low T2: review basics, sputum, HRCT, bronchoscopy; trial LAMA, azithromycin, anti-IL4Rα if on OCS, anti-TSLP; thermoplasty (registry). If biologics unavailable: other add-ons; last resort low-dose OCS." },
      { n: 8, band: "sp", title: "Add-on Type 2 biologic", text: "Choose by payer criteria, predictors of response, Type 2 comorbidities (Box 8-6), cost, dosing frequency, SC/IV, preference. Trial ≥4 months; extend to 6–12 months if unclear; if no response stop and consider switching." },
      { n: 9, band: "co", title: "Review response", text: "Every 3–6 months. Good response: reduce OCS first (adrenal check), then other add-ons, then ICS-LABA dose after 3–6 months stable; continue biologic for most. No response: stop biologic, review basics, HRCT, sputum, azithromycin, bronchoscopy, thermoplasty, last-resort OCS; do not stop ICS." },
      { n: 10, band: "co", title: "Continue collaborative care", text: "Technique, adherence (inhaled and biologic), comorbidities, non-pharmacological strategies, social and emotional needs, MDT, two-way GP–specialist communication." }
    ],
    t2criteria: { eos: 150, feno: 20, sputum: 2 }
  },

  /* ---------- Box 7-2 ---------- */
  copdSyndrome: {
    ref: "Box 7-2 p.144",
    asthma: ["Symptoms vary over time and in intensity", "Triggers: laughter, exercise, allergens, seasonal", "Onset before age 40", "Symptoms improve spontaneously or with bronchodilators (minutes) or ICS (days–weeks)", "Current or childhood asthma diagnosis", "Variable expiratory airflow limitation"],
    copd: ["Dyspnoea persistent (most days)", "Onset after age 40", "Limitation of physical activity", "May be preceded by cough/sputum", "Bronchodilator gives only limited relief", "Smoking/toxic exposure, low birth weight, or respiratory illness such as TB", "No past or current asthma diagnosis", "Persistent expiratory airflow limitation"],
    treat: {
      asthma: ["ICS-containing treatment is essential", "Track 1 with ICS-formoterol reliever preferred", "DO NOT give LABA and/or LAMA without ICS", "Maintenance OCS only as last resort"],
      both: ["ICS-containing treatment is essential (low or medium dose)", "Add-on LABA ± LAMA usually needed", "Additional COPD treatments as per GOLD", "DO NOT give LABA and/or LAMA without ICS", "Maintenance OCS only as last resort"],
      copd: ["Treat as COPD (GOLD report)", "Initially maintenance LABA-LAMA", "Avoid high-dose ICS", "Avoid maintenance OCS"]
    }
  },

  /* ---------- Box 10-2 ---------- */
  preschoolDx: {
    ref: "Box 10-2 p.195",
    criteria: [
      { id: "c1", title: "Recurrent acute wheezing episodes", text: "≥2 acute episodes of asthma-like signs, OR ≥1 acute wheezing episode plus interval symptoms. Wheeze confirmed at least once (clinician, recording or convincing parental description). Past episodes count if >24 h." },
      { id: "c2", title: "No likely alternative cause", text: "History and examination: no other condition (other than concurrent viral infection) explains the signs." },
      { id: "c3", title: "Timely response to asthma treatment", text: "Improvement 20–60 min after SABA (3–4 h after SABA + OCS if severe), OR fewer/milder episodes and interval symptoms during a 2–3-month daily ICS trial." }
    ]
  }
});
