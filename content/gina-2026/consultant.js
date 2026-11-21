/* Consultant-level expansion: new modules, topics and data.
   Every topic has a "source":
     "GINA 2026"       – taken from the GINA 2026 Strategy Report
     "Supplementary"   – established respiratory medicine / other guidelines (ATS, ERS, BTS/NICE/SIGN, product labels).
   Where guidelines disagree the topic says so explicitly. */
GINA.register("2026", "consultant", {

  /* Full module order shown in the app (existing + new ids). */
  order: ["foundations","pathophys","diagnosis","investigations","assessment","management","children","preschool",
          "devices","exacerbations","severe","biologics","addons","ocs","special","copd","selfmgmt","prevention"],

  modules: [
    { id: "pathophys", title: "Pathophysiology & phenotypes", short: "Patho", color: "violet",
      blurb: "Type 2 and non-Type 2 inflammation, alarmins, remodelling, phenotypes and endotypes." },
    { id: "investigations", title: "Investigations & workup", short: "Tests", color: "cyan",
      blurb: "Spirometry, lung volumes, DLCO, challenge tests, biomarkers, imaging and targeted blood tests." },
    { id: "devices", title: "Inhaler devices & technique", short: "Devices", color: "teal",
      blurb: "pMDI, spacers, DPI, soft mist, breath-actuated, nebulisers: choice, technique, errors." },
    { id: "biologics", title: "Biologic therapies", short: "Biologics", color: "indigo",
      blurb: "Monographs for each biologic, selection, response assessment and stopping rules." },
    { id: "addons", title: "Add-on & advanced treatments", short: "Add-ons", color: "slate",
      blurb: "LAMA, LTRA, theophylline, azithromycin, maintenance OCS, thermoplasty, emerging agents." },
    { id: "ocs", title: "Oral corticosteroid stewardship", short: "OCS", color: "red",
      blurb: "Cumulative exposure, adverse effects, monitoring, tapering and adrenal safety." }
  ],

  topics: [
  /* ======================= PATHOPHYSIOLOGY ======================= */
  { id: "pp-overview", module: "pathophys", source: "Supplementary", title: "Airway inflammation, AHR and variable airflow",
    ref: "GINA 2026 p.25 (definition); general respiratory physiology",
    summary: "Asthma results from interaction between genetic susceptibility and environmental exposures, producing chronic airway inflammation, airway hyperresponsiveness (AHR), mucus hypersecretion and, in some patients, structural remodelling. Variable airflow limitation arises from smooth muscle contraction, airway wall oedema and mucus.",
    keyPoints: [
      "Bronchoconstriction: rapid, reversed by beta2-agonists; driven by mediators (histamine, cysteinyl leukotrienes, prostaglandin D2).",
      "Airway wall oedema and mucus plugging contribute to fixed-looking obstruction during exacerbations and respond to corticosteroids over days.",
      "AHR: exaggerated narrowing to direct (methacholine, histamine) or indirect (exercise, mannitol, hypertonic saline) stimuli; indirect AHR reflects active inflammation more closely.",
      "Epithelial dysfunction: impaired barrier and antiviral defence allow allergens, pollutants and viruses to trigger alarmin release.",
      "Remodelling: subepithelial fibrosis, smooth muscle hypertrophy/hyperplasia, goblet cell metaplasia, angiogenesis; may cause persistent airflow limitation."
    ],
    body: `
    <h4>Type 2 inflammatory cascade and biologic targets</h4>
    <div class="scroll"><svg class="diagram" viewBox="0 0 760 330" role="img" aria-label="Type 2 inflammatory pathway with biologic targets">
      <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="var(--muted)"/></marker></defs>
      <g font-size="12" font-family="var(--f-body)">
      <rect x="10" y="20" width="150" height="54" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="85" y="42" text-anchor="middle" fill="var(--ink)" font-weight="700">Triggers</text><text x="85" y="60" text-anchor="middle" fill="var(--muted)">allergen · virus · pollutant</text>
      <rect x="10" y="110" width="150" height="70" rx="10" fill="var(--info-bg)" stroke="var(--line)"/><text x="85" y="132" text-anchor="middle" fill="var(--ink)" font-weight="700">Airway epithelium</text><text x="85" y="150" text-anchor="middle" fill="var(--muted)">alarmins</text><text x="85" y="166" text-anchor="middle" fill="var(--ink)">TSLP · IL-33 · IL-25</text>
      <rect x="215" y="40" width="150" height="54" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="290" y="62" text-anchor="middle" fill="var(--ink)" font-weight="700">Dendritic cell</text><text x="290" y="80" text-anchor="middle" fill="var(--muted)">antigen presentation</text>
      <rect x="215" y="150" width="150" height="54" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="290" y="172" text-anchor="middle" fill="var(--ink)" font-weight="700">Th2 cell · ILC2</text><text x="290" y="190" text-anchor="middle" fill="var(--muted)">IL-4 · IL-5 · IL-13</text>
      <rect x="430" y="20" width="140" height="48" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="500" y="40" text-anchor="middle" fill="var(--ink)" font-weight="700">B cell → IgE</text><text x="500" y="57" text-anchor="middle" fill="var(--muted)">IL-4 / IL-13 switch</text>
      <rect x="610" y="20" width="140" height="48" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="680" y="40" text-anchor="middle" fill="var(--ink)" font-weight="700">Mast cell</text><text x="680" y="57" text-anchor="middle" fill="var(--muted)">histamine · LTs · PGD2</text>
      <rect x="430" y="120" width="140" height="48" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="500" y="140" text-anchor="middle" fill="var(--ink)" font-weight="700">Eosinophils</text><text x="500" y="157" text-anchor="middle" fill="var(--muted)">IL-5: growth, survival</text>
      <rect x="430" y="215" width="140" height="62" rx="10" fill="var(--surface2)" stroke="var(--line)"/><text x="500" y="235" text-anchor="middle" fill="var(--ink)" font-weight="700">IL-13 effects</text><text x="500" y="252" text-anchor="middle" fill="var(--muted)">mucus · AHR · iNOS</text><text x="500" y="268" text-anchor="middle" fill="var(--muted)">(↑ FeNO)</text>
      <rect x="610" y="120" width="140" height="130" rx="10" fill="var(--warn-bg)" stroke="var(--line)"/><text x="680" y="142" text-anchor="middle" fill="var(--ink)" font-weight="700">Clinical result</text><text x="680" y="162" text-anchor="middle" fill="var(--ink)">bronchoconstriction</text><text x="680" y="180" text-anchor="middle" fill="var(--ink)">mucus plugging</text><text x="680" y="198" text-anchor="middle" fill="var(--ink)">AHR</text><text x="680" y="216" text-anchor="middle" fill="var(--ink)">exacerbations</text><text x="680" y="234" text-anchor="middle" fill="var(--ink)">remodelling</text>
      <g stroke="var(--muted)" stroke-width="1.6" fill="none" marker-end="url(#ar)">
        <path d="M85 74V108"/><path d="M160 130L213 80"/><path d="M160 160L213 175"/><path d="M290 94V148"/>
        <path d="M365 165L428 52"/><path d="M365 175L428 145"/><path d="M365 190L428 238"/><path d="M570 44H608"/>
        <path d="M570 145H608"/><path d="M570 246H608"/><path d="M680 68V118"/>
      </g>
      <g font-weight="700" font-size="11">
        <rect x="20" y="192" width="130" height="24" rx="12" fill="var(--c-indigo)"/><text x="85" y="208" text-anchor="middle" fill="#fff">anti-TSLP</text>
        <rect x="435" y="76" width="130" height="24" rx="12" fill="var(--c-indigo)"/><text x="500" y="92" text-anchor="middle" fill="#fff">anti-IgE</text>
        <rect x="435" y="176" width="130" height="24" rx="12" fill="var(--c-indigo)"/><text x="500" y="192" text-anchor="middle" fill="#fff">anti-IL-5 / IL-5Rα</text>
        <rect x="220" y="215" width="140" height="24" rx="12" fill="var(--c-indigo)"/><text x="290" y="231" text-anchor="middle" fill="#fff">anti-IL-4Rα (IL-4+13)</text>
      </g></g></svg></div>
    <p class="muted" style="font-size:.86rem">Simplified schematic. Anti-TSLP acts upstream of both allergic and eosinophilic pathways, which is why it reduces exacerbations with or without Type 2 biomarkers.</p>
    <h4>Non-Type 2 (Type 2-low) mechanisms</h4>
    <ul>
      <li><b>Neutrophilic:</b> Th1/Th17 pathways, IL-8, IL-17; associated with smoking, obesity, infection, occupational exposures and high-dose ICS; poor ICS response.</li>
      <li><b>Paucigranulocytic:</b> little inflammation in sputum; symptoms driven by smooth muscle dysfunction and AHR.</li>
      <li><b>Mixed granulocytic:</b> both eosinophils and neutrophils; often severe.</li>
    </ul>
    <h4>Genes and environment</h4>
    <p>Asthma is polygenic (e.g. the 17q21 ORMDL3/GSDMB locus with early-onset, virus-induced wheeze; IL33, IL1RL1, TSLP loci). Environmental drivers include early-life viral infection (RSV, rhinovirus), allergen sensitisation, tobacco smoke, air pollution, occupational agents, obesity, and microbiome effects. GINA notes risk factors such as preterm birth, maternal smoking and broad-spectrum antibiotics in infancy (Section 13).</p>`,
    pearls: [
      "FeNO mainly reflects IL-13-driven iNOS activity in the epithelium; blood eosinophils mainly reflect IL-5. They can be discordant, and each predicts response to different biologics.",
      "Corticosteroids suppress Type 2 biomarkers, so Type 2-low on high-dose ICS or OCS may be masked Type 2-high."
    ] },

  { id: "pp-phenotypes", module: "pathophys", source: "Supplementary", title: "Phenotypes and endotypes",
    ref: "GINA 2026 p.25–26, Section 8, Appendix A; ERS/ATS severe asthma guidance",
    summary: "Phenotypes describe observable clusters (age of onset, allergy, obesity, polyps); endotypes describe the underlying mechanism (Type 2-high vs Type 2-low). Phenotyping matters most in severe asthma, where it guides biologic choice.",
    widget: "phenotype",
    keyPoints: [
      "Type 2-high: allergic (early-onset, atopic), eosinophilic late-onset (often with CRSwNP), AERD.",
      "Type 2-low: neutrophilic, paucigranulocytic, obesity-associated, smoking-associated.",
      "GINA Type 2 markers in severe asthma on high-dose ICS: eosinophils ≥150/µL, FeNO ≥20 ppb, sputum eosinophils ≥2%, or clinically allergen-driven.",
      "Repeat biomarkers up to 3 times on the lowest possible OCS dose before calling asthma Type 2-low."
    ],
    body: `
    <div class="scroll"><table class="tbl"><thead><tr><th>Phenotype</th><th>Clinical features</th><th>Biomarkers</th><th>Comorbidities</th><th>Treatment implications</th></tr></thead><tbody>
    <tr><td><b>Early-onset allergic</b></td><td>Childhood onset, seasonal or perennial allergen triggers, eczema, rhinitis</td><td>Sensitisation (SPT/sIgE), ↑ total IgE, ± ↑ eos and FeNO</td><td>Allergic rhinitis, atopic dermatitis, food allergy</td><td>Good ICS response; allergen measures; HDM SLIT; anti-IgE; anti-IL-4Rα; anti-TSLP</td></tr>
    <tr><td><b>Late-onset eosinophilic</b></td><td>Adult onset, often severe, frequent exacerbations, less atopy</td><td>Blood eos often ≥300/µL, ↑ FeNO, sputum eos ≥2%</td><td>CRSwNP, AERD</td><td>Often needs high-dose ICS; anti-IL-5/5R, anti-IL-4Rα, anti-TSLP</td></tr>
    <tr><td><b>AERD (N-ERD)</b></td><td>Asthma + CRSwNP + respiratory reactions to COX-1 inhibitors</td><td>High eos, ↑ urinary LTE4</td><td>Nasal polyps, anosmia</td><td>Avoid NSAIDs (COX-2 inhibitors usually tolerated under supervision); LTRA; aspirin desensitisation; biologics for polyps</td></tr>
    <tr><td><b>Neutrophilic</b></td><td>Adult, often smokers or occupational exposure, poor ICS response</td><td>Sputum neutrophils high (often ≥61–64%), low eos/FeNO</td><td>Bronchiectasis, chronic infection, smoking</td><td>Smoking cessation; azithromycin; LAMA; anti-TSLP; avoid escalating ICS without benefit</td></tr>
    <tr><td><b>Paucigranulocytic</b></td><td>Symptoms with little inflammation</td><td>Normal sputum cells, low FeNO/eos</td><td>Dysfunctional breathing, ILO</td><td>Bronchodilators (LAMA), review diagnosis; thermoplasty only in registries</td></tr>
    <tr><td><b>Obesity-associated</b></td><td>Prominent breathlessness, women, adult onset</td><td>Low FeNO, little eosinophilia</td><td>OSA, GERD, deconditioning</td><td>Weight loss (5–10%), exercise, bariatric surgery; GLP-1 RA observational data</td></tr>
    <tr><td><b>Smoking-associated</b></td><td>Current/ex-smoker; overlap with COPD</td><td>FeNO lowered by smoking; eos may be higher</td><td>COPD, cardiovascular disease</td><td>Cessation; reduced ICS response; treat as asthma if asthma features (Box 7-2)</td></tr>
    </tbody></table></div>`,
    pearls: ["The phenotype tool here is a teaching aid. It suggests patterns; it does not replace specialist phenotyping."] },

  /* ======================= DIAGNOSIS additions ======================= */
  { id: "dx-spiro", module: "diagnosis", source: "GINA 2026 + Supplementary", title: "Spirometry, flow-volume loops and quality",
    ref: "GINA 2026 Box 1-2, p.31–32; ERS/ATS 2019 spirometry standard; ERS/ATS 2022 interpretation",
    summary: "Spirometry shows airflow limitation (low FEV1/FVC) and its variability (bronchodilator response). A normal result does not exclude asthma; repeat when symptomatic or after withholding bronchodilators.",
    widget: "spirointerp",
    keyPoints: [
      "FEV1/FVC normally >0.75–0.80 in adults and >0.90 in children (GINA). ERS/ATS prefer the lower limit of normal (LLN, z-score < −1.645) to avoid over-diagnosis in the elderly and under-diagnosis in the young.",
      "Acceptability: rapid start (back-extrapolated volume <5% FVC or 100 mL), no cough in first second, plateau or ≥15 s exhalation; repeatability: two best FEV1 and FVC within 150 mL.",
      "Bronchodilator responsiveness: GINA uses FEV1 or FVC ≥12% AND ≥200 mL from baseline in adults; ERS/ATS 2022 uses >10% of predicted value.",
      "A reduced FVC with normal ratio may reflect air trapping during an exacerbation; confirm restriction with TLC."
    ],
    body: `
    <h4>Flow-volume loop clues</h4>
    <table class="tbl"><thead><tr><th>Pattern</th><th>Loop appearance</th><th>Think of</th></tr></thead><tbody>
    <tr><td>Intrathoracic airflow obstruction</td><td>Concave (“scooped”) expiratory limb</td><td>Asthma, COPD</td></tr>
    <tr><td>Variable extrathoracic obstruction</td><td>Flattened inspiratory limb, normal expiratory limb</td><td>Inducible laryngeal obstruction (vocal cord dysfunction), vocal cord palsy</td></tr>
    <tr><td>Variable intrathoracic obstruction</td><td>Flattened expiratory plateau</td><td>Tracheomalacia, intrathoracic tumour</td></tr>
    <tr><td>Fixed upper airway obstruction</td><td>Both limbs flattened (box shape)</td><td>Tracheal stenosis, goitre, post-intubation stricture</td></tr>
    </tbody></table>
    <h4>Guideline comparison: diagnostic criteria</h4>
    <div class="scroll"><table class="tbl"><thead><tr><th>Item</th><th>GINA 2026</th><th>BTS/NICE/SIGN 2024 (NG245)</th><th>ERS/ATS 2022</th></tr></thead><tbody>
    <tr><td>First objective test (adults)</td><td>Spirometry with BDR (or PEF); FeNO/eos only supportive</td><td>Blood eos above reference range or FeNO ≥50 ppb diagnoses asthma; then BDR</td><td>—</td></tr>
    <tr><td>BDR positive (adults)</td><td>FEV1 or FVC ≥12% and ≥200 mL</td><td>FEV1 ≥12% and ≥200 mL, or ≥10% of predicted</td><td>&gt;10% of predicted FEV1 or FVC</td></tr>
    <tr><td>PEF variability</td><td>Average diurnal variability &gt;10% adults, &gt;13% children</td><td>Amplitude % mean ≥20% over 2 weeks</td><td>—</td></tr>
    <tr><td>Children 5–16</td><td>BDR ≥12% predicted; FeNO &gt;35 ppb supportive</td><td>FeNO ≥35 ppb diagnoses; then BDR; then HDM SPT or IgE + eos</td><td>—</td></tr>
    </tbody></table></div>
    <p class="muted" style="font-size:.86rem">GINA and NICE differ mainly in the role of FeNO and eosinophils: GINA treats them as supportive, because they are not specific for asthma; NICE uses them as rule-in tests.</p>`,
    pearls: ["Always report which reference equations were used (GLI-2012 for spirometry; GLI 2022 race-neutral equations are increasingly adopted)."] },

  { id: "dx-ddx-detail", module: "diagnosis", source: "Supplementary", title: "Differential diagnosis: detailed comparison",
    ref: "GINA 2026 Box 1-3; ERS/ATS, BTS guidance",
    summary: "Detailed distinguishing features, key investigations and clues for the conditions most often confused with, or coexisting with, asthma.",
    widget: "ddxexplorer",
    keyPoints: [
      "Alternative diagnoses frequently coexist with asthma; finding one does not rule asthma out.",
      "Inspiratory symptoms, throat tightness and stridor point to ILO; monophonic or localised wheeze points to central airway obstruction.",
      "Exertional breathlessness with orthopnoea and oedema points to heart failure; check BNP and echocardiography."
    ],
    body: "", pearls: [] },

  /* ======================= INVESTIGATIONS ======================= */
  { id: "inv-pft", module: "investigations", source: "Supplementary", title: "Pulmonary function testing beyond spirometry",
    ref: "ERS/ATS standards; GINA 2026 Box 1-2, Box 7-4",
    summary: "Lung volumes, DLCO, provocation and exercise testing refine the diagnosis, identify air trapping and separate asthma from COPD, restriction or vascular disease.",
    keyPoints: [
      "Lung volumes: ↑ RV and RV/TLC indicate air trapping (common in severe asthma); TLC normal or ↑ (hyperinflation); low TLC = restriction (consider obesity, ILD).",
      "DLCO: normal or slightly ↑ in asthma; ↓ suggests emphysema, ILD or pulmonary vascular disease.",
      "Direct challenge (methacholine): sensitive, a negative test off ICS largely excludes current asthma. PD20 ≤200 mcg is positive; >400 mcg normal.",
      "Indirect challenge (mannitol, exercise, eucapnic voluntary hyperpnoea): more specific, reflects active inflammation; preferred for athletes."
    ],
    body: `
    <table class="tbl"><thead><tr><th>Test</th><th>Indication</th><th>Expected in asthma</th><th>Effect on management</th></tr></thead><tbody>
    <tr><td>Body plethysmography</td><td>Severe or atypical asthma, low FVC, suspected restriction</td><td>↑ RV, ↑ RV/TLC; TLC normal/↑</td><td>Air trapping supports small-airway disease; low TLC prompts search for restriction</td></tr>
    <tr><td>DLCO</td><td>Smokers, suspected COPD/ILD/PVD</td><td>Normal or ↑</td><td>Low DLCO → CT, consider COPD or ILD</td></tr>
    <tr><td>Methacholine</td><td>Normal spirometry, typical symptoms</td><td>FEV1 fall ≥20% (PD20 ≤200 mcg)</td><td>Negative test off ICS argues strongly against asthma</td></tr>
    <tr><td>Mannitol</td><td>Diagnosis, athletes</td><td>FEV1 fall ≥15% (or 10% between doses)</td><td>Positive reflects inflammation likely to respond to ICS</td></tr>
    <tr><td>Exercise challenge</td><td>Exercise-induced symptoms</td><td>FEV1 fall &gt;10% and &gt;200 mL</td><td>Confirms EIB; check control and technique</td></tr>
    <tr><td>Cardiopulmonary exercise test</td><td>Unexplained breathlessness</td><td>Ventilatory limitation with dynamic hyperinflation</td><td>Identifies deconditioning, cardiac limitation, dysfunctional breathing</td></tr>
    <tr><td>Serial PEF</td><td>Diagnosis, occupational asthma, poor perceivers</td><td>Diurnal variability &gt;10% adults (GINA)</td><td>Work vs off-work records for occupational asthma (≥4 readings/day, ≥3 weeks)</td></tr>
    </tbody></table>`,
    pearls: ["Withhold bronchodilators and avoid caffeine before challenge testing; do not challenge if FEV1 is markedly reduced (commonly <60–70% predicted)."] },

  { id: "inv-biomarkers", module: "investigations", source: "GINA 2026 + Supplementary", title: "Inflammatory biomarkers",
    ref: "GINA 2026 Appendix A, Box 8-3; ATS FeNO guideline",
    summary: "Blood eosinophils, FeNO, total and specific IgE, and sputum cell counts describe Type 2 activity, predict exacerbations and response to ICS and biologics, and are all suppressed by corticosteroids.",
    keyPoints: [
      "Blood eosinophils: ≥150/µL on high-dose ICS = Type 2 signal (GINA); ≥300/µL common biologic threshold; ≥1500/µL consider EGPA/HES.",
      "FeNO (ATS adult cut-offs): <25 ppb low, 25–50 intermediate, >50 high (children <20, 20–35, >35). GINA: high-dose ICS ≥20 ppb counts as Type 2.",
      "Total IgE: needed for omalizumab dosing; does not predict response. Specific IgE/SPT shows sensitisation, interpret with history.",
      "Induced sputum: eosinophils ≥2–3% eosinophilic; neutrophils ≥61–64% neutrophilic. Sputum-guided treatment reduces exacerbations in specialist centres.",
      "Corticosteroids lower eosinophils and FeNO within days; measure on the lowest possible dose and repeat."
    ],
    body: `
    <table class="tbl"><thead><tr><th>Biomarker</th><th>Use</th><th>Raised in</th><th>Lowered by</th><th>Biologic relevance</th></tr></thead><tbody>
    <tr><td>Blood eosinophils</td><td>Phenotyping, exacerbation risk</td><td>Parasites, drug reaction, EGPA, HES, ABPA, CRSwNP</td><td>OCS, ICS; diurnal variation (lower in the afternoon)</td><td>Anti-IL-5/5R (strongest predictor); anti-IL-4Rα; anti-TSLP</td></tr>
    <tr><td>FeNO</td><td>Supports diagnosis, ICS adherence, Type 2 activity</td><td>Atopy, rhinitis, eosinophilic bronchitis, viral infection</td><td>Smoking, ICS/OCS, bronchoconstriction</td><td>Anti-IL-4Rα and anti-TSLP response predictor</td></tr>
    <tr><td>Total IgE</td><td>Omalizumab dosing; ABPA (typically &gt;500 IU/mL)</td><td>Atopy, ABPA, parasites, smoking</td><td>Omalizumab (measurement unreliable once on it)</td><td>Dosing only</td></tr>
    <tr><td>Specific IgE / SPT</td><td>Allergic phenotype</td><td>Sensitisation</td><td>Antihistamines (SPT)</td><td>Anti-IgE eligibility</td></tr>
    <tr><td>Sputum cells</td><td>Phenotyping in severe asthma</td><td>Eos or neutrophils by phenotype</td><td>Steroids (eos)</td><td>Guides ICS/OCS titration</td></tr>
    </tbody></table>`,
    pearls: ["A high FeNO on medium/high-dose ICS is most often poor adherence; directly observed ICS lowers FeNO in about two-thirds (GINA Box 3-5)."] },

  { id: "inv-imaging", module: "investigations", source: "Supplementary", title: "Imaging",
    ref: "GINA 2026 p.35, Box 8-2 Stage 5; ERS/ATS severe asthma guidance",
    summary: "Chest X-ray is not routine in stable asthma. HRCT and sinus CT are used in difficult-to-treat or severe asthma to look for alternative diagnoses, comorbidities and features that guide therapy.",
    keyPoints: [
      "Chest X-ray: atypical features, suspected pneumonia/pneumothorax, before biologics in some centres, or if not responding.",
      "HRCT: bronchiectasis, mucus plugging (scored, e.g. 0–20 segments), airway wall thickening, mosaic attenuation/expiratory air trapping, emphysema, ILD, central bronchiectasis with high-attenuation mucus (ABPA).",
      "Mucus plugs on CT are linked to eosinophilic inflammation, low FEV1 and exacerbations, and fall with anti-Type 2 biologics.",
      "CT sinuses: CRSwNP extent (Lund–Mackay score) before ENT referral or biologic selection."
    ],
    body: "", pearls: ["Ask for inspiratory and expiratory HRCT images when air trapping or bronchiolitis is suspected."] },

  { id: "inv-bloods", module: "investigations", source: "Supplementary", title: "Targeted additional investigations",
    ref: "GINA 2026 Box 8-2 Stage 5; ISHAM-AWG 2024 ABPA criteria; EGPA classification",
    summary: "Order further tests when the picture suggests ABPA, EGPA, parasitic infection, cardiac disease or sleep apnoea, especially before immunomodulatory treatment.",
    widget: "invexplorer",
    keyPoints: [
      "ABPA: Aspergillus-specific IgE (or positive skin test) and total IgE ≥500 IU/mL, plus Aspergillus IgG, eosinophils ≥500/µL or imaging features.",
      "EGPA: eosinophilia ≥1500/µL, neuropathy, sinus disease, pulmonary infiltrates, cardiac or renal involvement; check ANCA (positive in ~30–40%), troponin, ECG, urinalysis.",
      "Strongyloides serology (± stool) before OCS escalation or biologics if eosinophils ≥300/µL and any endemic exposure.",
      "Sleep study when snoring, witnessed apnoeas, obesity or daytime sleepiness."
    ],
    body: "", pearls: ["Saudi Arabia, Sudan and much of Africa, Asia and Latin America have Strongyloides exposure risk; screen before high-dose steroids or biologics."] },

  /* ======================= ASSESSMENT additions ======================= */
  { id: "as-initial", module: "assessment", source: "GINA 2026", title: "Initial consultation: history, triggers and risk",
    ref: "Box 1-2, Box 2-2, Box 3-5, Box 3-6, Box 9-1",
    summary: "A structured first assessment captures typical and atypical symptoms, triggers and modifiable risks, and produces an individual risk summary and plan.",
    widget: "initialassess",
    keyPoints: [
      "Record evidence of variable symptoms and variable airflow before starting ICS whenever possible.",
      "Identify triggers that are modifiable (smoke, occupational agents, NSAIDs, beta-blockers, allergens if sensitised).",
      "Identify red flags for fatal asthma (Box 9-1) and flag them clearly in the notes."
    ],
    body: "", pearls: [] },

  /* ======================= DEVICES ======================= */
  { id: "dv-compare", module: "devices", source: "GINA 2026 + Supplementary", title: "Choosing an inhaler device",
    ref: "GINA 2026 Box 5-1, 5-2; ERS/ISAM aerosol task force",
    summary: "Choose the medicine first, then the device the patient can use correctly. Match the device to inspiratory flow, coordination, age, cognition and hand strength, and avoid mixing device types.",
    widget: "devicepicker",
    keyPoints: [
      "pMDI: slow, deep inhalation (~3–5 s) with coordination; add a spacer for children, the elderly, ICS use and acute attacks.",
      "DPI: needs a forceful, fast inhalation from the start; unsuitable for young children and for very low inspiratory flow (e.g. severe exacerbation, frailty).",
      "Soft mist inhaler: slow aerosol, slow inhalation, less coordination than pMDI.",
      "Breath-actuated pMDI: removes coordination problem; needs moderate flow.",
      "Nebuliser: tidal breathing, any age; in acute asthma pMDI + spacer is at least as effective."
    ],
    body: `
    <div class="scroll"><table class="tbl"><thead><tr><th>Device</th><th>Inspiratory effort</th><th>Coordination</th><th>Age</th><th>Limitations</th></tr></thead><tbody>
    <tr><td>pMDI alone</td><td>Slow and deep</td><td>High</td><td>Older children and adults with good technique</td><td>Poor lung deposition if uncoordinated; oropharyngeal deposition</td></tr>
    <tr><td>pMDI + spacer/VHC (mask)</td><td>Tidal breathing</td><td>Low</td><td>Under ~4 years</td><td>Mask seal essential; bulk</td></tr>
    <tr><td>pMDI + spacer (mouthpiece)</td><td>Slow, or tidal</td><td>Low</td><td>~4 years and older, elderly, acute attacks</td><td>Static charge (prime or wash), bulk</td></tr>
    <tr><td>Breath-actuated pMDI</td><td>Moderate</td><td>Low</td><td>Adults, older children</td><td>Fewer drugs available</td></tr>
    <tr><td>DPI (single or multi-dose)</td><td>Forceful and fast</td><td>Low</td><td>~6 years and older, adequate flow</td><td>Humidity; exhaling into device; low flow in severe disease</td></tr>
    <tr><td>Soft mist inhaler</td><td>Slow and deep</td><td>Moderate</td><td>Children (with spacer) and adults</td><td>Cartridge loading needs dexterity</td></tr>
    <tr><td>Nebuliser</td><td>Tidal</td><td>None</td><td>Any</td><td>Time, cost, maintenance, aerosol generation (infection control)</td></tr>
    </tbody></table></div>`,
    pearls: ["Clinicians, pharmacists and nurses should be able to demonstrate every device they prescribe (GINA)."] },

  { id: "dv-technique", module: "devices", source: "GINA 2026 + Supplementary", title: "Step-by-step technique and common errors",
    ref: "GINA 2026 Box 5-2 (updated 2026); device patient information",
    summary: "Use a device-specific checklist: ask the patient to show you, correct each error by physical demonstration, and recheck at every visit.",
    widget: "techcheck",
    keyPoints: [
      "Shake suspension pMDIs immediately before every actuation (GINA 2026 emphasis).",
      "One actuation per inhalation/breath-hold; with tidal breathing take 5–6 breaths per puff.",
      "Rinse and spit after ICS.",
      "Common errors: not exhaling first, inhaling too fast through a pMDI, too slowly through a DPI, not holding the breath, exhaling into the DPI."
    ],
    body: "", pearls: [] },

  /* ======================= EXACERBATIONS additions ======================= */
  { id: "ex-invest", module: "exacerbations", source: "GINA 2026 + Supplementary", title: "Investigations in acute asthma",
    ref: "GINA 2026 p.185–188; BTS/SIGN acute asthma",
    summary: "Most uncomplicated exacerbations need only pulse oximetry and PEF or FEV1. Further tests are for severe, deteriorating or atypical presentations.",
    keyPoints: [
      "Pulse oximetry in all; PEF/FEV1 in all except preschool or life-threatening presentations, before treatment and at 1 h.",
      "ABG: PEF/FEV1 <50% predicted, SpO₂ <92%, or not responding. A normal or rising PaCO₂ in a breathless patient signals fatigue and impending respiratory failure.",
      "Chest X-ray: not routine. Do it if pneumothorax, pneumonia, foreign body or other diagnosis is suspected, or if no response to treatment.",
      "Potassium (beta2-agonists and steroids lower it), glucose (steroids), lactate if SABA toxicity suspected, ECG in older patients or tachyarrhythmia."
    ],
    body: `
    <h4>Guideline comparison: acute severity and oxygen</h4>
    <div class="scroll"><table class="tbl"><thead><tr><th>Item</th><th>GINA 2026 (≥6 years)</th><th>BTS/SIGN (adults)</th></tr></thead><tbody>
    <tr><td>Oxygen</td><td>Give if SpO₂ &lt;92%; target 92–95%</td><td>Target 94–98% (BTS oxygen guideline)</td></tr>
    <tr><td>Severe / acute severe</td><td>Words only, RR &gt;30, SpO₂ &lt;92%, PEF &lt;50%, silent chest</td><td>PEF 33–50%, RR ≥25, HR ≥110, cannot complete sentences</td></tr>
    <tr><td>Life-threatening</td><td>Drowsy, confused, cyanosed, silent chest</td><td>PEF &lt;33%, SpO₂ &lt;92%, PaO₂ &lt;8 kPa, normal PaCO₂, silent chest, cyanosis, poor effort, arrhythmia, exhaustion, altered consciousness, hypotension</td></tr>
    <tr><td>Near-fatal</td><td>—</td><td>Raised PaCO₂ and/or need for mechanical ventilation</td></tr>
    <tr><td>Heart rate</td><td>Not used for grading in the 2026 flowcharts</td><td>HR ≥110 = acute severe</td></tr>
    </tbody></table></div>`,
    pearls: ["Tachycardia improves as bronchospasm resolves; rising heart rate despite treatment suggests SABA toxicity or another cause."] },

  { id: "ex-icu", module: "exacerbations", source: "Supplementary", title: "Life-threatening asthma: ICU and ventilation",
    ref: "GINA 2026 p.188 (NIV, sedation); critical care consensus",
    summary: "Escalate early. Intubation is a clinical decision; ventilation aims to limit dynamic hyperinflation with low minute ventilation, long expiratory time and permissive hypercapnia.",
    widget: "ventilation",
    keyPoints: [
      "ICU referral: severe exacerbation not improving, life-threatening features, rising PaCO₂, exhaustion, confusion, hypoxaemia despite oxygen.",
      "Intubation indications: respiratory or cardiac arrest, deteriorating consciousness, exhaustion, refractory hypoxaemia, progressive hypercapnia/acidosis despite maximal therapy.",
      "NIV: weak evidence (GINA); only with close monitoring in a critical care setting, never to delay intubation, avoid in agitated patients; sedation must not be used to make NIV tolerable.",
      "Ventilator: tidal volume 6–8 mL/kg predicted body weight, low rate (≈8–12/min), high inspiratory flow, I:E 1:3–1:5, plateau pressure <30 cmH₂O, monitor auto-PEEP by end-expiratory hold.",
      "Permissive hypercapnia is acceptable (pH ≥7.15–7.20) to avoid hyperinflation."
    ],
    body: `
    <h4>Dynamic hyperinflation and auto-PEEP</h4>
    <p>Incomplete exhalation before the next breath traps gas, raising intrinsic PEEP, plateau pressure and intrathoracic pressure. This reduces venous return (hypotension, PEA) and causes barotrauma (pneumothorax). Fix by lowering rate and tidal volume and lengthening expiratory time, not by adding bronchodilator alone.</p>
    <h4>Post-intubation hypotension</h4>
    <ol><li>Disconnect from the ventilator for 30–60 seconds to let trapped gas escape (apnoea test).</li><li>Exclude tension pneumothorax.</li><li>Give fluids; vasopressors if needed.</li><li>Reduce rate and tidal volume.</li></ol>
    <h4>Sedation and paralysis</h4>
    <ul><li>Ketamine is a useful induction agent (bronchodilating); propofol for maintenance.</li><li>Avoid prolonged neuromuscular blockade, especially with high-dose corticosteroids (critical illness myopathy).</li><li>Sedation outside intubation and ICU care must be avoided (GINA).</li></ul>
    <h4>Adjuncts</h4>
    <p>Continue inhaled bronchodilators via the circuit, systemic corticosteroids and IV magnesium. Rescue options in refractory cases (specialist ICU): IV beta2-agonist (with lactate and potassium monitoring), inhalational anaesthetics, ECMO for hypercapnic failure.</p>`,
    pearls: ["Predicted body weight: men 50 + 0.91 × (height cm − 152.4); women 45.5 + 0.91 × (height cm − 152.4)."] },

  { id: "ex-disposition", module: "exacerbations", source: "GINA 2026 + Supplementary", title: "Disposition: discharge, admission or ICU",
    ref: "GINA 2026 Box 9-5, p.187–190",
    summary: "Decide by response at 1 hour, not by status on arrival. Discharge only when stable on room air with a plan, ICS-containing treatment and early follow-up.",
    keyPoints: [
      "Discharge: mild criteria for ≥1–2 h after last SABA, SpO₂ ≥92% on air, PEF/FEV1 >70%, adequate home resources (GINA 2026).",
      "Admit: SpO₂ <92% on air, SABA needed more often than every 1–2 h, dyspnoea 4–6 h after systemic steroids, poor adherence or follow-up, red flags for death.",
      "ICU: life-threatening features, deteriorating despite treatment, rising PaCO₂, drowsiness, exhaustion, need for ventilatory support.",
      "Discharge bundle: ICS-containing treatment (MART from Step 4 for ≥12 y), finish OCS, technique check, written action plan, trigger review, refer if ≥1 severe exacerbation in 12 months, follow-up within 2–7 days."
    ],
    body: "", pearls: [] },

  /* ======================= SEVERE additions ======================= */
  { id: "sv-checklist", module: "severe", source: "GINA 2026", title: "Severe asthma clinic checklist",
    ref: "Box 8-2 to 8-5",
    summary: "A structured checklist for the difficult-to-treat/severe asthma clinic, from confirming the diagnosis to biologic review and multidisciplinary care.",
    widget: "severechecklist",
    keyPoints: [
      "Work through diagnosis, adherence, technique, exposures and comorbidities before labelling asthma severe.",
      "Phenotype with repeated biomarkers on the lowest steroid dose.",
      "Record the outcome of each step so the next review can build on it."
    ],
    body: "", pearls: [] },

  /* ======================= BIOLOGICS ======================= */
  { id: "bio-monographs", module: "biologics", source: "GINA 2026 + Supplementary", title: "Biologic monographs",
    ref: "GINA 2026 p.162–168; product labels (check local approval)",
    summary: "Mechanism, eligibility, biomarkers, dosing, safety, monitoring, evidence and stopping rules for each asthma biologic. Regulatory approvals and ages differ between countries; check local labelling and formulary.",
    widget: "biomono",
    keyPoints: [
      "Do not choose a biologic on a single biomarker: combine payer criteria, predictors, comorbidities, dosing frequency, route and patient preference (GINA Box 8-4).",
      "Treat helminth infection before starting any biologic.",
      "Avoid live vaccines during treatment with most biologics (follow product labels); do not give the first dose on the same day as a vaccine (GINA)."
    ],
    body: "", pearls: [] },

  { id: "bio-response", module: "biologics", source: "GINA 2026 + Supplementary", title: "Assessing response to a biologic",
    ref: "GINA 2026 Box 8-5, p.167–168",
    summary: "Review 3–4 months after starting (6 months for depemokimab) and then every 3–6 months. Judge exacerbations, OCS use, symptom control, lung function, quality of life, side-effects and patient satisfaction together.",
    widget: "bioresponse",
    keyPoints: [
      "Good response: reduce OCS first (with adrenal assessment), then other add-ons, then ICS-LABA after 3–6 months; do not stop ICS.",
      "Unclear response: extend the trial to 6–12 months.",
      "No response: stop the biologic, review the basics and phenotype, consider switching class.",
      "Withdrawal of a biologic: only after ≥12 months of good control on medium-dose ICS with no ongoing allergic trigger."
    ],
    body: `<p class="muted" style="font-size:.88rem">The response tool uses pragmatic thresholds (e.g. ≥50% fewer exacerbations or OCS dose, ACT +3, ACQ −0.5, AQLQ +0.5). These are common clinical and trial definitions, not a GINA scoring system.</p>`,
    pearls: [] },

  { id: "bio-select", module: "biologics", source: "GINA 2026", title: "Selecting between biologics",
    ref: "Box 8-4 (updated 2026), Box 8-6",
    summary: "Enter the patient's profile to compare which biologic classes fit, with predictors of response and Type 2 comorbidities that may favour one class.",
    widget: "biologics",
    keyPoints: ["GINA recommendation, regulatory approval, local formulary and payer criteria are separate questions: answer all four."],
    body: "", pearls: [] },

  /* ======================= ADD-ONS ======================= */
  { id: "ad-overview", module: "addons", source: "GINA 2026 + Supplementary", title: "Add-on treatments compared",
    ref: "GINA 2026 p.97–100, Box 8-3; product labels",
    summary: "Established add-ons (LAMA, LTRA, azithromycin, maintenance OCS) and specialist options (bronchial thermoplasty), with evidence, dosing and safety. Emerging agents are clearly marked.",
    widget: "addons",
    keyPoints: [
      "Ensure at least medium-dose ICS-LABA (ideally MART) before adding LAMA.",
      "Theophylline is not recommended in children and is rarely used in adults: weak efficacy, narrow therapeutic range, many interactions.",
      "Maintenance OCS is a last resort only, at the lowest dose, with bone, metabolic and adrenal monitoring."
    ],
    body: "", pearls: [] },

  /* ======================= OCS STEWARDSHIP ======================= */
  { id: "ocs-harm", module: "ocs", source: "GINA 2026 + Supplementary", title: "Why OCS stewardship matters",
    ref: "GINA 2026 Box 9-3, p.176–177; observational cohort data",
    summary: "Short courses save lives, but cumulative exposure causes dose-related harm. Even 4–5 lifetime courses increase the risk of diabetes, cataract, heart failure, osteoporosis and other outcomes (GINA). Every OCS course should trigger a treatment review.",
    widget: "ocsexposure",
    keyPoints: [
      "Cumulative exposure of about 0.5–1 g prednisolone-equivalent has been associated with increased adverse outcomes in observational studies; risk rises with dose.",
      "Short-term harms: sleep disturbance, appetite, reflux, mood change, sepsis, pneumonia, thromboembolism.",
      "Prevent the need: ICS-formoterol MART/AIR, treat modifiable risks, adherence, technique, action plans, referral for Type 2 biologics.",
      "Equivalent doses: prednisolone 5 mg = prednisone 5 mg = methylprednisolone 4 mg = dexamethasone 0.75 mg = hydrocortisone 20 mg."
    ],
    body: `
    <h4>Monitoring for patients with frequent or maintenance OCS</h4>
    <table class="tbl"><thead><tr><th>Domain</th><th>Check</th></tr></thead><tbody>
    <tr><td>Bone</td><td>DEXA; calcium and vitamin D; consider bisphosphonate per osteoporosis guidance (e.g. ≥3 months of ≥7.5 mg/day prednisolone)</td></tr>
    <tr><td>Metabolic</td><td>Weight, blood pressure, HbA1c or glucose, lipids</td></tr>
    <tr><td>Eyes</td><td>Cataract and glaucoma screening</td></tr>
    <tr><td>Adrenal</td><td>Morning cortisol when tapering towards physiological doses; steroid emergency card and sick-day rules</td></tr>
    <tr><td>Infection</td><td>Vaccinations; Strongyloides screening where relevant</td></tr>
    <tr><td>Mental health and sleep</td><td>Mood, insomnia</td></tr>
    </tbody></table>
    <h4>Tapering maintenance OCS (pragmatic approach)</h4>
    <p>Once asthma is controlled (often after starting a biologic), reduce by about 2.5–5 mg every 2–4 weeks to ~7.5 mg/day, then by 1 mg every 2–4 weeks. Around 5 mg/day check a morning cortisol before stopping; refer to endocrinology if adrenal insufficiency is suspected.</p>`,
    pearls: ["Count OCS in prescriptions and ED records, not only by patient recall."] },

  /* ======================= SPECIAL additions ======================= */
  { id: "sp-comorb-detail", module: "special", source: "GINA 2026 + Supplementary", title: "Comorbidities: effect, assessment, management",
    ref: "GINA 2026 Section 6, Section 8",
    summary: "How each comorbidity affects asthma control and treatment response, and what to do about it.",
    widget: "comorbid",
    keyPoints: ["Comorbidities are common in difficult-to-treat asthma and often explain poor control better than asthma itself."],
    body: "", pearls: [] },

  { id: "sp-pregnancy", module: "special", source: "GINA 2026 + Supplementary", title: "Pregnancy and postpartum",
    ref: "GINA 2026 p.134–135",
    summary: "Asthma control often changes in pregnancy (worse in about one-third). Uncontrolled asthma and exacerbations carry more risk to mother and baby than standard asthma medicines.",
    keyPoints: [
      "Continue ICS-containing treatment; do not step down ICS in pregnancy; review every 4–6 weeks.",
      "Exacerbations: treat promptly and fully, with OCS if indicated; keep SpO₂ adequate (fetal oxygenation).",
      "Risks of poor control: pre-eclampsia, preterm birth, low birth weight, perinatal mortality.",
      "Biologics: limited data; decide case by case (omalizumab has the most pregnancy registry data).",
      "Labour: continue usual medicines; monitor neonatal glucose after high-dose beta2-agonist in the 48 h before delivery; postpartum: review control, breastfeeding is compatible with standard asthma medicines; screen for postnatal depression."
    ],
    body: "", pearls: ["Do not perform bronchial provocation tests or ICS step-down to confirm diagnosis during pregnancy."] },

  { id: "sp-elderly-occ-eib", module: "special", source: "GINA 2026 + Supplementary", title: "Elderly, occupational asthma and EIB",
    ref: "GINA 2026 p.133–138",
    summary: "Older adults need attention to differentials, multimorbidity, drug interactions and devices; occupational asthma needs early objective confirmation and removal from exposure; EIB is usually a marker of poor control.",
    keyPoints: [
      "Elderly: consider heart failure and COPD; check for beta-blocker eye drops, NSAIDs; frailty, arthritis, cognition and low inspiratory flow affect device choice; higher risk of LABA cardiac effects and ICS-related osteoporosis/cataract.",
      "Occupational: ask every adult-onset patient whether symptoms improve away from work; serial PEF at and away from work (≥4 readings/day for ≥3 weeks); specific inhalation challenge in specialist centres; early removal from exposure improves outcome; consider legal/compensation implications.",
      "EIB: confirm with exercise or indirect challenge; regular ICS reduces EIB; ICS-formoterol as needed and before exercise; warm-up; breakthrough EIB suggests poor control."
    ],
    body: "", pearls: [] }
  ],


  learning: {
    flashcards: [
      { id: "cf1", m: "pathophys", q: "Which biologic acts upstream on an epithelial alarmin?", a: "Tezepelumab (anti-TSLP); it reduces exacerbations with or without Type 2 biomarkers.", ref: "p.165" },
      { id: "cf2", m: "pathophys", q: "What does FeNO mainly reflect?", a: "IL-13–driven epithelial iNOS activity (Type 2 airway inflammation); suppressed by ICS and smoking.", ref: "Appendix A" },
      { id: "cf3", m: "investigations", q: "Flow-volume loop in inducible laryngeal obstruction?", a: "Flattened (truncated) inspiratory limb with a normal expiratory limb; confirm with laryngoscopy during symptoms.", ref: "Supplementary" },
      { id: "cf4", m: "investigations", q: "ABPA laboratory pattern?", a: "Aspergillus-specific IgE (or skin test) positive plus total IgE ≥500 IU/mL, with Aspergillus IgG, eosinophilia or imaging features.", ref: "ISHAM-AWG" },
      { id: "cf5", m: "investigations", q: "When to screen for Strongyloides in asthma?", a: "Eosinophils ≥300/µL with possible exposure, before OCS escalation or biologics (risk of hyperinfection).", ref: "Box 8-2 Stage 5" },
      { id: "cf6", m: "devices", q: "Main inhalation difference between pMDI and DPI?", a: "pMDI: slow, deep inhalation with coordination. DPI: forceful, fast inhalation from the start.", ref: "Box 5-2" },
      { id: "cf7", m: "biologics", q: "Dupilumab eosinophil caveat?", a: "Not suggested if blood eosinophils >1500/µL; transient eosinophilia occurs in 4–13%.", ref: "p.165" },
      { id: "cf8", m: "biologics", q: "Benralizumab mechanism?", a: "Anti-IL-5Rα; afucosylated antibody causing NK-cell–mediated (ADCC) eosinophil depletion.", ref: "Supplementary" },
      { id: "cf9", m: "addons", q: "Azithromycin add-on dose and checks?", a: "500 mg three times weekly for ≥6 months; sputum for NTM and ECG for QTc before and at 1 month.", ref: "p.99" },
      { id: "cf10", m: "ocs", q: "Prednisolone 5 mg equals how much dexamethasone?", a: "0.75 mg (methylprednisolone 4 mg; hydrocortisone 20 mg).", ref: "Supplementary" },
      { id: "cf11", m: "exacerbations", q: "Tidal volume target in ventilated acute asthma?", a: "6–8 mL/kg predicted body weight, low rate, long expiratory time, plateau <30 cmH₂O; accept hypercapnia.", ref: "Supplementary" },
      { id: "cf12", m: "exacerbations", q: "First step for hypotension soon after intubating an asthmatic?", a: "Disconnect from the ventilator for 30–60 s to release trapped gas; exclude tension pneumothorax; give fluids.", ref: "Supplementary" }
    ],
    mcqs: [
      { id: "cq1", m: "investigations", q: "A patient with 'asthma' has inspiratory stridor, throat tightness triggered by perfume and a flattened inspiratory loop. Best next test?", o: ["Methacholine challenge", "Laryngoscopy during symptoms or provocation", "HRCT chest", "Sputum eosinophils"], a: 1, e: "These features suggest inducible laryngeal obstruction; laryngoscopy during symptoms confirms it.", ref: "Supplementary" },
      { id: "cq2", m: "biologics", q: "Severe asthma with eosinophils 1800/µL, neuropathy and sinus disease. Which step comes first?", o: ["Start dupilumab", "Evaluate for EGPA (ANCA, organ involvement)", "Increase ICS", "Start omalizumab"], a: 1, e: "Eosinophils ≥1500/µL with systemic features suggest EGPA; investigate before any biologic.", ref: "Box 8-2" },
      { id: "cq3", m: "biologics", q: "Severe asthma with CRSwNP and moderate–severe atopic dermatitis; eos 420/µL, FeNO 48 ppb. Which class covers all three conditions?", o: ["Anti-IL-5", "Anti-IL-4Rα", "Anti-IgE", "LAMA"], a: 1, e: "Dupilumab is effective in asthma, CRSwNP and atopic dermatitis, and high FeNO/eos predict response.", ref: "Box 8-4, 8-6" },
      { id: "cq4", m: "ocs", q: "Which cumulative OCS exposure has been linked to increased adverse outcomes in observational studies?", o: ["About 0.5–1 g prednisolone-equivalent", "Only >10 g", "Only maintenance use", "No threshold"], a: 0, e: "Harm rises from roughly 0.5–1 g cumulative; GINA notes even 4–5 lifetime courses increase risk.", ref: "Box 9-3" },
      { id: "cq5", m: "devices", q: "An 80-year-old with arthritis and low inspiratory flow needs ICS-formoterol. Best device approach?", o: ["DPI", "pMDI with spacer, single device type, carer involvement", "Nebuliser for all medicines", "pMDI without spacer"], a: 1, e: "Low flow makes DPIs unreliable; a spacer removes coordination needs.", ref: "Box 5-1" },
      { id: "cq6", m: "exacerbations", q: "A ventilated asthmatic has plateau pressure 34 cmH₂O and auto-PEEP 15 cmH₂O. Best change?", o: ["Increase rate", "Reduce rate and tidal volume to lengthen expiration", "Increase external PEEP to 15", "Increase tidal volume"], a: 1, e: "Dynamic hyperinflation is reduced by lowering minute ventilation and lengthening expiratory time.", ref: "Supplementary" },
      { id: "cq7", m: "pathophys", q: "Which phenotype is most likely: onset at 45, eosinophils 650/µL, nasal polyps, respiratory reactions to ibuprofen?", o: ["Early-onset allergic", "AERD", "Obesity-associated", "Paucigranulocytic"], a: 1, e: "Asthma + CRSwNP + NSAID reactions = aspirin-exacerbated respiratory disease.", ref: "Supplementary" },
      { id: "cq8", m: "addons", q: "Which add-on needs a warning about neuropsychiatric effects?", o: ["Tiotropium", "Montelukast", "Azithromycin", "Tezepelumab"], a: 1, e: "LTRA carries neuropsychiatric warnings; GINA advises warning patients.", ref: "Box 4-6" }
    ]
  },

  /* ======================= DATA FOR NEW WIDGETS ======================= */
  data: {
    ddx: [
      { name: "COPD", clues: "Age >40, smoking/biomass, persistent dyspnoea, sputum", tests: "Post-BD FEV1/FVC <0.70 or <LLN, DLCO ↓, CT emphysema", differs: "Persistent rather than variable airflow limitation; limited BDR", coexist: true },
      { name: "Asthma + COPD", clues: "Features of both (Box 7-2)", tests: "Spirometry, DLCO, eos, FeNO", differs: "Treat as asthma; ICS essential", coexist: true },
      { name: "Bronchiectasis", clues: "Daily productive cough, recurrent infections, haemoptysis, crackles", tests: "HRCT (airway:artery >1, lack of tapering), sputum culture", differs: "Sputum-dominant; crackles not wheeze", coexist: true },
      { name: "Inducible laryngeal obstruction / vocal cord dysfunction", clues: "Throat tightness, inspiratory stridor, sudden onset/offset, triggers: scents, exercise, reflux, voice change", tests: "Laryngoscopy during symptoms or provocation (CLE test), flattened inspiratory loop", differs: "Inspiratory symptoms; normal SpO₂; poor response to bronchodilators", coexist: true },
      { name: "Upper airway cough syndrome", clues: "Nasal drip, throat clearing, rhinitis", tests: "ENT exam, response to intranasal steroid", differs: "No variable airflow limitation", coexist: true },
      { name: "GERD", clues: "Heartburn, regurgitation, cough after meals or lying down", tests: "PPI trial if symptomatic; pH-impedance", differs: "Treat only symptomatic reflux", coexist: true },
      { name: "Heart failure", clues: "Orthopnoea, PND, oedema, crackles, age", tests: "BNP/NT-proBNP, ECG, echocardiography, CXR", differs: "'Cardiac asthma' wheeze responds to diuretics", coexist: false },
      { name: "Interstitial lung disease", clues: "Progressive dyspnoea, dry cough, fine crackles, clubbing", tests: "Restrictive spirometry, low DLCO, HRCT", differs: "Crackles, restriction, low DLCO", coexist: false },
      { name: "Pulmonary embolism", clues: "Sudden dyspnoea, pleuritic pain, tachycardia, risk factors", tests: "Wells/PERC, D-dimer, CTPA", differs: "Hypoxaemia without wheeze or with clear chest", coexist: false },
      { name: "Chronic rhinosinusitis", clues: "Nasal obstruction, discharge, loss of smell, facial pain", tests: "Nasal endoscopy, CT sinuses", differs: "Comorbidity rather than alternative; worsens control", coexist: true },
      { name: "Dysfunctional breathing", clues: "Sighing, air hunger, dizziness, paraesthesia, normal tests", tests: "Nijmegen questionnaire, CPET, breathing pattern assessment", differs: "Symptoms out of proportion to lung function", coexist: true },
      { name: "Obstructive sleep apnoea", clues: "Snoring, witnessed apnoeas, daytime sleepiness, obesity", tests: "STOP-BANG, sleep study", differs: "Nocturnal symptoms without airflow variability", coexist: true },
      { name: "Central airway obstruction", clues: "Monophonic or fixed wheeze, stridor, no response to bronchodilators", tests: "Flow-volume loop (flattening), CT, bronchoscopy", differs: "Fixed, localised", coexist: false },
      { name: "Eosinophilic bronchitis (non-asthmatic)", clues: "Chronic cough, no wheeze or breathlessness", tests: "Sputum eos >3%, normal spirometry and AHR", differs: "No AHR; responds to ICS", coexist: false },
      { name: "Foreign body", clues: "Sudden onset, choking episode, unilateral wheeze (children)", tests: "Expiratory CXR, bronchoscopy", differs: "Localised", coexist: false },
      { name: "EGPA", clues: "Adult-onset severe asthma, eosinophilia ≥1500, neuropathy, sinus disease, skin, cardiac", tests: "Eos, ANCA, troponin, echo, urinalysis, biopsy", differs: "Systemic vasculitis", coexist: true }
    ],
    investigations: [
      { name: "Full blood count with differential", when: "All severe asthma; before biologics", find: "Eosinophil count", meaning: "≥150 on high-dose ICS = Type 2; ≥300 biologic threshold; ≥1500 EGPA/HES", act: "Phenotype; screen for parasites if ≥300" },
      { name: "Total IgE", when: "Allergic phenotype, ABPA suspicion, omalizumab", find: "IU/mL", meaning: "Dosing for omalizumab; ≥500 IU/mL supports ABPA", act: "Omalizumab dose table; ABPA workup" },
      { name: "Specific IgE / skin prick tests", when: "All new asthma with possible allergic triggers", find: "Sensitisation to HDM, pets, pollen, moulds, occupational agents", meaning: "Relevant only if consistent with history", act: "Avoidance advice, SLIT, anti-IgE eligibility" },
      { name: "Aspergillus-specific IgE and IgG", when: "Severe asthma, high eos/IgE, bronchiectasis, mucus plugs", find: "Positive A. fumigatus IgE ± IgG", meaning: "Aspergillus sensitisation or ABPA (with IgE ≥500 and imaging/eos)", act: "OCS or itraconazole for ABPA; biologic consideration" },
      { name: "ANCA and vasculitis screen", when: "Eos ≥1500/µL, neuropathy, systemic features", find: "MPO-ANCA (~30–40% of EGPA)", meaning: "Negative ANCA does not exclude EGPA", act: "Urgent rheumatology/vasculitis referral" },
      { name: "Strongyloides serology / stool", when: "Eos ≥300 with travel or residence in endemic areas, before OCS/biologics", find: "Positive serology", meaning: "Risk of hyperinfection with steroids", act: "Ivermectin before immunomodulation" },
      { name: "Chest X-ray", when: "Atypical features, acute complications", find: "Hyperinflation, infiltrates, pneumothorax", meaning: "Excludes other diagnoses", act: "Further imaging if abnormal" },
      { name: "HRCT chest", when: "Difficult-to-treat or severe asthma", find: "Bronchiectasis, mucus plugs, air trapping, emphysema", meaning: "Comorbidity, phenotype, alternative diagnosis", act: "Airway clearance, ABPA workup, biologic choice" },
      { name: "CT sinuses", when: "CRS symptoms, polyps, severe asthma", find: "Mucosal thickening, polyps", meaning: "Type 2 comorbidity", act: "ENT referral; favours dupilumab, anti-IL-5, omalizumab, tezepelumab" },
      { name: "ECG / echocardiography", when: "Older patients, palpitations, suspected HF or EGPA", find: "Arrhythmia, LV dysfunction, myocarditis", meaning: "Cardiac differential or complication", act: "Cardiology input; review beta-agonist dose" },
      { name: "Sleep study", when: "Snoring, apnoeas, obesity, nocturnal symptoms", find: "AHI", meaning: "OSA worsens control", act: "CPAP (reduced moderate exacerbations in one study)" },
      { name: "Laryngoscopy", when: "Inspiratory symptoms, poor response", find: "Paradoxical vocal fold adduction", meaning: "ILO/VCD", act: "Speech and language therapy" },
      { name: "Bronchoscopy", when: "Selected severe cases", find: "Tracheobronchomalacia, foreign body, tumour, infection", meaning: "Alternative or added diagnosis", act: "Targeted treatment" },
      { name: "DEXA, HbA1c, morning cortisol", when: "Frequent or maintenance OCS", find: "Osteoporosis, diabetes, adrenal suppression", meaning: "OCS harm", act: "Bone protection, glucose management, steroid card" }
    ],
    devices: [
      { id: "pmdi", name: "pMDI (no spacer)", steps: ["Remove cap and check mouthpiece", "Shake the inhaler immediately before the puff", "Breathe out fully, away from the inhaler", "Seal lips around mouthpiece", "Start a slow, deep breath in and press the canister once", "Continue breathing in slowly for 3–5 seconds", "Hold breath for up to 10 seconds", "Wait ~30–60 s, shake again before any further puff", "Rinse and spit after ICS"], errors: ["Not shaking before each puff", "Pressing before or after breathing in", "Inhaling too fast", "No breath-hold", "Multiple puffs in one breath"] },
      { id: "spacer", name: "pMDI + spacer / valved holding chamber", steps: ["Check spacer is clean and assembled; prime or pre-wash if new", "Shake the inhaler and fit it into the spacer", "Breathe out fully", "Seal lips around mouthpiece (or mask firmly on face)", "Press once", "Either one slow deep breath and hold up to 10 s, or 5–6 tidal breaths", "Repeat for each puff, shaking before every actuation", "Rinse and spit after ICS"], errors: ["Several puffs into the spacer at once", "Delay between pressing and breathing", "Poor mask seal", "Not shaking before each puff", "Spacer not washed or primed (static)"] },
      { id: "dpi", name: "Dry powder inhaler", steps: ["Open/load the dose as per device (keep upright if required)", "Breathe out fully, away from the device", "Seal lips around mouthpiece", "Breathe in forcefully and deeply from the start", "Hold breath for up to 10 seconds", "Breathe out away from the device", "Close device; rinse and spit after ICS"], errors: ["Exhaling into the device", "Slow or weak inhalation", "Not loading the dose correctly", "Tilting the device after loading", "Storing in humid places"] },
      { id: "smi", name: "Soft mist inhaler", steps: ["Hold upright with cap closed; turn base half a turn until it clicks", "Open cap", "Breathe out fully", "Seal lips around mouthpiece without covering air vents", "Start a slow deep breath and press the dose button", "Continue breathing in slowly", "Hold breath for up to 10 seconds", "Repeat for the second puff if prescribed"], errors: ["Not turning base fully", "Covering air vents", "Fast inhalation", "Cartridge not inserted fully (first use)"] },
      { id: "bai", name: "Breath-actuated pMDI", steps: ["Shake if required by the device", "Prime/open the device (lever or cap)", "Breathe out fully", "Seal lips around mouthpiece", "Breathe in steadily and deeply; device fires automatically", "Hold breath up to 10 seconds", "Close the device"], errors: ["Stopping inhalation when it fires", "Blocking air inlet", "Not resetting lever"] },
      { id: "neb", name: "Nebuliser", steps: ["Wash hands; fill chamber with prescribed dose", "Connect mouthpiece (preferred) or well-fitting mask", "Sit upright, breathe normally through the mouth", "Continue until the chamber sputters", "Clean and dry parts after each use"], errors: ["Loose mask (lost dose to eyes)", "Not cleaning (infection)", "Using as routine maintenance when a handheld device would do"] }
    ],
    biologics: [
      { name: "Omalizumab", cls: "Anti-IgE", mech: "Binds free IgE (Cε3), preventing binding to FcεRI on mast cells and basophils; downregulates FcεRI expression.",
        indications: "Severe allergic asthma; CRSwNP; chronic spontaneous urticaria; IgE-mediated food allergy (some regions).",
        age: "≥6 years", eligibility: "Sensitisation to perennial aeroallergen; total IgE and weight within dosing range; exacerbations despite high-dose ICS-LABA.",
        eos: "Not required", feno: "Higher FeNO and eos were associated with better response in some analyses, but not required", ige: "Total IgE ~30–1500 IU/mL (range depends on region) for dosing",
        dose: "75–600 mg SC every 2 or 4 weeks by weight and baseline IgE (dosing table)", admin: "SC; home self-administration possible after initial doses",
        caution: "Anaphylaxis (≈0.1–0.2%), often delayed; observe after early doses; contains polysorbate; treat helminths first.",
        ae: "Injection-site reactions, headache; rare anaphylaxis.",
        monitor: "Exacerbations, ACT/ACQ, OCS; IgE cannot be used to monitor once on treatment.",
        evidence: "≈44% fewer severe exacerbations (RCT meta-analysis); 59% in observational studies; modest QoL gain.",
        stop: "Stop if no meaningful reduction in exacerbations/OCS or control after ≥4 months (up to 12 if unclear)." },
      { name: "Mepolizumab", cls: "Anti-IL-5", mech: "Neutralises IL-5, reducing eosinophil production, maturation and survival.",
        indications: "Severe eosinophilic asthma; CRSwNP; EGPA; hypereosinophilic syndrome; eosinophilic COPD (some regions).",
        age: "≥6 years (40 mg 6–11 y)", eligibility: "Severe exacerbations in last year; blood eos above local threshold (trials ≥150 at screening or ≥300 in past year).",
        eos: "≥150–300/µL depending on payer", feno: "Not a predictor", ige: "Not required",
        dose: "100 mg SC every 4 weeks (40 mg every 4 weeks age 6–11); 300 mg q4w for EGPA/HES", admin: "SC; autoinjector/prefilled pen for home use",
        caution: "Herpes zoster reported — consider zoster vaccination; treat helminths first.",
        ae: "Headache, injection-site reactions, back pain.",
        monitor: "Exacerbations, OCS dose, ACT/ACQ, FEV1; eosinophils fall markedly.",
        evidence: "≈47–54% fewer severe exacerbations; ≈50% OCS dose reduction (SIRIUS).",
        stop: "Stop/switch if no response at ≥4 months (6–12 if unclear)." },
      { name: "Reslizumab", cls: "Anti-IL-5", mech: "Neutralises IL-5.",
        indications: "Severe eosinophilic asthma.", age: "≥18 years", eligibility: "Severe exacerbations; eos ≥400/µL (label in some regions).",
        eos: "≥400/µL (trial/label)", feno: "Not a predictor", ige: "Not required",
        dose: "3 mg/kg IV every 4 weeks", admin: "IV infusion over 20–50 min in clinic",
        caution: "Anaphylaxis (boxed warning in some regions) — observe after infusion; CPK elevation, myalgia.",
        ae: "Oropharyngeal pain, myalgia, ↑ CPK.", monitor: "Exacerbations, OCS, control.",
        evidence: "≈50% fewer exacerbations in eosinophilic asthma.", stop: "As for other anti-IL-5." },
      { name: "Benralizumab", cls: "Anti-IL-5Rα", mech: "Binds IL-5 receptor α; afucosylated antibody causes NK-cell–mediated (ADCC) eosinophil and basophil depletion.",
        indications: "Severe eosinophilic asthma; EGPA.", age: "≥12 years in GINA (≥6 years in some regions)", eligibility: "Severe exacerbations; eos ≥150–300/µL.",
        eos: "≥150–300/µL", feno: "Not a predictor", ige: "Not required",
        dose: "30 mg SC every 4 weeks for 3 doses, then every 8 weeks", admin: "SC; autoinjector",
        caution: "Treat helminths first; near-complete eosinophil depletion.", ae: "Headache, pharyngitis, injection-site reactions.",
        monitor: "Exacerbations, OCS (ZONDA OCS-sparing), control.", evidence: "≈47–51% fewer exacerbations; median 75% OCS reduction in ZONDA.",
        stop: "Stop/switch if no response at ≥4 months. Switching to depemokimab after benralizumab is not suggested (GINA)." },
      { name: "Depemokimab", cls: "Anti-IL-5 (long-acting)", mech: "High-affinity, extended half-life anti-IL-5.",
        indications: "Severe eosinophilic asthma; CRSwNP (≥18 y).", age: "≥12 years", eligibility: "Severe exacerbations; eosinophilic phenotype.",
        eos: "≥150–300/µL", feno: "Not a predictor", ige: "Not required",
        dose: "100 mg SC every 26 weeks", admin: "SC twice yearly", caution: "New agent (2026 GINA); limited long-term data.",
        ae: "Injection-site reactions, nasopharyngitis.", monitor: "Assess response at 6 months.",
        evidence: "48–58% fewer severe exacerbations (SWIFT-1/2).", stop: "Consider switch after good mepolizumab response; not after benralizumab." },
      { name: "Dupilumab", cls: "Anti-IL-4Rα", mech: "Blocks IL-4Rα, inhibiting both IL-4 and IL-13 signalling.",
        indications: "Moderate–severe Type 2 asthma; OCS-dependent asthma; atopic dermatitis; CRSwNP; eosinophilic oesophagitis; prurigo nodularis; COPD with eosinophilia; CSU.",
        age: "≥6 years", eligibility: "Severe exacerbations with eos ≥150 and ≤1500/µL or FeNO ≥25 ppb, or maintenance OCS.",
        eos: "150–1500/µL (avoid >1500)", feno: "FeNO ≥25 ppb strong predictor", ige: "Not required",
        dose: "≥12 y: 400 mg load then 200 mg every 2 weeks, or 600 mg then 300 mg every 2 weeks (OCS-dependent, AD, CRSwNP); 6–11 y weight-based", admin: "SC; prefilled pen",
        caution: "Transient eosinophilia (4–13%); rare EGPA unmasking during OCS taper; avoid live vaccines; treat helminths first.",
        ae: "Injection-site reactions, conjunctivitis (more in AD), transient eosinophilia.",
        monitor: "Eosinophils if symptoms of vasculitis; exacerbations, FEV1, OCS.",
        evidence: "≈56% fewer severe exacerbations; FEV1 improvement; 50% greater OCS reduction vs placebo (VENTURE).",
        stop: "Stop/switch if no response at ≥4 months." },
      { name: "Tezepelumab", cls: "Anti-TSLP", mech: "Blocks the epithelial alarmin TSLP, upstream of Type 2 and some non-Type 2 pathways.",
        indications: "Severe asthma regardless of phenotype; CRSwNP (some regions).", age: "≥12 years",
        eligibility: "Severe exacerbations; no biomarker requirement (greater benefit with higher eos and FeNO).",
        eos: "No minimum", feno: "Higher FeNO predicts larger benefit", ige: "Not required",
        dose: "210 mg SC every 4 weeks", admin: "SC; prefilled pen",
        caution: "Treat helminths first; no OCS-sparing effect shown (SOURCE).",
        ae: "Pharyngitis, arthralgia, back pain, injection-site reactions.",
        monitor: "Exacerbations, control, FEV1.", evidence: "30–70% fewer severe exacerbations (NAVIGATOR), including low-eos patients.",
        stop: "Stop/switch if no response at ≥4 months." }
    ],
    addons: [
      { name: "LAMA (tiotropium; triple inhalers)", status: "Established", indication: "Step 5 (or Step 4 alternative) when uncontrolled on at least medium-dose ICS-LABA", evidence: "Small FEV1 gain; ~16–17% fewer severe exacerbations", dose: "Tiotropium soft mist 2.5 mcg × 2 puffs once daily (≥6 y); triples per product (budesonide-formoterol-glycopyrronium ≥12 y; mometasone-indacaterol-glycopyrronium ≥18 y)", safety: "Dry mouth, urinary retention, caution in narrow-angle glaucoma", monitor: "Response at 3 months", limits: "Far less effective than biologics for exacerbations; never without ICS" },
      { name: "LTRA (montelukast)", status: "Established (less effective)", indication: "Alternative/add-on controller; EIB; AERD; rhinitis", evidence: "Less effective than ICS; modest add-on effect", dose: "10 mg adults/≥15 y; 5 mg 6–14 y; 4 mg 2–5 y, once daily", safety: "Neuropsychiatric adverse effects (boxed warning in some regions): sleep disturbance, agitation, depression, suicidality", monitor: "Ask about mood and sleep", limits: "Warn patients and families before prescribing (GINA)" },
      { name: "Theophylline (slow-release)", status: "Not recommended (children); rarely in adults", indication: "Very selected adults when other options unavailable", evidence: "Weak", dose: "Low dose, guided by levels (target ~5–15 mg/L)", safety: "Nausea, arrhythmia, seizures; many interactions (macrolides, quinolones, smoking changes)", monitor: "Serum levels", limits: "Narrow therapeutic window" },
      { name: "Azithromycin", status: "Established (specialist, adults)", indication: "Persistent symptomatic asthma on medium/high-dose ICS-LABA, eosinophilic or non-eosinophilic", evidence: "Fewer exacerbations (AMAZES)", dose: "500 mg three times weekly (≥6 months)", safety: "QTc prolongation, hearing loss, GI upset, antimicrobial resistance", monitor: "Sputum for NTM before start; ECG before and at 1 month", limits: "Population resistance" },
      { name: "Maintenance OCS", status: "Last resort", indication: "Severe asthma uncontrolled despite all other options, or biologics unavailable", evidence: "Effective but toxic", dose: "Lowest effective dose; alternate-day may reduce some effects", safety: "Diabetes, osteoporosis, cataract, adrenal suppression, infections, weight gain", monitor: "See OCS stewardship module", limits: "Cumulative harm" },
      { name: "Bronchial thermoplasty", status: "Specialist / registry only", indication: "Selected adults with severe asthma despite optimal therapy", evidence: "Some reduction in exacerbations; placebo response large; long-term data limited", dose: "Three bronchoscopic sessions", safety: "Short-term worsening, hospitalisation after procedure", monitor: "Registry follow-up", limits: "GINA: only in the context of an independent systematic registry or clinical study" },
      { name: "Anti-IL-33 / ST2 antibodies (e.g. itepekimab, astegolimab, tozorakimab)", status: "Emerging (trials)", indication: "Investigational in asthma and COPD", evidence: "Phase 2/3 data; mixed results", dose: "—", safety: "—", monitor: "—", limits: "Not approved for asthma" },
      { name: "Inhaled anti-TSLP fragments, oral eosinophil-lowering agents, inhaled JAK inhibitors", status: "Emerging (trials)", indication: "Investigational", evidence: "Early-phase", dose: "—", safety: "—", monitor: "—", limits: "Not approved; for awareness only" }
    ],
    comorbid: [
      { name: "Allergic rhinitis", effect: "Worse control, more exacerbations", assess: "Nasal symptoms, sensitisation", manage: "Intranasal corticosteroid; allergen immunotherapy" },
      { name: "Chronic rhinosinusitis ± nasal polyps", effect: "Linked to severe eosinophilic asthma, exacerbations", assess: "SNOT-22, endoscopy, CT sinuses", manage: "Saline, nasal steroids, surgery; biologics active in both (dupilumab, mepolizumab, omalizumab, tezepelumab, depemokimab)" },
      { name: "AERD", effect: "Severe asthma, polyps, NSAID reactions", assess: "History; aspirin challenge in specialist centres", manage: "Avoid COX-1 inhibitors; LTRA; desensitisation; biologics" },
      { name: "Atopic dermatitis", effect: "Marker of Type 2 disease", assess: "Skin examination", manage: "Favours dupilumab if a biologic is needed" },
      { name: "Food allergy", effect: "Risk factor for asthma death; asthma increases fatal anaphylaxis risk", assess: "Confirmed history, specialist testing", manage: "Avoidance, epinephrine (IM/intranasal), anaphylaxis plan; omalizumab is approved for IgE food allergy in some regions" },
      { name: "ABPA", effect: "Severe asthma, bronchiectasis, mucus plugging", assess: "A. fumigatus IgE/IgG, total IgE, eos, HRCT", manage: "OCS (e.g. 4-month taper); itraconazole for relapse (beware interaction with salmeterol/vilanterol/budesonide); biologics" },
      { name: "EGPA", effect: "Adult-onset severe asthma with systemic vasculitis", assess: "Eos ≥1500, ANCA, organ screening", manage: "Specialist vasculitis care; mepolizumab 300 mg or benralizumab" },
      { name: "GERD", effect: "Cough, symptoms; PPIs do not improve asthma without reflux symptoms", assess: "Symptoms", manage: "Treat symptomatic reflux only" },
      { name: "Obesity", effect: "More symptoms, lower ICS response, misdiagnosis", assess: "BMI, objective confirmation of asthma", manage: "Weight loss, exercise, bariatric surgery; GLP-1 RA observational benefit" },
      { name: "Obstructive sleep apnoea", effect: "Nocturnal symptoms, poor control", assess: "STOP-BANG, sleep study", manage: "CPAP" },
      { name: "Anxiety and depression", effect: "Worse control and adherence; symptom over-reporting", assess: "HADS/PHQ-9/GAD-7", manage: "Psychological support, CBT, treat" },
      { name: "Inducible laryngeal obstruction / VCD", effect: "Mimics severe asthma, leads to over-treatment", assess: "Laryngoscopy during symptoms", manage: "Speech and language therapy, treat triggers" },
      { name: "Bronchiectasis", effect: "Infections, exacerbations, sputum", assess: "HRCT, sputum culture", manage: "Airway clearance, treat infection, consider macrolide" },
      { name: "COPD", effect: "Persistent airflow limitation, worse outcomes", assess: "Spirometry, DLCO, CT", manage: "Treat as asthma (ICS essential) plus LABA ± LAMA" },
      { name: "Cardiovascular disease", effect: "Differential and comorbidity; beta-blockers", assess: "ECG, echo, BNP", manage: "Cardioselective beta-blockers allowed case by case; monitor SABA/LABA load" },
      { name: "Dysfunctional breathing", effect: "Symptoms despite control", assess: "Nijmegen, breathing pattern", manage: "Breathing retraining (physiotherapy)" }
    ],
    severeChecklist: [
      { g: "Diagnosis", items: ["Variable airflow documented (BDR, PEF, challenge)", "Alternative diagnoses considered (ILO, HF, COPD, bronchiectasis)", "Flow-volume loop reviewed"] },
      { g: "Adherence & technique", items: ["Pharmacy refill / dose counter check", "FeNO suppression test or observed therapy if FeNO high", "Inhaler technique checked and corrected", "Single device type where possible", "Medication access and cost addressed"] },
      { g: "Exposures", items: ["Smoking / vaping status and cessation", "Occupational exposures reviewed", "Home allergens, mould, pollution", "Beta-blockers, NSAIDs, ACE inhibitors reviewed"] },
      { g: "Comorbidities", items: ["Obesity", "GERD", "Chronic rhinosinusitis / nasal polyps", "OSA", "Anxiety / depression", "ILO / dysfunctional breathing", "Bronchiectasis", "ABPA screened", "EGPA considered if eos ≥1500"] },
      { g: "Investigations", items: ["Blood eosinophils (repeat up to 3×)", "FeNO", "Total and specific IgE / SPT", "Induced sputum (if available)", "Spirometry ± lung volumes, DLCO", "HRCT chest", "CT sinuses", "Strongyloides serology if indicated", "DEXA / glucose / cortisol if OCS exposure"] },
      { g: "Treatment", items: ["High-dose ICS-LABA or medium/high MART optimised", "LAMA trial", "Biologic assessed (eligibility, payer)", "Azithromycin considered", "OCS minimised", "Written action plan", "Vaccinations up to date"] },
      { g: "Care", items: ["Multidisciplinary review (nurse, physio, psychology, ENT, dietitian)", "Shared-care letter to GP", "Review date set"] }
    ]
  }
});
