/* Learning topics. Each topic follows Summary → Key points → Body (algorithm/tables) → Pearls & pitfalls.
   Text is a study summary written for this app; always check the official GINA report for wording. */
GINA.register("2026", "topics", [

/* ============================ FOUNDATIONS ============================ */
{
  id: "definition", module: "foundations", title: "Definition and description of asthma",
  ref: "Section 1, p.25–26",
  summary: "Asthma is a heterogeneous disease, usually with chronic airway inflammation, defined by a history of variable respiratory symptoms together with variable expiratory airflow. Airflow limitation may later become persistent.",
  keyPoints: [
    "Two defining elements: variable symptoms (wheeze, breathlessness, chest tightness, cough) and variable expiratory airflow.",
    "Airway hyperresponsiveness and airway inflammation are usual but are neither necessary nor sufficient for the diagnosis.",
    "Prevalence ranges from 1% to 29% between countries; most asthma deaths occur in low- and middle-income countries.",
    "Symptoms and airflow limitation may resolve spontaneously or with treatment, and may be absent for weeks or months."
  ],
  body: `
  <h4>Typical triggers of variation</h4>
  <p>Exercise, allergen or irritant exposure, weather change and viral respiratory infections. Flare-ups (exacerbations) can be life-threatening even in people whose day-to-day symptoms seem mild.</p>
  <h4>Common clinical phenotypes</h4>
  <table class="tbl"><thead><tr><th>Phenotype</th><th>Features</th></tr></thead><tbody>
    <tr><td>Allergic</td><td>Often childhood onset; personal/family history of eczema, rhinitis, food or drug allergy; eosinophilic sputum; usually responds well to ICS.</td></tr>
    <tr><td>Non-allergic</td><td>Sputum may be neutrophilic, eosinophilic or paucigranulocytic; often a smaller short-term ICS response.</td></tr>
    <tr><td>Cough-variant / cough-predominant</td><td>Cough is the only or main symptom; airflow limitation may only show on bronchial provocation. ICS-containing treatment works.</td></tr>
    <tr><td>Adult-onset (late-onset)</td><td>More often women, often non-allergic, may need higher ICS doses. Always exclude occupational asthma.</td></tr>
    <tr><td>Persistent airflow limitation</td><td>Long-standing asthma with incompletely reversible obstruction, thought to reflect airway remodelling.</td></tr>
    <tr><td>Asthma with obesity</td><td>Prominent symptoms, little eosinophilic inflammation.</td></tr>
  </tbody></table>
  <p class="muted">Outside severe asthma, phenotypes do not correlate strongly with pathology or treatment response. Type 2 biomarkers matter most in difficult-to-treat and severe asthma.</p>`,
  pearls: [
    "About 16% of adults with recently diagnosed asthma reach clinical remission (no symptoms or medication for ≥1 year) within 5 years.",
    "Pitfall: treating a phenotype label as a treatment guide in mild–moderate asthma; ICS-containing treatment is the base for all phenotypes."
  ]
},
{
  id: "goals", module: "foundations", title: "Goals of management and the Assess–Adjust–Review cycle",
  ref: "Box 3-2 p.55; Box 3-3 p.58",
  summary: "The goal is the best possible long-term outcome for the individual: long-term symptom control and long-term risk minimisation, delivered through a continual cycle of assessing, adjusting and reviewing.",
  keyPoints: [
    "Symptom control: few or no symptoms, no sleep disturbance, unimpaired physical activity.",
    "Risk minimisation: no exacerbations, stable or improved personal-best lung function, no maintenance OCS, no medication side-effects.",
    "Ask what the patient wants from treatment; their goals may differ from medical goals.",
    "Symptom control and risk can be discordant: patients with few symptoms can still have fatal attacks."
  ],
  body: `
  <div class="cycle">
    <div class="cyc a"><b>ASSESS</b><span>Confirm diagnosis if needed · symptom control and modifiable risk factors · comorbidities · inhaler technique and adherence · patient goals and preferences</span></div>
    <div class="cyc b"><b>ADJUST</b><span>Treat modifiable risk factors and comorbidities · non-pharmacological strategies · asthma medicines (ICS-containing) · education, skills training, written action plan</span></div>
    <div class="cyc c"><b>REVIEW</b><span>Symptoms · exacerbations · side-effects · comorbidities · lung function · consider Type 2 biomarkers if still uncontrolled · patient satisfaction</span></div>
  </div>
  <h4>Population vs individual decisions</h4>
  <p>The “preferred” option at each step reflects the best evidence for groups of patients. For the individual, also weigh phenotype, risk factors, comorbidities, inhaler technique, adherence, cost, access and preference.</p>`,
  pearls: [
    "In adults and adolescents, the preferred controller and reliever across all steps is combination ICS-formoterol (Track 1).",
    "Pitfall: judging control by symptoms alone. Always assess risk factors and exacerbation history too."
  ]
},
{
  id: "remission", module: "foundations", title: "Remission of asthma",
  ref: "p.55–57; p.204",
  summary: "Remission may be clinical (no symptoms or exacerbations for a period, usually ≥1 year) or complete/pathophysiological (also normal lung function, responsiveness or inflammatory markers). It can occur off or on treatment, but remission is not cure.",
  keyPoints: [
    "Clinical remission is more frequent than pathophysiological remission at all ages.",
    "Predictors in school-age children: fewer, milder or decreasing episodes, good lung function, less airway hyperresponsiveness.",
    "Risk factors for persistence: atopy, parental asthma/allergy, later onset, wheeze without colds, maternal smoking.",
    "After childhood remission asthma often recurs; lung function decline in adulthood is more likely, so keep monitoring lung function."
  ],
  body: `
  <h4>Talking to parents and caregivers</h4>
  <ul>
    <li>If the child has no symptoms, look for ongoing activity (wheeze, avoiding exercise) and check lung function if possible.</li>
    <li>Prefer the phrase <i>“asthma has gone quiet for now”</i>. If you use “remission”, explain it does not mean permanent cure.</li>
    <li>Emphasise current benefits of controller treatment (fewer attacks, school and sport) and avoid claims about changing the long-term course.</li>
  </ul>
  <h4>Remission on treatment</h4>
  <p>Remission on treatment, for example with biologics in severe asthma, fits the GINA long-term goal. In records, describe it precisely, e.g. “severe eosinophilic asthma, well controlled on [biologic]”.</p>`,
  pearls: ["No intervention in childhood has yet been shown to increase the chance of remission or reduce recurrence."]
},
{
  id: "severity", module: "foundations", title: "Asthma severity: what the labels mean",
  ref: "p.48–52",
  summary: "Severity is judged retrospectively from the treatment needed to control symptoms and exacerbations. Severe asthma = uncontrolled despite optimised high-dose ICS-LABA, or needing it (or a biologic) to stay controlled.",
  keyPoints: [
    "Mild: well controlled with as-needed low-dose ICS-formoterol, or low-dose ICS plus as-needed SABA.",
    "Moderate: well controlled on Step 3 or 4 (low- or medium-dose ICS-LABA in either track).",
    "Severe: uncontrolled despite optimised high-dose ICS-LABA, or needs it to remain controlled.",
    "Difficult-to-treat is not the same as severe: poor technique, adherence, comorbidities or exposures may be the cause."
  ],
  body: `
  <div class="callout warn"><b>Avoid “mild asthma” in clinical practice where possible.</b> Patients and clinicians often hear it as “low risk, no ICS needed”. Up to 30% of exacerbations and deaths occur in people with infrequent symptoms (less than weekly, or only on strenuous exercise).</div>
  <h4>Suggested wording</h4>
  <ul>
    <li>Education: “asthma that seems to be mild” (beware translations of “apparently mild”).</li>
    <li>Epidemiology: describe the treatment, e.g. “prescribed SABA with no ICS”, not “mild asthma”.</li>
    <li>Trials: describe control plus treatment, e.g. “uncontrolled despite medium-dose ICS-LABA plus as-needed SABA”.</li>
  </ul>
  <p>The older intermittent / mild persistent split was arbitrary: so-called intermittent asthma can have severe or fatal attacks, and ICS halves to two-thirds that risk.</p>`,
  pearls: [
    "“Mild asthma” is a retrospective label, so it cannot decide which treatment to start.",
    "WHO includes “untreated severe asthma” for uncontrolled asthma in people not taking any ICS."
  ]
},

/* ============================ DIAGNOSIS ============================ */
{
  id: "dx-flow", module: "diagnosis", title: "Diagnostic flowchart (adults, adolescents, children 6–11)",
  ref: "Box 1-1 p.27 (simplified in 2026)",
  summary: "For chronic or recurrent symptoms: decide if the history is typical, test lung function before and after bronchodilator, and confirm variable expiratory airflow before starting ICS whenever possible. Test before treating.",
  widget: "dxflow",
  keyPoints: [
    "Test before treating: variability falls once ICS starts, making confirmation harder.",
    "If spirometry is unavailable, use PEF rather than symptoms alone (best of 3 blows, same meter each time).",
    "If testing is negative, repeat during symptoms or consider other tests (Box 1-2).",
    "If no lung function test is available and other diagnoses are unlikely, treat empirically with ICS and review in 1–3 months."
  ],
  body: `<p>Use the interactive flowchart above. Patients presenting acutely follow the exacerbation flowcharts (Box 9-4, 9-6); patients already on ICS follow Box 1-4 and 1-5.</p>`,
  pearls: [
    "PEF may differ by up to 20% between meters; always use the same meter and the highest of three readings.",
    "An acute presentation is an opportunity to confirm the diagnosis with lung function before and after bronchodilator."
  ]
},
{
  id: "dx-criteria", module: "diagnosis", title: "Criteria for variable expiratory airflow",
  ref: "Box 1-2 p.28; p.31–32",
  summary: "Diagnosis needs a typical symptom history plus confirmed variable expiratory airflow. One or more tests may be needed; the more variation seen, the more confident the diagnosis.",
  widget: "bdrcalc",
  keyPoints: [
    "Positive BDR (adults): FEV1 or FVC up ≥12% AND ≥200 mL from baseline (more confident if ≥15% and ≥400 mL); PEF ≥20% if no spirometry.",
    "Positive BDR (children): FEV1 up ≥12% of predicted (or PEF ≥15%).",
    "GINA 2026 keeps the ≥12% and ≥200 mL criterion; the 2022 “>10% of predicted” criterion misses many adults, especially younger males.",
    "Withhold SABA ≥4 h; formoterol/salmeterol 24 h; indacaterol/vilanterol 36 h; LAMAs 36–48 h."
  ],
  body: `
  <h4>1. Typical variable symptoms</h4>
  <p>Wheeze, shortness of breath, chest tightness, cough that vary over time and intensity; often worse at night or on waking; triggered by exercise, laughter, allergens, cold air or viral infections; <b>worse after stopping exercise</b> (very distinctive).</p>
  <p><b>Less likely asthma:</b> chronic sputum; dyspnoea with dizziness, light-headedness or paraesthesia; chest pain; exercise dyspnoea with noisy inspiration; localised wheeze.</p>
  <h4>2. Confirmed variable expiratory airflow</h4>
  <div class="scroll"><table class="tbl"><thead><tr><th>Test</th><th>Adults</th><th>Children</th></tr></thead><tbody>
    <tr><td>Bronchodilator responsiveness (10–15 min after 200–400 mcg salbutamol)</td><td>FEV1 or FVC ↑ ≥12% and ≥200 mL (greater confidence ≥15% and ≥400 mL); or PEF ↑ ≥20%</td><td>FEV1 ↑ ≥12% predicted; or PEF ↑ ≥15%</td></tr>
    <tr><td>Twice-daily PEF over 2 weeks</td><td>Average daily diurnal variability &gt;10%</td><td>&gt;13%</td></tr>
    <tr><td>After 4 weeks of ICS-containing treatment</td><td>FEV1 ↑ ≥12% and ≥200 mL (or PEF ≥20%)</td><td>FEV1 ↑ ≥12% predicted (or PEF ≥15%)</td></tr>
    <tr><td>Bronchial provocation</td><td>FEV1 ↓ ≥20% methacholine; ≥15% hyperventilation, hypertonic saline or mannitol; &gt;10% and &gt;200 mL exercise</td><td>FEV1 ↓ ≥20% methacholine; or &gt;12% predicted (PEF &gt;15%) with exercise</td></tr>
    <tr><td>Between visits (good specificity, poor sensitivity)</td><td>FEV1 varies ≥12% and ≥200 mL (PEF ≥20%)</td><td>FEV1 ≥12% (PEF ≥15%)</td></tr>
  </tbody></table></div>
  <p class="muted">If FEV1 falls during a challenge, check FEV1/FVC also falls: incomplete inhalation (poor effort, inducible laryngeal obstruction) can falsely lower FEV1.</p>
  <h4>Diurnal PEF variability</h4>
  <p class="formula">[(day's highest − day's lowest) ÷ mean of day's highest and lowest] × 100, averaged over 1–2 weeks</p>
  <p>Upper 95% limits in health: 9% adults, 12.3% children, hence &gt;10% and &gt;13%.</p>
  <h4>Role of Type 2 biomarkers</h4>
  <p>With typical symptoms but negative or unavailable lung function testing, <b>FeNO &gt;50 ppb</b> (adults/adolescents) or <b>&gt;35 ppb</b> (children), or blood eosinophils above the regional reference range, can support Type 2 asthma. Lower values do not rule asthma out, and both vary with sex, age, time of day and (for FeNO) device and site. Eosinophils are higher in early morning; FeNO lower in early morning.</p>`,
  pearls: [
    "FEV1/FVC is normally >0.75–0.80 in adults and >0.90 in children.",
    "BDR may disappear during severe exacerbations or viral infections.",
    "A normal FEV1 while symptomatic makes asthma less likely, but baseline FEV1 >80% can still improve meaningfully."
  ]
},
{
  id: "dx-differential", module: "diagnosis", title: "Differential diagnosis by age",
  ref: "Box 1-3 p.30",
  summary: "Alternative diagnoses vary with age, and any of them can coexist with asthma.",
  keyPoints: [
    "6–11 y: upper airway cough syndrome, foreign body, bronchiectasis, PBB, PCD, inborn errors of immunity, congenital heart disease, BPD, CF.",
    "12–39 y: inducible laryngeal obstruction, cough hypersensitivity/GERD, dysfunctional breathing, bronchiectasis, CF, alpha-1 antitrypsin deficiency.",
    "40+ y: COPD, cardiac failure, ACE-inhibitor cough, parenchymal lung disease, PE, central airway obstruction.",
    "All ages: tuberculosis and pertussis."
  ],
  body: `
  <div class="scroll"><table class="tbl"><thead><tr><th>Age</th><th>Clue</th><th>Consider</th></tr></thead><tbody>
  <tr><td rowspan="6">6–11</td><td>Sneezing, itching, blocked nose, throat-clearing</td><td>Chronic upper airway cough syndrome</td></tr>
  <tr><td>Sudden onset, unilateral wheeze</td><td>Inhaled foreign body</td></tr>
  <tr><td>Recurrent chest infections, productive cough (± sinusitis)</td><td>Bronchiectasis, protracted bacterial bronchitis, PCD, inborn errors of immunity</td></tr>
  <tr><td>Cardiac murmurs</td><td>Congenital heart disease</td></tr>
  <tr><td>Pre-term, symptoms since birth</td><td>Bronchopulmonary dysplasia</td></tr>
  <tr><td>Excess cough and mucus, GI symptoms</td><td>Cystic fibrosis</td></tr>
  <tr><td rowspan="7">12–39</td><td>Nasal symptoms, throat-clearing</td><td>Upper airway cough syndrome</td></tr>
  <tr><td>Cough/dyspnoea with smoke, smells or food; stridor</td><td>Cough hypersensitivity, GERD, inducible laryngeal obstruction</td></tr>
  <tr><td>Dizziness, paraesthesia, sighing</td><td>Hyperventilation, dysfunctional breathing</td></tr>
  <tr><td>Productive cough, recurrent infections</td><td>Bronchiectasis, PBB</td></tr>
  <tr><td>Excess cough and mucus</td><td>Cystic fibrosis</td></tr>
  <tr><td>Dyspnoea, family history of early emphysema</td><td>Alpha-1 antitrypsin deficiency</td></tr>
  <tr><td>Cardiac murmurs / sudden onset</td><td>Heart disease / foreign body</td></tr>
  <tr><td rowspan="8">40+</td><td>Triggers of smoke, smells, food; stridor</td><td>Cough hypersensitivity, GERD, ILO</td></tr>
  <tr><td>Cough, sputum, exertional dyspnoea, smoking/noxious exposure</td><td>COPD (see Asthma+COPD)</td></tr>
  <tr><td>Exertional dyspnoea, nocturnal symptoms, ankle oedema</td><td>Cardiac failure</td></tr>
  <tr><td>ACE inhibitor</td><td>Medication-related cough</td></tr>
  <tr><td>Dyspnoea, dry cough, clubbing</td><td>Parenchymal lung disease</td></tr>
  <tr><td>Sudden dyspnoea, chest pain</td><td>Pulmonary embolism</td></tr>
  <tr><td>Dyspnoea unresponsive to bronchodilators</td><td>Central airway obstruction</td></tr>
  <tr><td>Productive cough, recurrent infections</td><td>Bronchiectasis, PBB</td></tr>
  <tr><td>All</td><td>Chronic cough, haemoptysis, fever, sweats, weight loss, sometimes unilateral wheeze · prolonged coughing paroxysms ± stridor</td><td>Tuberculosis · Pertussis</td></tr>
  </tbody></table></div>`,
  pearls: [
    "Crackles and inspiratory wheeze are not features of asthma.",
    "In one study about 2% of adults labelled asthma actually had serious cardiorespiratory disease."
  ]
},
{
  id: "dx-on-ics", module: "diagnosis", title: "Confirming the diagnosis in patients already on ICS",
  ref: "Box 1-4 p.33; Box 1-5 p.36",
  summary: "In primary care, 25–35% of people labelled asthma cannot be confirmed. The approach depends on current symptoms and lung function, and may include a supervised step-down or step-up trial.",
  keyPoints: [
    "Typical symptoms + variable airflow: diagnosis confirmed; assess control and review treatment.",
    "Typical symptoms, no variable airflow: repeat spirometry after withholding bronchodilators or during symptoms; if FEV1 >70% predicted consider step-down and reassess in 2–4 weeks; if <70% consider step-up for 1–2 months.",
    "Few typical symptoms, normal lung function: consider step-down; if symptoms and airflow worsen, asthma is confirmed.",
    "Persistent breathlessness and airflow limitation: step up for 1–2 months, then refer or manage as asthma+COPD."
  ],
  body: `
  <h4>How to step down to confirm the diagnosis (Box 1-5)</h4>
  <ol>
    <li><b>Assess:</b> document control, risk factors and lung function. Choose a safe time (no infection, not travelling, not pregnant). Give a written action plan and enough medicine to resume the old dose.</li>
    <li><b>Adjust:</b> reduce the ICS dose by 25–50%, or stop other maintenance medicine (e.g. LABA). Review in 2–4 weeks.</li>
    <li><b>Review:</b> if symptoms rise and variable airflow is shown, asthma is confirmed; return to the lowest effective dose. If still no variability at low-dose ICS, consider stopping ICS, reassess in 2–3 weeks and follow for ≥12 months.</li>
  </ol>
  <div class="callout warn">In pregnancy, do not step down ICS and do not perform bronchial provocation tests; postpone confirmation until after delivery.</div>`,
  pearls: [
    "If the patient has exacerbation risk factors, step down only with close supervision.",
    "If the diagnosis cannot be confirmed, refer for expert investigation."
  ]
},
{
  id: "dx-tests", module: "diagnosis", title: "Other tests and special contexts",
  ref: "p.34–38",
  summary: "Provocation tests, allergy tests, imaging, FeNO, blood and sputum eosinophils all have supporting roles. Special groups (cough-only, occupational, athletes, pregnancy, elderly, smokers) need adapted approaches.",
  keyPoints: [
    "Bronchial provocation: moderately sensitive, limited specificity. A negative test off ICS helps exclude asthma.",
    "Skin prick test or specific IgE shows atopy, not causation; relate to the history.",
    "HRCT is not routine; useful for comorbidities/alternative diagnoses in difficult-to-treat asthma (bronchiectasis, emphysema, mucus plugging).",
    "Ask every adult-onset patient whether symptoms improve away from work."
  ],
  body: `
  <div class="scroll"><table class="tbl"><thead><tr><th>Context</th><th>Practical points</th></tr></thead><tbody>
  <tr><td>Cough as the only symptom</td><td>Consider cough-variant asthma, upper airway cough syndrome, ACE inhibitors, GERD, sinusitis, post-infectious cough, ILO, eosinophilic bronchitis. Spirometry often normal; provocation testing may be the only abnormality. Eosinophilic bronchitis has sputum eosinophils with normal spirometry and responsiveness.</td></tr>
  <tr><td>Occupational</td><td>5–20% of new adult-onset asthma. Rhinitis may precede it by up to a year. Confirm objectively (serial PEF at and away from work); refer.</td></tr>
  <tr><td>Athletes</td><td>Confirm with lung function, usually provocation testing; exclude rhinitis, ILO, dysfunctional breathing, cardiac problems, over-training.</td></tr>
  <tr><td>Pregnancy</td><td>If history fits and BDR is negative, treat as asthma with ICS and postpone further testing until after delivery.</td></tr>
  <tr><td>Elderly</td><td>Often under-diagnosed. Consider LV failure: ECG, chest X-ray, BNP, echocardiography.</td></tr>
  <tr><td>Smokers / ex-smokers</td><td>Consider COPD and asthma+COPD. BDR ≥12% and ≥200 mL is common in COPD. Low DLCO favours COPD. Smokers have lower FeNO and higher eosinophils.</td></tr>
  </tbody></table></div>
  <h4>FeNO and eosinophils: confounders</h4>
  <p>FeNO is raised in eosinophilic bronchitis, atopy, allergic rhinitis and atopic dermatitis; not raised in neutrophilic or obesity-associated asthma; lower in smokers and during bronchoconstriction. Blood eosinophils rise with parasites, atopic disease, CRSwNP, HES and EGPA, and fall with corticosteroids.</p>`,
  pearls: ["Mucus plugging on CT is often seen with moderately severe airflow limitation and eosinophilic inflammation."]
},

/* ============================ ASSESSMENT ============================ */
{
  id: "as-overview", module: "assessment", title: "What to assess at every visit",
  ref: "Box 2-1 p.40",
  summary: "Every assessment covers asthma control (symptom control AND future risk), treatment issues, and multimorbidity.",
  keyPoints: [
    "Symptom control over the last 4 weeks, and over the whole period since the last review.",
    "Risk factors for exacerbations, persistent airflow limitation and medication side-effects.",
    "Lung function at diagnosis, 3–6 months after starting ICS (personal best), then at least every 1–2 years (more often if at risk).",
    "Treatment step, inhaler technique, adherence, side-effects, written action plan, patient goals.",
    "Comorbidities: rhinitis, rhinosinusitis, GERD, obesity, OSA, depression, anxiety."
  ],
  body: `<p>Use the <b>Control &amp; Risk</b> tool in the Tools tab to work through Box 2-2 with a patient.</p>`,
  pearls: ["GINA does not recommend tools that numerically combine symptom control with exacerbation history: they have different causes and treatments."]
},
{
  id: "as-control", module: "assessment", title: "GINA symptom control and risk factors",
  ref: "Box 2-2 p.41",
  summary: "Four yes/no questions about the past 4 weeks classify symptom control as well controlled (0), partly controlled (1–2) or uncontrolled (3–4). Risk factors are assessed separately.",
  widget: "controltool",
  keyPoints: [
    "Daytime symptoms >2×/week? Any night waking? SABA reliever for symptoms >2×/week? Any activity limitation?",
    "Reliever question refers to SABA; as-needed ICS-formoterol is not counted, and pre-exercise doses are excluded.",
    "SABA over-use: ≥3 × 200-dose canisters/year raises exacerbation risk; ≥1 canister/month raises mortality risk.",
    "Independent risk factors include inadequate ICS, obesity, CRS, GERD, confirmed food allergy, pregnancy, smoking/vaping, allergen exposure, pollution, psychosocial problems, FEV1 <60%, high BDR, raised eosinophils/FeNO, ever intubated/ICU, ≥1 severe exacerbation in the last year."
  ],
  body: `
  <h4>Risk factors for persistent airflow limitation</h4>
  <p>Preterm birth, low birth weight, greater infant weight gain, frequent productive cough; no ICS despite a severe exacerbation history; tobacco smoke, noxious chemicals, occupational exposures; low initial FEV1, sputum or blood eosinophilia.</p>
  <h4>Risk factors for side-effects</h4>
  <p><b>Systemic:</b> frequent OCS; long-term high-dose or potent ICS; CYP450 inhibitors (ritonavir, ketoconazole, itraconazole). <b>Local:</b> high-dose/potent ICS, poor technique.</p>`,
  pearls: ["A single exacerbation in the last year is enough to trigger a full treatment review, even if symptoms are now few."]
},
{
  id: "as-tools", module: "assessment", title: "Numerical and composite tools",
  ref: "p.42–45",
  summary: "Numerical tools are more sensitive to change than categorical ones. GINA prefers ACQ-5. New in 2026: CAAT for adults and Peds-AIRQ for children 5–11.",
  widget: "scoretool",
  keyPoints: [
    "ACQ: 0–6 (higher worse). ≤0.75 likely well controlled; 0.75–1.5 grey zone; ≥1.5 likely poorly controlled; ~1.0 crossover; MCID 0.5.",
    "ACT: 5–25 (higher better). 20–25 well controlled; 16–19 not well controlled; 5–15 very poorly controlled; MCID 3.",
    "Neither ACQ nor ACT is validated with ICS-formoterol or ICS-SABA relievers.",
    "CAAT: 8 items incl. sputum and energy; cut-offs and MCID not yet defined for asthma.",
    "Peds-AIRQ (5–11 y): 2-week symptoms, reliever use, activity + 12-month exacerbations/OCS; external validation awaited."
  ],
  body: `
  <h4>Why ACQ-5 over ACQ-6/7</h4>
  <p>The reliever item in ACQ-6/7 assumes regular SABA, has no option between zero and daily use, and is not validated with anti-inflammatory relievers. ACQ-7 includes FEV1, which could drive repeated ICS step-ups in persistent airflow limitation.</p>
  <h4>Children 6–11</h4>
  <p>Symptom tools: c-ACT (separate parent and child sections), ACQ. Composite tools: TRACK (≤5 y), CASI, Peds-AIRQ. A child rated “well controlled” can still be at risk of exacerbations. Combine parent and child reports: parents recall longer periods, children only the last few days.</p>
  <h4>Categorical tools</h4>
  <p>RCP Three Questions (sleep, daytime symptoms, activity in the last month); Asthma APGAR (linked to a care algorithm).</p>`,
  pearls: ["There are no validated tools for control over longer periods (e.g. 12 months); ask simply, but expect recall error."]
},
{
  id: "as-lungfn", module: "assessment", title: "Lung function in ongoing assessment",
  ref: "p.47–48",
  summary: "Lung function correlates poorly with symptoms but low FEV1 independently predicts exacerbations and decline. Record the personal best.",
  keyPoints: [
    "FEV1 <60% predicted: high exacerbation risk regardless of symptoms.",
    "Normal FEV1 with frequent symptoms: consider other causes.",
    "Persistent BDR (≥12% and ≥200 mL) on ICS treatment suggests uncontrolled asthma, often poor adherence or technique.",
    "FEV1 improves within days of ICS and plateaus at about 2 months; PEF personal best is reached in about 2 weeks."
  ],
  body: `
  <p>Healthy between-visit FEV1 variability is up to 12% week-to-week and 15% year-to-year, which limits its use for fine titration. The patient-perceived MID for FEV1 is about 10%.</p>
  <p>A short (e.g. 3-month) trial of higher-dose ICS or ICS-LABA may be tried for persistent airflow limitation; do not continue high doses without response.</p>
  <p>Long-term PEF monitoring is mainly for severe asthma or poor perceivers of airflow limitation. No need to withhold medicines before routine visits once diagnosis is confirmed, but keep conditions the same between visits.</p>`,
  pearls: ["In children, measure height at each visit if using predicted values, and check height at least yearly."]
},
{
  id: "as-child", module: "assessment", title: "Assessing children 6–11 years",
  ref: "Box 2-3 p.44",
  summary: "Ask about day and night symptoms, reliever use (distinguishing pre-exercise use), activity and school absence; check exacerbations, lung function trends, growth, technique, adherence and comorbidities.",
  keyPoints: [
    "Children with poor control may avoid exercise and appear well controlled.",
    "Marked loss of lung function may occur before parents notice.",
    "Confirmed food allergy is a risk factor for asthma death.",
    "If no clear picture, use a 2-week diary of symptoms, reliever use and PEF (best of three)."
  ],
  body: `<p>If night cough is the only symptom, consider rhinitis or GERD. Adherence questions: is the maintenance inhaler in the home, how many days a week is it used, where is it kept, morning or evening easier? Check the inhaler date.</p>`,
  pearls: ["Persistent bronchodilator response is a risk factor for exacerbations even with few symptoms."]
},
{
  id: "as-uncontrolled", module: "assessment", title: "Uncontrolled vs severe asthma",
  ref: "p.51; Box 2-4 p.52",
  summary: "Before labelling asthma severe, look for the common causes of poor control, which are far more frequent and easier to fix.",
  keyPoints: [
    "Poor inhaler technique (up to 80% of community patients).",
    "Poor adherence.",
    "Wrong diagnosis (ILO, cardiac failure, lack of fitness).",
    "Multimorbidity (rhinosinusitis, GERD, obesity, OSA).",
    "Ongoing sensitiser/irritant exposure at home or work, including tobacco smoke."
  ],
  body: `<p>Also check SABA over-use, medication side-effects, anxiety, depression and social problems, and drugs such as beta-blockers or NSAIDs. Then consider a step-up trial or referral (see Severe asthma module).</p>`,
  pearls: []
},

/* ============================ MANAGEMENT ADULTS ============================ */
{
  id: "mg-principles", module: "management", title: "Key principles and the two treatment tracks",
  ref: "p.73–80; Box 4-1, 4-3",
  summary: "No SABA-only treatment. Every adult and adolescent gets ICS-containing treatment. Track 1 (ICS-formoterol reliever) is preferred; Track 2 (ICS-SABA or SABA reliever) is the alternative.",
  keyPoints: [
    "Anti-inflammatory reliever (AIR) = low-dose ICS + rapid-acting bronchodilator (budesonide-formoterol, beclometasone-formoterol, ICS-salbutamol).",
    "Track 1: as-needed low-dose ICS-formoterol at every step; plus maintenance ICS-formoterol at Steps 3–5 (MART).",
    "Track 2: Step 1 as-needed ICS-SABA (or ICS taken whenever SABA is taken); Steps 2–5 maintenance ICS-containing treatment + ICS-SABA or SABA reliever.",
    "Track 2 suits patients unable to use Track 1, or stable with good adherence and no exacerbations on current therapy.",
    "ICS-formoterol must not be used as reliever with a maintenance ICS–non-formoterol LABA."
  ],
  body: `
  <h4>Why Track 1 is preferred</h4>
  <ul>
    <li>Reduces severe exacerbations and OCS exposure compared with SABA relievers, with similar symptom control.</li>
    <li>One medicine, one device, one dose across Steps 1–4: fewer technique errors, no selective non-adherence.</li>
    <li>Step up or down without changing inhaler; usable before exercise or allergen exposure.</li>
  </ul>
  <h4>Terminology (Box 4-1)</h4>
  <table class="tbl"><tbody>
    <tr><td><b>Maintenance</b></td><td>Prescribed every day or on a schedule (ICS, ICS-LABA, ICS-LABA-LAMA, LTRA, biologics).</td></tr>
    <tr><td><b>Controller</b></td><td>Targets symptom control and future risk. Replaced by “ICS-containing treatment” where unclear.</td></tr>
    <tr><td><b>Reliever</b></td><td>Taken as needed for quick relief or before exercise. SABA relievers are not for regular use.</td></tr>
    <tr><td><b>AIR</b></td><td>Reliever containing low-dose ICS + rapid-acting bronchodilator. “AIR-only” at Steps 1–2.</td></tr>
    <tr><td><b>MART</b></td><td>Maintenance-and-reliever therapy with ICS-formoterol only (also called SMART).</td></tr>
  </tbody></table>
  <div class="callout warn">Before choosing a SABA reliever, consider likely adherence to maintenance ICS: poor adherence leaves the patient effectively on SABA alone.</div>`,
  pearls: [
    "If prescribing LTRA, warn about neuropsychiatric adverse effects.",
    "Both ICS and formoterol contribute to the risk reduction of AIR."
  ]
},
{
  id: "mg-steps", module: "management", title: "Treatment steps 1–5 (adults and adolescents)",
  ref: "Box 4-6 p.83",
  summary: "Track 1 steps: 1–2 AIR-only; 3 low-dose MART; 4 medium-dose MART; 5 add-on LAMA, phenotyping, ± high-dose ICS-formoterol trial, biologics. Track 2 mirrors this with ICS-SABA or SABA relievers.",
  widget: "stepsadult",
  keyPoints: [
    "Steps 1–2 (Track 1): as-needed low-dose ICS-formoterol (AIR-only).",
    "Step 3: low-dose maintenance ICS-formoterol + same as reliever (MART). Track 2: low-dose ICS-LABA.",
    "Step 4: medium-dose MART. Track 2: medium-dose ICS-LABA.",
    "Step 5: add-on LAMA; refer for phenotyping; consider high-dose trial; anti-IgE, anti-IL5/5R, anti-IL4Rα, anti-TSLP.",
    "Track 2 Step 1: as-needed ICS+SABA; Step 2: low-dose maintenance ICS."
  ],
  body: `
  <h4>Step 5 options in detail (p.98–99)</h4>
  <ul>
    <li><b>High-dose ICS-LABA:</b> trial only for 3–6 months when medium-dose MART or medium-dose ICS-LABA ± third controller fails; little extra benefit, more side-effects including adrenal suppression.</li>
    <li><b>Add-on LAMA:</b> if not controlled on medium/high-dose ICS-LABA. Separate tiotropium (≥6 y) or triple inhalers: BDP-formoterol-glycopyrronium, FF-vilanterol-umeclidinium, mometasone-indacaterol-glycopyrronium (≥18 y), budesonide-formoterol-glycopyrronium (≥12 y, new 2026). Small FEV1 gain, ~16–17% fewer severe exacerbations; far less than biologics.</li>
    <li><b>Reliever with triple therapy:</b> non-formoterol triple → ICS-SABA or SABA; ICS-formoterol-LAMA → ICS-formoterol, ICS-SABA or SABA; MART + separate LAMA → keep ICS-formoterol reliever.</li>
    <li><b>Biologics:</b> anti-IgE (≥6 y), mepolizumab (≥6 y), benralizumab/depemokimab (≥12 y), reslizumab IV (≥18 y), dupilumab (≥6 y), tezepelumab (≥12 y).</li>
    <li><b>Azithromycin</b> 3×/week (adults, specialist only): check sputum for atypical mycobacteria and ECG for QTc (repeat at 1 month); at least 6 months; consider resistance.</li>
    <li><b>Maintenance OCS:</b> last resort only.</li>
  </ul>
  <p>Patients on medium-dose MART who need a biologic should not be switched to ICS-LABA + SABA. Maintenance ICS-formoterol should not be stopped completely in severe asthma.</p>`,
  pearls: [
    "Make sure at least medium-dose ICS-LABA is given before judging the need for LAMA.",
    "Non-pharmacological strategies and allergen immunotherapy (HDM SLIT) sit below both tracks in the treatment figure."
  ]
},
{
  id: "mg-initial", module: "management", title: "Choosing initial treatment (adults and adolescents)",
  ref: "Box 4-4 p.81; Box 4-5 p.82",
  summary: "Initial treatment depends on presenting symptom frequency, night waking, lung function and recent exacerbations.",
  widget: "initialadult",
  keyPoints: [
    "Infrequent symptoms (≤2 days/week) or <3–5 days/week with normal/mildly reduced lung function: as-needed low-dose ICS-formoterol (Evidence A).",
    "Symptoms most days (≥4 days/week), night waking ≥1/week, or low lung function: low-dose MART (Evidence A).",
    "Daily symptoms or weekly night waking AND low lung function or recent exacerbation: medium-dose MART (Evidence B).",
    "Presenting with an exacerbation: treat it, short OCS course if severe, then start medium-dose MART (Evidence D)."
  ],
  body: `
  <h4>Before starting</h4>
  <ul><li>Record evidence for the diagnosis.</li><li>Record symptom control, risk factors and lung function.</li><li>Consider adherence, cost, access, preferences.</li><li>Choose an inhaler the patient can use; avoid devices needing different techniques.</li><li>Book follow-up.</li></ul>
  <h4>After starting</h4>
  <ul><li>Review response after 2–3 months, earlier if urgent.</li><li>Check adherence and technique often.</li><li>Step down once good control has been kept for 3 months.</li></ul>`,
  pearls: ["Patients with infrequent symptoms are unlikely to adhere to daily ICS; as-needed ICS-containing relievers suit them well."]
},
{
  id: "mg-airmart", module: "management", title: "AIR and MART: medicines and doses",
  ref: "Box 4-8A/B p.90–91",
  summary: "Most evidence uses budesonide-formoterol 160/4.5 mcg delivered (200/6 metered) in adults/adolescents and 80/4.5 delivered (100/6 metered) in children 6–11. Take 1 inhalation whenever needed.",
  widget: "martdoses",
  keyPoints: [
    "As-needed: 1 inhalation whenever needed; an extra inhalation can be taken a few minutes later. No minimum interval between reliever doses.",
    "Seek medical care if >12 total inhalations in 24 h (adults/adolescents) or >8 (children 6–11), counting maintenance doses.",
    "Budesonide-formoterol 320/9 and BDP-formoterol 200/6 must NOT be used as relievers.",
    "Budesonide-formoterol 80/2.25 (100/3) pMDI: double the number of inhalations; seek care if >24 in 24 h."
  ],
  body: `
  <p>Beclometasone-formoterol 100/6 (metered) is effective for MART in adults; it has not been studied for AIR-only use (Steps 1–2) but GINA suggests it may be suitable. Other ICS-formoterol combinations (e.g. mometasone-formoterol) have not been studied.</p>
  <p>Effect sizes: AIR-only reduces severe exacerbations by 55% and ED visits/hospitalisation by 65% vs SABA alone, and ED/hospitalisation by 37% vs daily ICS + SABA. MART reduces severe exacerbations by 32% vs same-dose ICS-LABA and 23% vs higher-dose ICS-LABA.</p>
  <p>For pMDI ICS-formoterol, use a spacer and shake immediately before each actuation.</p>`,
  pearls: ["The IOC/WADA allow athletes up to 54 mcg delivered (72 mcg metered) formoterol per day, matching the 12-inhalation threshold."]
},
{
  id: "mg-icsdose", module: "management", title: "Low, medium and high ICS doses",
  ref: "Box 4-2 p.77",
  summary: "Daily metered doses grouped as low, medium and high. This is not a table of potency equivalence.",
  widget: "icsdose",
  keyPoints: [
    "Low-dose ICS gives most of the benefit for most patients.",
    "Switching from a “medium” dose of one ICS to “medium” of another may change potency and destabilise asthma.",
    "High doses are needed by very few patients and raise local and systemic side-effect risk.",
    "Combination inhalers containing a LAMA may have different ICS dosing."
  ],
  body: `<p>Use the ICS dose checker above, or see the full table in Tools.</p>`,
  pearls: ["ICS by pMDI should preferably be used with a spacer."]
},
{
  id: "mg-adjust", module: "management", title: "Reviewing, stepping up and stepping down",
  ref: "p.110–113; Box 4-13",
  summary: "Review 1–3 months after starting, then every 3–12 months, and within 1 week after an exacerbation. Step-ups are therapeutic trials; step down after 3 months of good control.",
  keyPoints: [
    "Day-to-day adjustment: patients on AIR vary their as-needed ICS-formoterol doses with symptoms.",
    "Short-term step-up (1–2 weeks): e.g. viral infection or allergen season, via action plan.",
    "Sustained step-up (≥2–3 months): only after checking diagnosis, technique, adherence, risk factors; return to previous step if no response.",
    "Step down when controlled ≥3 months with stable lung function; reduce ICS by 25–50% at 3-month intervals.",
    "Never stop ICS completely: exacerbation risk rises."
  ],
  body: `
  <h4>Step-down options (Box 4-13)</h4>
  <div class="scroll"><table class="tbl"><thead><tr><th>Step</th><th>Current treatment</th><th>Options</th></tr></thead><tbody>
  <tr><td>5</td><td>High-dose ICS-LABA + OCS</td><td>Add biologic if Type 2 and eligible, reduce OCS; optimise inhaled therapy; sputum-guided OCS reduction; alternate-day low-dose OCS.</td></tr>
  <tr><td>5</td><td>Biologic + high-dose ICS-LABA</td><td>Stop other add-ons (OCS first), then consider reducing ICS-LABA.</td></tr>
  <tr><td>4</td><td>Moderate/high-dose ICS-LABA</td><td>Reduce ICS by 50% within combination; caution stopping LABA; switch to MART with lower maintenance dose.</td></tr>
  <tr><td>4</td><td>Medium-dose MART</td><td>Reduce maintenance to low dose; keep as-needed ICS-formoterol.</td></tr>
  <tr><td>4</td><td>High-dose ICS + second controller</td><td>Reduce ICS by 50%, continue second controller.</td></tr>
  <tr><td>3</td><td>Low-dose ICS-LABA</td><td>Once daily; caution stopping LABA.</td></tr>
  <tr><td>3</td><td>Low-dose MART</td><td>Maintenance once daily; consider as-needed-only ICS-formoterol.</td></tr>
  <tr><td>3</td><td>Medium/high-dose ICS</td><td>Reduce by 50%; adding LABA may allow lower ICS.</td></tr>
  <tr><td>2</td><td>Low-dose maintenance ICS</td><td>Once daily dosing; switch to as-needed ICS-formoterol; or ICS whenever SABA is taken. Do not stop ICS.</td></tr>
  </tbody></table></div>
  <p>Choose a good time (no infection, not travelling, not pregnant), give a written action plan and enough medicine to resume, and book follow-up.</p>`,
  pearls: [
    "Step-down from daily low-dose ICS + SABA to as-needed ICS-formoterol gives similar or better protection with much less ICS.",
    "Higher baseline FeNO has not been shown to predict exacerbations after ICS step-down."
  ]
},
{
  id: "mg-risk", module: "management", title: "Treating modifiable risk factors",
  ref: "Box 3-5 p.61–62",
  summary: "Not every risk factor needs a step-up. Match the strategy to the risk.",
  keyPoints: [
    "Any risk factor: ensure ICS-containing treatment, switch to an anti-inflammatory reliever, written action plan, more frequent review, check technique and adherence.",
    "≥1 severe exacerbation in last year: AIR; if no modifiable factors, add LAMA to medium-dose ICS-LABA, increase ICS (if T2 high), or refer for biologics.",
    "Low FEV1 (<60%): fix adherence/technique, consider 3-month high-dose ICS trial, exclude COPD, refer if no improvement.",
    "Confirmed food allergy: avoidance, anaphylaxis plan, epinephrine (IM or intranasal), refer."
  ],
  body: `
  <div class="scroll"><table class="tbl"><thead><tr><th>Risk factor</th><th>Strategy</th></tr></thead><tbody>
  <tr><td>Smoking / vaping</td><td>Encourage cessation for patient and family; consider higher ICS dose if poorly controlled.</td></tr>
  <tr><td>Obesity</td><td>Weight reduction; distinguish asthma symptoms from deconditioning, restriction, OSA.</td></tr>
  <tr><td>Major psychological problems</td><td>Mental health referral; help distinguish anxiety from asthma; panic attack advice.</td></tr>
  <tr><td>Major socioeconomic problems</td><td>Most cost-effective ICS regimen; optimise technique.</td></tr>
  <tr><td>Occupational/domestic irritants</td><td>Remove from exposure early; refer.</td></tr>
  <tr><td>Allergen exposure if sensitised</td><td>Simple avoidance only where evidence supports it; step up if unavoidable; HDM SLIT in partly controlled adults/adolescents with FEV1 &gt;70%.</td></tr>
  <tr><td>High FeNO on medium/high ICS</td><td>Check adherence: directly observed therapy suppressed FeNO in about two-thirds.</td></tr>
  <tr><td>Sputum eosinophilia on medium/high ICS</td><td>Consider increasing ICS regardless of symptoms (Evidence A, small studies).</td></tr>
  </tbody></table></div>`,
  pearls: ["Having even one exacerbation raises the risk of another within 12 months."]
},
{
  id: "mg-nonpharm", module: "management", title: "Non-pharmacological strategies",
  ref: "Box 3-6 p.63–64",
  summary: "Smoking cessation, physical activity, avoidance of occupational exposures, weight loss, healthy diet, and selected environmental measures all have a place.",
  keyPoints: [
    "Ask about smoking/vaping at every visit; no smoking in rooms or cars children use.",
    "Encourage regular physical activity; prevent EIB with ICS-formoterol as needed/before exercise or regular ICS, plus warm-up.",
    "Pulmonary rehabilitation improves 6MWD and quality of life.",
    "Ask about asthma before prescribing NSAIDs or beta-blockers; NSAIDs are contraindicated only with previous reactions.",
    "Weight reduction + twice-weekly aerobic and strength training is better than weight loss alone; bariatric surgery gives the largest benefit."
  ],
  body: `
  <ul>
    <li><b>Beta-blockers:</b> case-by-case, specialist supervision; asthma is not an absolute contraindication to cardioselective beta-blockers in acute coronary events.</li>
    <li><b>Indoor allergens:</b> general avoidance not recommended; single strategies have limited benefit; damp/mould remediation helps adults.</li>
    <li><b>Breathing exercises:</b> help symptoms and quality of life, not exacerbations.</li>
    <li><b>Indoor pollution:</b> non-polluting heating and cooking, vent outdoors.</li>
    <li><b>Outdoor allergens:</b> on high pollen/mould days close windows, stay indoors, use air conditioning.</li>
    <li><b>Emotional stress:</b> relaxation and breathing exercises may help; assess anxiety/depression.</li>
  </ul>`,
  pearls: []
},
{
  id: "mg-referral", module: "management", title: "When to refer for expert advice",
  ref: "Box 3-8 p.72",
  summary: "Refer for diagnostic difficulty, suspected occupational asthma, persistent uncontrolled asthma or frequent exacerbations, risk factors for asthma death, treatment side-effects, or suspected complications/sub-types.",
  keyPoints: [
    "Immediate referral: features of chronic infection, cardiac or other non-pulmonary cause.",
    "Uncontrolled despite good technique and adherence on Step 4 (medium-dose ICS-LABA).",
    "Near-fatal attack ever (ICU or ventilation); suspected anaphylaxis or food allergy.",
    "Long-term OCS or ≥2 OCS courses a year; significant side-effects.",
    "Suspected AERD or ABPA. Children: growth delay, uncontrolled on medium-dose ICS, welfare concerns."
  ],
  body: "", pearls: []
},
{
  id: "mg-vaccines-ait", module: "management", title: "Vaccinations, immunotherapy and other therapies",
  ref: "p.101; p.114–116",
  summary: "Vaccinate according to local schedules; consider allergen immunotherapy in selected sensitised patients.",
  keyPoints: [
    "Annual influenza vaccine for moderate–severe asthma (Evidence C).",
    "Follow local schedules for pneumococcal, pertussis, influenza, RSV and COVID-19 vaccines.",
    "Influenza vaccine effectiveness against hospitalisation ~48% adults, 67% children; RSV vaccines ≥68% in ≥60 y.",
    "Maternal RSVpreF and infant nirsevimab reduce infant RSV hospitalisation.",
    "HDM SLIT: sensitised adults/adolescents, partly controlled despite ICS, FEV1 >70% predicted."
  ],
  body: `<p>Do not give the first dose of a biologic on the same day as a vaccine. SCIT should only be prepared and given by clinicians skilled in immunotherapy, after asthma is controlled.</p>`,
  pearls: []
},

/* ============================ CHILDREN 6–11 ============================ */
{
  id: "ch-initial", module: "children", title: "Initial treatment for children 6–11",
  ref: "Box 4-10 p.102; Box 4-11 p.103 (updated 2026)",
  summary: "Updated consensus advice in 2026 on where to start, based on symptom frequency, night waking, lung function and recent exacerbations.",
  widget: "initialchild",
  keyPoints: [
    "≤2 days/week: as-needed low-dose ICS-formoterol (B) or as-needed ICS+SABA (combination C, separate B).",
    "3–4 days/week: daily low-dose ICS + as-needed SABA (A) or ICS-SABA (B).",
    "Most days (4–5/week), weekly night waking, or low lung function: low-dose ICS-LABA or medium-dose ICS + SABA/ICS-SABA, or low-dose MART (B).",
    "Daily symptoms/weekly waking AND low lung function or recent exacerbation: medium-dose ICS-LABA + SABA/ICS-SABA, or low-dose MART.",
    "Presenting with exacerbation: treat it (OCS if severe), start Step 3 or 4 before discharge."
  ],
  body: `<p>Review after 2–3 months; step down once control has been kept for 3 months.</p>`,
  pearls: []
},
{
  id: "ch-steps", module: "children", title: "Treatment steps for children 6–11",
  ref: "Box 4-12 p.104; p.105–108",
  summary: "Step 1 AIR (ICS-formoterol or ICS+SABA); Step 2 daily low-dose ICS; Step 3 medium-dose ICS, low-dose ICS-LABA or low-dose MART; Step 4 medium-dose ICS-LABA, low-dose MART (doubled) or referral; Step 5 phenotype assessment and add-ons.",
  widget: "stepschild",
  keyPoints: [
    "CARE study (2026): as-needed budesonide-formoterol in children 5–15 nearly halved exacerbations vs SABA, without affecting growth.",
    "Use budesonide-formoterol 80/4.5 delivered (100/6 metered), 1 inhalation as needed; seek care if >8 in 24 h.",
    "Evidence gap at Step 2: as-needed ICS-formoterol not compared with daily ICS in this age group.",
    "Step 4 MART dose is double Step 3 (still a low daily ICS dose). MART is not recommended at Step 5 in children."
  ],
  body: `
  <h4>Consensus step-up transitions (new 2026)</h4>
  <table class="tbl"><thead><tr><th>Step 1 treatment</th><th>Suggested next step</th></tr></thead><tbody>
  <tr><td>As-needed ICS-formoterol</td><td>Low-dose ICS-formoterol MART</td></tr>
  <tr><td>As-needed combination ICS-SABA</td><td>Daily low-dose ICS + as-needed low-dose ICS-SABA</td></tr>
  <tr><td>As-needed ICS+SABA (separate inhalers)</td><td>Daily low-dose ICS + as-needed SABA, with extra ICS whenever SABA is taken</td></tr>
  </tbody></table>
  <h4>Step 4–5 add-ons</h4>
  <p>Tiotropium (mist inhaler) or LTRA added to Step 3; theophylline not recommended. At Step 5: refer; options include anti-IgE (≥6 y), mepolizumab 40 mg SC every 4 weeks (6–11 y), dupilumab (weight-based).</p>
  <div class="callout warn">SABA-only treatment is not recommended. Dispensing ≥3 SABA canisters/year (≈12 puffs/week) doubles the risk of ED visits. Oral SABA and theophylline are not recommended.</div>`,
  pearls: ["If separate ICS and SABA inhalers are used, children tend to use the SABA preferentially, leaving them unprotected."]
},

/* ============================ PRESCHOOL ============================ */
{
  id: "ps-dx", module: "preschool", title: "Diagnosing asthma in children ≤5 years",
  ref: "Box 10-1, 10-2 p.194–195; Box 10-4, 10-5 p.199",
  summary: "All three criteria must be met: (1) recurrent acute wheezing episodes, (2) no likely alternative cause, (3) timely response to asthma treatment. If only 1–2 are met, record “suspected asthma”.",
  widget: "psdx",
  keyPoints: [
    "Criterion 1: ≥2 acute episodes of asthma-like signs, OR ≥1 episode plus interval symptoms. Wheeze must be confirmed at least once (clinician, recording, or convincing parental imitation). Past episodes count if >24 h.",
    "Criterion 2: no other condition (apart from a concurrent viral infection) explains the signs.",
    "Criterion 3: improvement 20–60 min after SABA (or 3–4 h after SABA + OCS), or fewer/milder episodes during a 2–3-month ICS trial (e.g. fluticasone propionate 100–250 mcg/day by pMDI + spacer).",
    "Old wheeze phenotypes (episodic/multiple-trigger; transient/persistent/late-onset) have limited clinical value."
  ],
  body: `
  <h4>Red flags needing expert referral (Box 10-5)</h4>
  <ul><li>Failure to thrive</li><li>Neonatal or very early onset</li><li>Vomiting with respiratory symptoms</li><li>Continuous wheeze, recurrent stridor, seal-like barking cough</li><li>No response to SABA, ICS or OCS</li><li>No link with typical triggers such as viral URTI</li><li>Focal lung or cardiovascular signs, clubbing</li><li>Hypoxaemia (&lt;95%) when awake outside an exacerbation</li></ul>
  <h4>Common differentials (Box 10-4)</h4>
  <p>Viral URTI; GERD ± dysphagia; foreign body; pertussis; protracted bacterial bronchitis; TB; tracheomalacia/laryngomalacia; congenital heart disease; BPD; CF; PCD; vascular ring; immunodeficiency.</p>`,
  pearls: ["Infants <12 months with bronchiolitis may wheeze, but crackles point away from asthma."]
},
{
  id: "ps-mgmt", module: "preschool", title: "Assessment and treatment steps ≤5 years",
  ref: "Box 11-1 p.204; Box 11-2 p.207; Box 11-3 p.208",
  summary: "Assess control with four questions (incl. night coughing and play limitation). Steps: 1 consider intermittent ICS at viral onset; 2 daily low-dose ICS (preferred); 3 double the low dose; 4 continue and refer. Reliever: as-needed SABA.",
  widget: "stepspreschool",
  keyPoints: [
    "Step 1 suits infrequent viral-induced wheeze with little or no interval symptoms.",
    "Step 2 for uncontrolled symptoms or ≥1 severe exacerbation in the past year.",
    "Before stepping up: check diagnosis, inhaler skills, adherence and exposures; try alternative Step 2 options first.",
    "If >4 puffs of salbutamol are needed within 4 hours, seek urgent care.",
    "No published MART studies under 5 years; ICS-LABA data insufficient under 4 years."
  ],
  body: `
  <h4>Low daily ICS doses (Box 11-3)</h4>
  <table class="tbl"><thead><tr><th>ICS</th><th>Low total daily dose (metered)</th></tr></thead><tbody>
  <tr><td>BDP pMDI standard particle</td><td>100 mcg (≥5 y)</td></tr>
  <tr><td>BDP pMDI extrafine</td><td>50 mcg (≥5 y)</td></tr>
  <tr><td>Budesonide nebulised</td><td>500 mcg (≥1 y)</td></tr>
  <tr><td>Budesonide pMDI or DPI</td><td>Awaiting systematic review</td></tr>
  <tr><td>Fluticasone propionate pMDI</td><td>50 mcg (≥4 y)</td></tr>
  <tr><td>Mometasone pMDI</td><td>100 mcg (≥5 y)</td></tr>
  <tr><td>Fluticasone furoate, ciclesonide</td><td>Not sufficiently studied</td></tr>
  </tbody></table>
  <h4>Devices and review</h4>
  <p>Preferred: pMDI with valved spacer (face mask in younger children; mouthpiece once able). Review need for controller every 3–6 months; after step-down, follow up in 3–6 weeks. Measure height at least yearly.</p>
  <h4>Risk factors (Box 11-1B)</h4>
  <p>Severe episode in past year; uncontrolled symptoms; start of usual flare-up season (especially autumn); tobacco smoke, indoor pollution and allergens (especially with viral infection); psychosocial problems; poor adherence/technique; outdoor pollution.</p>`,
  pearls: ["Daily ICS reduced exacerbations most in preschool wheezers with clinical features of allergy."]
},

/* ============================ EXACERBATIONS ============================ */
{
  id: "ex-redflags", module: "exacerbations", title: "Red flags for fatal or near-fatal asthma",
  ref: "Box 9-1 p.172",
  summary: "Flag these patients clearly in the notes and encourage early urgent care during any flare-up.",
  keyPoints: [
    "Ever intubated/ventilated for asthma.",
    "Hospitalisation or multiple emergency visits in the past year.",
    "Current or recent OCS use.",
    "Not using ICS; poor adherence to ICS or to (or lacking) a written action plan.",
    "SABA over-use (>1 canister/month) or nebulised SABA.",
    "Psychiatric disease or psychosocial problems; food allergy or anaphylaxis history.",
    "Poor perception of airflow limitation; severe airway hyperresponsiveness.",
    "Comorbid pneumonia, diabetes, arrhythmias (after hospitalisation)."
  ],
  body: `<p>Use “flare-up” with patients rather than “exacerbation”. Consider pertussis if cough dominates an atypical presentation. Poor perceivers (often after near-fatal asthma, more often males) may benefit from regular PEF monitoring.</p>`,
  pearls: ["Asthma deaths also occur in people with no previous urgent care."]
},
{
  id: "ex-actionplan", module: "exacerbations", title: "Written asthma action plans",
  ref: "Box 9-2 p.174; p.173–177",
  summary: "Every patient needs a written action plan saying how to recognise worsening, how to increase inhaled medicines, when to start OCS and when to seek care. The 2026 update replaces “maximum dose” wording with a prompt to seek care after a set number of inhalations.",
  widget: "actionplan",
  keyPoints: [
    "Track 1 (AIR or MART): take 1 inhalation of ICS-formoterol whenever needed; keep usual maintenance; seek care if >12 total in 24 h.",
    "Track 2 ICS-SABA: 2 inhalations as needed; seek care if >6 doses (>12 inhalations) in 24 h.",
    "Track 2 SABA: 2 inhalations every 4–6 h if needed; seek care if >12 inhalations in 24 h; consider quadrupling maintenance ICS for 1–2 weeks.",
    "OCS if no response over 2–3 days, rapid deterioration, PEF/FEV1 <60% best, or history of sudden severe attacks.",
    "Adult OCS: prednisolone 40–50 mg/day for 5–7 days. Children: 1–2 mg/kg/day (max 40 mg) for 3–5 days, or dexamethasone 0.3–0.6 mg/kg (max 12 mg) for 1–2 days total."
  ],
  body: `
  <p>No taper is needed if OCS was taken for less than 2 weeks. Give OCS in the morning after the first dose to reduce insomnia. Warn about sleep disturbance, appetite, reflux and mood change.</p>
  <p>High-dose ICS for 7–14 days (500–1600 mcg BDP-equivalent) matched a short OCS course in adults with acute deterioration. Doubling ICS dose was not effective in placebo-controlled trials; quadrupling reduced OCS needs in some studies.</p>
  <p>After a self-managed exacerbation, see the patient within 1–2 weeks (ideally before OCS ends).</p>`,
  pearls: ["Patients with >1–2 exacerbations a year despite Step 4–5 therapy should be referred to a specialist centre."]
},
{
  id: "ex-ocs", module: "exacerbations", title: "OCS stewardship",
  ref: "Box 9-3 p.177 (new emphasis 2026)",
  summary: "OCS can be life-saving, but even 4–5 lifetime courses raise the risk of diabetes, cataract, heart failure, osteoporosis and more. Optimise treatment to prevent the need.",
  keyPoints: [
    "Short-term harms: sleep disturbance, appetite, reflux, mood change, sepsis, pneumonia, thromboembolism.",
    "Any exacerbation needing OCS should trigger a treatment review.",
    "Prefer AIR/MART with ICS-formoterol; treat modifiable risk factors; educate; refer if needed.",
    "Use the lowest effective dose for the shortest time; avoid maintenance OCS except as last resort; monitor cumulative use."
  ],
  body: "", pearls: []
},
{
  id: "ex-primary", module: "exacerbations", title: "Primary care management (≥6 years)",
  ref: "Box 9-4 p.181 (new flowchart 2026)",
  summary: "Assess cause, red flags and severity (or PRAM if <18 years). Mild: salbutamol 4 puffs or budesonide-formoterol 2 puffs. Moderate: salbutamol 4–6 puffs up to 3 times ± ipratropium, start OCS. Severe or life-threatening: transfer and treat immediately.",
  widget: "severity6",
  keyPoints: [
    "O₂ only if saturation <92%; target 92–95% (upper limit lowered in 2026).",
    "SABA doses are more conservative in 2026 because of over-treatment and lactic acidosis risk.",
    "If anaphylaxis + asthma: epinephrine first (IM, or intranasal if suitable), then bronchodilators.",
    "Review at 1 hour or earlier; transfer if worsening or not improving.",
    "Measure lung function (spirometry or PEF) in all except preschool or life-threatening, and again before discharge."
  ],
  body: `
  <h4>Delivering bronchodilators by pMDI + spacer</h4>
  <ul><li>Salbutamol 100 mcg/puff; ipratropium 20 mcg/puff.</li><li>One puff at a time; if too breathless for a single breath-hold, use tidal breathing (5–6 breaths per puff).</li><li><b>Shake the salbutamol inhaler before every puff.</b></li></ul>
  <h4>Systemic corticosteroids</h4>
  <p>Adults: prednisolone 1 mg/kg/day up to 50 mg, usually 5–7 days. Children 6–11: 1–2 mg/kg/day up to 40 mg, 3–5 days.</p>
  <h4>Ready for discharge when</h4>
  <p>Symptoms and signs meet “mild” criteria for 1–2 h after the last salbutamol dose; SpO₂ ≥92% on air; PEF improving and &gt;70% best/predicted; adequate resources at home.</p>`,
  pearls: [
    "If the patient feels much better after the first dose, they may not need more bronchodilator.",
    "Under hypoxaemia, pulse oximetry may overestimate saturation in people with dark skin."
  ]
},
{
  id: "ex-ed", module: "exacerbations", title: "Acute care facility / ED management (≥6 years)",
  ref: "Box 9-6 p.186; p.184–190",
  summary: "Screen first for life-threatening features (drowsy, confused, cyanosed, silent chest): treat immediately with nebulised salbutamol, ipratropium, oxygen and systemic corticosteroids, and call for ICU/anaesthesia help.",
  keyPoints: [
    "Mild: salbutamol 4 puffs or budesonide-formoterol 160/4.5 2 puffs; repeat once after 30–60 min if needed.",
    "Moderate: salbutamol 4–6 puffs + ipratropium 4 puffs (or salbutamol 2.5 mg + ipratropium 0.25 mg neb) up to 3 times, 20–30 min apart; start corticosteroids.",
    "Severe: salbutamol 6–10 puffs + ipratropium 4 puffs (or salbutamol 5 mg + ipratropium 0.25 mg neb) up to 3 times; O₂ to 92–95%; corticosteroids; consider IV magnesium.",
    "IV magnesium 2 g over 20 min for poor response with persistent hypoxaemia (or children FEV1 <60% predicted after 1 h).",
    "Not recommended: routine antibiotics, aminophylline/theophylline, sedation (must be avoided). NIV evidence weak."
  ],
  body: `
  <h4>Consider admission if</h4>
  <ul><li>SpO₂ &lt;92% on room air</li><li>Ongoing need for SABA more often than every 1–2 h</li><li>Dyspnoea persisting 4–6 h after systemic corticosteroids</li><li>Poor adherence prospects, poor follow-up, or red flags for asthma death</li></ul>
  <p>Other predictors of admission: female sex, older age, socioeconomic disadvantage, &gt;8 beta₂-agonist actuations in previous 24 h, RR &gt;22, SpO₂ &lt;95%, final PEF &lt;50%, previous severe attacks, lack of response. Status 1 hour after treatment predicts admission better than status on arrival.</p>
  <h4>Oxygen</h4>
  <p>Controlled oxygen titrated to 92–95% has lower mortality than 100%; do not withhold oxygen if oximetry is unavailable; in adults keep saturation ≤96%.</p>
  <h4>ICS in the ED</h4>
  <p>High-dose ICS within the first hour reduces admissions in patients not given systemic steroids. ICS-formoterol is an option for mild presentations (new 2026). On discharge, start MART (Step 4 for adults/adolescents).</p>`,
  pearls: ["Watch for SABA toxicity: lactic acidosis causes compensatory hyperventilation that can be mistaken for worsening asthma."]
},
{
  id: "ex-discharge", module: "exacerbations", title: "Discharge and follow-up",
  ref: "Box 9-5 p.183; p.189–190",
  summary: "Even one exacerbation needing urgent care or OCS is a red flag. Start or step up ICS-containing therapy (preferably MART from Step 4 if ≥12 y), finish OCS, switch reliever to as-needed, review technique and action plan, and follow up within 2–7 days (2–5 days for children).",
  keyPoints: [
    "If prescribing ICS/ICS-LABA with SABA reliever, increase ICS dose for 2–4 weeks.",
    "Stop ipratropium: no benefit after the first 1–2 hours.",
    "Identify triggers: irritants, allergens, viral infections, poor ICS adherence, no action plan.",
    "Refer if ≥1 exacerbation needing OCS, urgent visit, ED or hospitalisation in the last 12 months.",
    "Next follow-up within 2–3 months."
  ],
  body: `<p>Regular SABA for even 1–2 weeks can worsen asthma or mask deterioration. Post-ED comprehensive programmes (optimised treatment, technique, written plan, regular review) are cost-effective.</p>`,
  pearls: []
},
{
  id: "ex-preschool", module: "exacerbations", title: "Acute asthma and wheezing in children ≤5",
  ref: "Box 12-1 to 12-7 p.215–227",
  summary: "Grade severity clinically and with a validated score (e.g. PRAM). Salbutamol 4 puffs (or 2.5 mg neb) for mild; up to 3 times 20–30 min apart for moderate, with ipratropium and OCS; transfer for severe. Target SpO₂ ≥92% if O₂ given.",
  widget: "pram",
  keyPoints: [
    "Home: 2 puffs salbutamol by spacer, repeat up to twice at 20-min intervals; seek care if relief <4 h, distress, drowsiness, or infant <12 months needing repeated SABA.",
    "Immediate transfer: cyanosis, unable to speak/drink, RR >40, SpO₂ <92%, quiet chest, no response to 3 rounds of salbutamol, persistent tachypnoea, or inadequate home care.",
    "Prednisolone 1–2 mg/kg (max 20 mg <2 y; 30 mg 2–5 y) for 3–5 days, or dexamethasone 0.3–0.6 mg/kg (max 12 mg) for 1–2 days, or IV methylprednisolone 1 mg/kg 6-hourly day 1.",
    "IV magnesium 40–50 mg/kg (max 2 g) over 10–20 min for severe exacerbations in children ≥2 years.",
    "Follow-up within 1–3 days, then within 2–3 months; refer if >1 OCS course in past year."
  ],
  body: `
  <h4>Severity in children ≤5 (Box 12-1)</h4>
  <div class="scroll"><table class="tbl"><thead><tr><th></th><th>Mild</th><th>Moderate</th><th>Severe</th><th>Life-threatening</th></tr></thead><tbody>
  <tr><td>SpO₂ (air)</td><td>≥94%</td><td>≥92%</td><td>&lt;92%</td><td rowspan="5">Drowsy, confused, cyanosed, or most severe score</td></tr>
  <tr><td>Speech</td><td>Sentences</td><td>Phrases</td><td>Words</td></tr>
  <tr><td>Resp. rate</td><td>≤40</td><td>↑ but ≤40</td><td>&gt;40</td></tr>
  <tr><td>Accessory muscles</td><td>Absent</td><td>Some</td><td>Present ± scalene</td></tr>
  <tr><td>PRAM / PAS</td><td>1–3 / 5–7</td><td>4–7 / 8–11</td><td>8–10 / 12–15</td></tr>
  </tbody></table></div>
  <p>Normal respiratory rate: &lt;50/min at 2–12 months; &lt;40/min at 1–5 years.</p>
  <p>Start ICS before discharge after a moderate or severe presentation, or if interval symptoms ≥2 days/week. Dexamethasone is less likely to cause vomiting.</p>`,
  pearls: ["In children under 18 presenting acutely, GINA strongly recommends a validated clinical score for severity (new 2026)."]
},

/* ============================ SEVERE ============================ */
{
  id: "sv-defs", module: "severe", title: "Uncontrolled, difficult-to-treat and severe asthma",
  ref: "p.150–151",
  summary: "Difficult-to-treat = uncontrolled despite medium/high-dose ICS + second controller (or maintenance OCS), or needing high-dose treatment. Severe = the subset uncontrolled despite adherence to optimised high-dose ICS-LABA and management of contributory factors, or worsening when it is reduced.",
  keyPoints: [
    "Uncontrolled = poor symptom control and/or ≥2 OCS-treated exacerbations/year or ≥1 hospitalisation/year.",
    "About 3.7% of asthma patients have severe asthma (Netherlands data).",
    "Asthma is not severe if it markedly improves once technique and adherence are fixed.",
    "Severe asthma costs exceed those of type 2 diabetes, stroke or COPD per patient (UK)."
  ],
  body: `<p>In adolescents, severe asthma may improve over 3 years in about 30%; higher baseline eosinophils predicted becoming non-severe.</p>`,
  pearls: []
},
{
  id: "sv-tree", module: "severe", title: "Decision tree: stages 1–10",
  ref: "Box 8-2 to 8-5 p.152–155",
  summary: "Stages 1–4 (primary or specialist care) confirm the diagnosis, address contributing factors and optimise treatment for 3–6 months. Stages 5–8 (specialist) investigate, phenotype and add therapy. Stages 9–10 review response and maintain shared care.",
  widget: "severetree",
  keyPoints: [
    "Stage 3 optimise: education, technique, adherence, switch to MART, non-pharmacological measures, treat comorbidities, non-biologic add-ons, high-dose ICS-LABA trial 3–6 months.",
    "Stage 4: if controlled, step down (OCS first); if uncontrolled → severe asthma likely, refer.",
    "Stage 6 Type 2 markers on high-dose ICS: eosinophils ≥150/µL, FeNO ≥20 ppb, sputum eosinophils ≥2%, or allergen-driven. Repeat up to 3× (1–2 weeks after OCS or on lowest dose).",
    "Eosinophils ≥300/µL: look for non-asthma causes (e.g. Strongyloides); ≥1500/µL consider EGPA."
  ],
  body: `
  <h4>Stage 5 investigations</h4>
  <p>CXR or HRCT; skin prick/specific IgE; other airway conditions (AERD, CRSwNP, ILO, OSA, ABPA, bronchiectasis, stenosis, malacia, TB/MAC infection); OCS/high-dose ICS adverse effects (glucose, morning cortisol, DEXA); non-pulmonary conditions (GERD, cardiac failure, PE, anxiety, depression). Consider social/psychological support, multidisciplinary care, registries or trials.</p>
  <h4>Stage 7: other treatments</h4>
  <p><b>Type 2-high:</b> adherence tests, increase ICS for 3–6 months, treat T2 phenotypes (AERD, ABPA, CRS, polyps, atopic dermatitis). If biologics unavailable: higher-dose ICS-LABA, LAMA, LTRA, low-dose azithromycin, last resort low-dose OCS.<br>
  <b>Low Type 2:</b> review basics, avoid exposures, sputum induction, HRCT, bronchoscopy; trial LAMA, azithromycin, anti-IL4Rα if on maintenance OCS, anti-TSLP; bronchial thermoplasty with registry; repeat biomarkers if context changes.</p>`,
  pearls: ["Before starting a biologic, test for parasitic infection where relevant and treat it."]
},
{
  id: "sv-biologics", module: "severe", title: "Choosing and reviewing biologic therapy",
  ref: "p.162–168; Box 8-4 (updated 2026), Box 8-6 (new)",
  summary: "Consider biologics for exacerbations or poor control despite at least high-dose ICS-LABA with Type 2 inflammation or OCS dependence. Choose using payer criteria, predictors of response, Type 2 comorbidities, cost, dosing, route and preference. Trial for at least 4 months (6 for depemokimab).",
  widget: "biologics",
  keyPoints: [
    "Anti-IgE: predictors childhood onset and allergen-driven symptoms; baseline IgE does not predict response.",
    "Anti-IL5/5R: strongest predictors higher eosinophils and more exacerbations; also adult onset, nasal polyps, maintenance OCS, FEV1 <65%.",
    "Anti-IL4Rα: strongest predictors higher eosinophils and FeNO; not for eosinophils >1500/µL.",
    "Anti-TSLP: higher eosinophils and FeNO; may be used with or without Type 2 markers; no OCS-sparing effect shown.",
    "New 2026: depemokimab (anti-IL5, every 26 weeks, ≥12 y) and biosimilar omalizumab-igec."
  ],
  body: `
  <h4>Review</h4>
  <ul>
    <li>Review at 3–4 months, then every 3–6 months: control (ACT, ACQ-5), exacerbations, lung function, OCS, comorbidities, side-effects, satisfaction.</li>
    <li>If unclear response, extend trial to 6–12 months. No response: stop and consider switching class.</li>
    <li>Good response: reduce OCS first (check adrenal function, bone health), then other add-ons, then ICS-LABA dose after 3–6 months stable. Never stop ICS completely.</li>
    <li>Consider biologic withdrawal only after ≥12 months, if controlled on medium-dose ICS and no ongoing allergic trigger.</li>
  </ul>
  <p>Switching to depemokimab may be considered after a good response to mepolizumab, but not to benralizumab. First biologic dose should not be on the same day as a vaccine. Omalizumab contains polysorbate.</p>`,
  pearls: ["There is an urgent need for head-to-head biologic comparisons."]
},

/* ============================ SPECIAL ============================ */
{
  id: "sp-comorb", module: "special", title: "Common comorbidities",
  ref: "Section 6 p.126–131",
  summary: "Obesity, GERD, anxiety/depression, food allergy, rhinitis and chronic rhinosinusitis add symptom burden and some worsen control. Treat them as part of personalised care.",
  keyPoints: [
    "Obesity: confirm diagnosis objectively; ICS still essential; 5–10% weight loss helps; bariatric surgery largest effect; GLP-1RA linked to fewer exacerbations in observational data; CPAP for OSA reduced moderate exacerbations.",
    "GERD: treat symptomatic reflux; do not treat uncontrolled asthma with PPIs if no reflux symptoms.",
    "Anxiety/depression: more common, worse control; refer; panic may mimic asthma.",
    "Food allergy: asthma raises risk of fatal anaphylaxis; carry epinephrine; give epinephrine first if anaphylaxis.",
    "Rhinitis: intranasal corticosteroids. CRSwNP: saline, nasal steroids, surgery, biologics."
  ],
  body: `<p>Biologics approved for CRSwNP include omalizumab, mepolizumab, dupilumab, tezepelumab and depemokimab. Endoscopic sinus surgery improves quality of life but not asthma outcomes.</p>`,
  pearls: ["Low FeNO in obese adults may be misread as non-eosinophilic asthma."]
},
{
  id: "sp-populations", module: "special", title: "Specific populations and settings",
  ref: "p.132–140",
  summary: "Adolescents, athletes, pregnancy, elderly, occupational asthma, AERD, ABPA, surgery, LMICs, air travel, extreme weather and COVID-19 each need specific adjustments.",
  keyPoints: [
    "Pregnancy: do not stop ICS; benefits outweigh risks; review every 4–6 weeks; treat exacerbations aggressively; monitor neonatal glucose after high-dose beta-agonists in labour.",
    "Adolescents: see them alone; adherence ~28–36%; plan transition by readiness (~11–13 y).",
    "Elderly: more beta-agonist and steroid side-effects; check eye drops; simplify devices.",
    "AERD: 7% of adults with asthma (15% severe); avoid COX-1 inhibitors; COX-2 inhibitors or paracetamol with supervision; aspirin desensitisation option.",
    "ABPA: OCS (e.g. 4-month taper) first-line; itraconazole for relapse; omalizumab evidence; beware itraconazole interactions with salmeterol/vilanterol.",
    "Surgery: hydrocortisone cover if long-term high-dose ICS or OCS >2 weeks in previous 6 months."
  ],
  body: `
  <div class="scroll"><table class="tbl"><tbody>
  <tr><td><b>EIB</b></td><td>Regular ICS reduces EIB; warm-up; ICS-formoterol as needed and before exercise was non-inferior to daily ICS. Breakthrough EIB suggests poor control.</td></tr>
  <tr><td><b>Athletes</b></td><td>Avoid training in extreme cold or pollution; IOC/WADA allow formoterol up to 54 mcg delivered per day.</td></tr>
  <tr><td><b>Perimenstrual</b></td><td>~20% of women; oral contraceptives and/or LTRA may help.</td></tr>
  <tr><td><b>Occupational</b></td><td>Ask every adult-onset patient; remove exposure early; refer.</td></tr>
  <tr><td><b>LMICs</b></td><td>96% of asthma deaths (2019). Track 1 is safest; Track 2 if access limits Track 1; homemade bottle spacers work.</td></tr>
  <tr><td><b>COVID-19</b></td><td>Continue all asthma medicines; avoid nebulisers; nirmatrelvir/ritonavir interacts with salmeterol/vilanterol: switch to ICS or ICS-formoterol for the course plus 5 days.</td></tr>
  <tr><td><b>Air travel</b></td><td>Carry all inhalers and spacer in the cabin plus the action plan.</td></tr>
  <tr><td><b>Extreme weather</b></td><td>Heat waves ↑ hospitalisations ~39%, cold spells ~35%; masks for wildfire smoke; weather alerts.</td></tr>
  </tbody></table></div>`,
  pearls: []
},

/* ============================ COPD ============================ */
{
  id: "copd-overlap", module: "copd", title: "Asthma, COPD or asthma+COPD",
  ref: "Section 7 p.141–148; Box 7-2",
  summary: "In adults with chronic respiratory symptoms, decide whether features favour asthma, COPD, or both. If any asthma features are present, ICS-containing treatment is essential and LABA/LAMA must never be given without ICS.",
  widget: "copdsyndrome",
  keyPoints: [
    "Asthma+COPD (formerly asthma-COPD overlap) is a descriptive term, not a single disease.",
    "Treat as asthma if highly likely asthma or features of both.",
    "Treat as COPD (GOLD 2026): LAMA-LABA first; avoid high-dose ICS and maintenance OCS.",
    "Spirometry is essential to confirm persistent airflow limitation.",
    "Refer when diagnosis is uncertain, atypical features (haemoptysis, weight loss, fever), or poor response."
  ],
  body: `
  <h4>Other investigations (Box 7-4)</h4>
  <table class="tbl"><thead><tr><th></th><th>Asthma</th><th>COPD</th></tr></thead><tbody>
  <tr><td>DLCO</td><td>Normal or slightly high</td><td>Often reduced</td></tr>
  <tr><td>ABG</td><td>Normal between attacks</td><td>May be chronically abnormal</td></tr>
  <tr><td>HRCT</td><td>Usually normal; air trapping, wall thickening, plugs possible</td><td>Emphysema/air trapping quantifiable</td></tr>
  <tr><td>FeNO</td><td>&gt;50 ppb in non-smokers suggests eosinophilic inflammation</td><td>Usually normal; low in smokers</td></tr>
  <tr><td>Atopy</td><td>Raises probability of allergic asthma</td><td>Background prevalence</td></tr>
  </tbody></table>`,
  pearls: ["Patients with both diagnoses have worse outcomes; specialist referral is encouraged."]
},

/* ============================ SELF-MANAGEMENT ============================ */
{
  id: "sm-inhaler", module: "selfmgmt", title: "Inhaler choice and technique",
  ref: "Box 5-1, 5-2 p.118–119 (updated 2026)",
  summary: "Up to 70–80% of patients use inhalers incorrectly. Choose, check, correct and confirm at every opportunity.",
  keyPoints: [
    "CHOOSE: right medicine first, then a device the patient can use; avoid multiple device types.",
    "CHECK: ask the patient to show you; use a device-specific checklist.",
    "CORRECT: physically demonstrate; repeat 2–3 times; recheck often (errors recur within 4–6 weeks).",
    "CONFIRM: clinicians must be able to demonstrate each inhaler they prescribe.",
    "Shake every pMDI immediately before each actuation; a 30-second delay can change the dose a lot."
  ],
  body: `
  <h4>pMDI + spacer techniques</h4>
  <p><b>Single breath + breath-hold</b> is preferred for routine use. <b>Tidal breathing</b> (5–6 breaths per puff) is used in preschool children and during acute exacerbations.</p>
  <p>Some spacers need pre-washing with detergent or priming with 2–4 puffs because of static. Rinse and spit after ICS to reduce candidiasis. Pictograms or step lists attached to the inhaler improve retention.</p>
  <p>Environmental impact: DPIs where available, recycling, low global-warming propellants. Preventing ED visits and admissions has an even larger environmental benefit.</p>`,
  pearls: ["Pharmacists, nurses and trained lay workers provide highly effective inhaler training."]
},
{
  id: "sm-adherence", module: "selfmgmt", title: "Adherence and guided self-management",
  ref: "Box 5-3, 5-4 p.121–125",
  summary: "Poor adherence is common and both intentional and unintentional. Guided self-management with self-monitoring, a written action plan and regular review cuts hospitalisations and ED visits by one-third to two-thirds.",
  keyPoints: [
    "Ask empathically: “In the last 4 weeks, how many days a week have you been taking it?”",
    "Check prescription dates and dose counters.",
    "Effective strategies: shared decision-making, inhaler reminders, once-daily ICS, home visits, electronic monitoring with feedback.",
    "Self-management in 20 patients prevents one hospitalisation; in 8 patients, one ED visit.",
    "Information alone is ineffective; education without a written action plan is less effective."
  ],
  body: `<p>Contributors: device difficulty, burdensome or multiple inhalers, misunderstanding, forgetfulness, cost, belief treatment is unnecessary, side-effect fears, stigma, cultural or religious issues, dissatisfaction with providers.</p>`,
  pearls: []
},

/* ============================ PREVENTION ============================ */
{
  id: "pv-primary", module: "prevention", title: "Primary prevention of asthma",
  ref: "Section 13 p.229–234; Box 13-1",
  summary: "Advice for parents on reducing a child’s risk: no tobacco smoke exposure in pregnancy or after birth, correct vitamin D insufficiency in pregnant women with asthma, vaginal delivery where possible, avoid broad-spectrum antibiotics in the first year, breastfeed for general health.",
  keyPoints: [
    "Preterm birth (<37 weeks) and low birth weight (<2.5 kg) increase risk of childhood asthma.",
    "Overweight/obesity is a risk factor for childhood asthma, especially in girls.",
    "Maternal ICS use in pregnancy was linked with >50% lower asthma prevalence in offspring in one study.",
    "Adults: 5–20% of new adult-onset asthma is occupational.",
    "RSV prevention (maternal vaccine, nirsevimab) is being studied for effects on childhood asthma incidence."
  ],
  body: "", pearls: []
},
{
  id: "pv-biomarkers", module: "prevention", title: "Type 2 biomarkers (Appendix A)",
  ref: "Appendix A p.238–242; Table A1",
  summary: "Blood eosinophils, FeNO, total and specific IgE help with diagnosis, phenotyping, prognosis and predicting treatment response, but vary with many factors.",
  keyPoints: [
    "Blood eosinophils for diagnosis: above regional upper limit of normal.",
    "Severe asthma on high-dose ICS: ≥150/µL suggests Type 2; ≥300/µL common biologic threshold.",
    "FeNO high: ICS-naïve >50 ppb; medium-dose ICS ≥25 ppb; high-dose ICS ≥20 ppb.",
    "If not above threshold, measure at least 3 times before excluding Type 2 for biologic eligibility."
  ],
  body: `
  <table class="tbl"><thead><tr><th></th><th>Higher in</th><th>Lower in</th></tr></thead><tbody>
  <tr><td>Blood eosinophils</td><td>Males, early morning, smokers, parasites, atopic disease, allergen exposure, EGPA</td><td>Some phenotypes, corticosteroids (oral, inhaled, nasal)</td></tr>
  <tr><td>FeNO</td><td>Males, afternoon, atopic dermatitis, rhinitis, ~24 h after allergen exposure</td><td>Smokers, bronchoconstriction, early allergic response, corticosteroids</td></tr>
  </tbody></table>`,
  pearls: []
}
]);
