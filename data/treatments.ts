export type TreatmentCategory =
  | "skin"
  | "respiratory"
  | "digestive"
  | "joint"
  | "children"
  | "womens"
  | "lifestyle";

export type Treatment = {
  slug: string;
  name: string;
  category: TreatmentCategory;
  icon: string;
  shortDesc: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  homeopathyApproach: string;
  doctorNote: string;
  relatedConditions: string[];
  metaTitle: string;
  metaDescription: string;
};

export const categoryLabels: Record<TreatmentCategory, string> = {
  skin: "Skin",
  respiratory: "Respiratory",
  digestive: "Digestive",
  joint: "Joint & Bone",
  children: "Children",
  womens: "Women's Health",
  lifestyle: "Lifestyle",
};

export const treatments: Treatment[] = [
  // ===== SKIN (5) =====
  {
    slug: "psoriasis",
    name: "Psoriasis",
    category: "skin",
    icon: "🫧",
    shortDesc: "Chronic skin condition with red, scaly patches",
    overview:
      "Psoriasis is a chronic autoimmune condition that causes the rapid buildup of skin cells, leading to scaling on the skin's surface. It can cause inflammation, redness, and pain. The patches sometimes crack and bleed. Psoriasis is the result of a sped-up skin production process, where skin cells grow deep in the skin and slowly rise to the surface. Eventually, they fall off. The typical life cycle of a skin cell is one month. In people with psoriasis, this production process may occur in just a few days, leading to a buildup of cells on the surface.",
    symptoms: [
      "Red patches covered with thick, silvery scales",
      "Dry, cracked skin that may bleed or itch",
      "Itching, burning, or soreness",
      "Thickened, pitted, or ridged nails",
      "Swollen and stiff joints",
      "Patches that range from small spots to major eruptions",
    ],
    causes: [
      "Immune system dysfunction (T-cell overactivity)",
      "Genetic predisposition and family history",
      "Stress and emotional triggers",
      "Skin injuries, infections, or sunburn",
      "Certain medications (lithium, beta-blockers)",
      "Cold weather and dry climate conditions",
    ],
    homeopathyApproach:
      "Homeopathy treats psoriasis by addressing the root immune imbalance rather than just suppressing symptoms. Remedies are selected based on the individual's complete health picture — physical symptoms, emotional state, and constitutional type. This approach aims to regulate the overactive immune response, reduce inflammation naturally, and promote healthy skin cell turnover. Common remedies include Arsenicum Album, Graphites, Sulphur, and Petroleum, chosen based on individual case analysis.",
    doctorNote:
      "Most patients with psoriasis see significant improvement within 3–6 months of consistent homeopathic treatment. I focus on understanding your unique triggers — whether stress, diet, or environmental — and create a personalized plan. Many of my patients have been able to reduce their dependency on steroid creams significantly.",
    relatedConditions: ["eczema", "vitiligo", "urticaria"],
    metaTitle: "Psoriasis Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural homeopathic treatment for psoriasis in Pune. Dr. Sharda Tawale offers safe, effective remedies for chronic skin conditions without side effects.",
  },
  {
    slug: "eczema",
    name: "Eczema",
    category: "skin",
    icon: "🫧",
    shortDesc: "Itchy, inflamed skin with recurring flare-ups",
    overview:
      "Eczema (atopic dermatitis) is a condition that makes your skin red, inflamed, and itchy. It is common in children but can occur at any age. Eczema is long-lasting and tends to flare periodically. It may be accompanied by asthma or hay fever. The condition is linked to a gene variation that affects the skin's ability to provide adequate protection against bacteria, irritants, and allergens.",
    symptoms: [
      "Dry, sensitive, and inflamed skin",
      "Intense itching, especially at night",
      "Red to brownish-gray patches on hands, feet, and joints",
      "Small, raised bumps that may leak fluid when scratched",
      "Thickened, cracked, or scaly skin",
      "Raw, swollen skin from scratching",
    ],
    causes: [
      "Genetic factors and family history of allergies",
      "Immune system overreaction to irritants",
      "Environmental triggers (dust, pollen, pet dander)",
      "Harsh soaps, detergents, and chemicals",
      "Stress and hormonal changes",
      "Food allergies (dairy, eggs, nuts, wheat)",
    ],
    homeopathyApproach:
      "Homeopathic treatment for eczema focuses on strengthening the body's immune response and reducing hypersensitivity. Remedies are chosen based on the type of eczema, location of patches, modalities (what makes it better or worse), and the patient's overall constitution. Treatment aims to reduce flare-up frequency and intensity while healing the skin naturally.",
    doctorNote:
      "Children respond particularly well to homeopathic eczema treatment. I have seen remarkable improvements in young patients within 2–4 months. The key is identifying and addressing the underlying allergic tendency rather than just treating the skin surface.",
    relatedConditions: ["psoriasis", "urticaria", "acne"],
    metaTitle: "Eczema Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Effective homeopathic treatment for eczema in Pune. Dr. Sharda Tawale treats atopic dermatitis naturally with personalized remedies for lasting relief.",
  },
  {
    slug: "acne",
    name: "Acne",
    category: "skin",
    icon: "🫧",
    shortDesc: "Persistent acne, pimples, and hormonal breakouts",
    overview:
      "Acne is a skin condition that occurs when hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads, or pimples. Acne is most common among teenagers, though it affects people of all ages. Effective treatments are available, but acne can be persistent. The pimples and bumps heal slowly, and when one begins to go away, others seem to crop up.",
    symptoms: [
      "Whiteheads (closed plugged pores)",
      "Blackheads (open plugged pores)",
      "Small red, tender bumps (papules)",
      "Pimples with pus at tips (pustules)",
      "Large, solid, painful lumps under skin (nodules)",
      "Painful, pus-filled lumps under skin (cystic lesions)",
    ],
    causes: [
      "Excess oil (sebum) production",
      "Hair follicles clogged by oil and dead skin cells",
      "Hormonal changes (puberty, menstruation, PCOS)",
      "Bacteria (Cutibacterium acnes)",
      "Stress and poor diet (high glycemic foods)",
      "Certain medications (corticosteroids, lithium)",
    ],
    homeopathyApproach:
      "Homeopathy addresses acne by treating hormonal imbalances and regulating sebum production from within. Unlike topical treatments that only work on the surface, homeopathic remedies help correct the internal factors causing acne — whether hormonal, digestive, or stress-related. Remedies like Berberis Aquifolium, Pulsatilla, and Hepar Sulph are commonly used based on individual case analysis.",
    doctorNote:
      "Teenage and hormonal acne responds excellently to homeopathy. I focus on the whole picture — your hormonal health, digestive system, and stress levels. Most patients see a visible reduction in new breakouts within 6–8 weeks, with the skin gradually clearing over 3–4 months.",
    relatedConditions: ["eczema", "pcod-pcos", "hair-fall"],
    metaTitle: "Acne Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Treat acne naturally with homeopathy in Pune. Dr. Sharda Tawale offers hormonal acne treatment, cystic acne remedies, and clear skin solutions.",
  },
  {
    slug: "vitiligo",
    name: "Vitiligo",
    category: "skin",
    icon: "🫧",
    shortDesc: "White patches on skin due to pigment loss",
    overview:
      "Vitiligo is a condition in which the skin loses its pigment cells (melanocytes), causing discolored patches. It can affect the skin on any part of the body, as well as hair and the inside of the mouth. The condition occurs when pigment-producing cells die or stop functioning. Vitiligo affects people of all skin types, but it may be more noticeable in people with darker skin.",
    symptoms: [
      "Patchy loss of skin color, usually first on hands, face, and body openings",
      "Premature whitening of hair on scalp, eyelashes, eyebrows, or beard",
      "Loss of color in the tissues inside the mouth and nose",
      "Patches that spread over time",
      "Sensitivity to sunlight in affected areas",
      "Emotional distress and social anxiety",
    ],
    causes: [
      "Autoimmune disorder attacking melanocytes",
      "Family history and genetic predisposition",
      "Trigger events (sunburn, stress, chemical exposure)",
      "Neural factors affecting melanocyte function",
      "Oxidative stress and free radical damage",
      "Associated conditions (thyroid disease, diabetes)",
    ],
    homeopathyApproach:
      "Homeopathic treatment for vitiligo aims to halt the spread of white patches and stimulate re-pigmentation by correcting the underlying autoimmune dysfunction. Treatment is highly individualized and considers the pattern of patches, speed of progression, family history, and emotional impact. Remedies help regulate immune function and promote melanocyte regeneration.",
    doctorNote:
      "Vitiligo requires patience and consistent treatment. Early-stage vitiligo responds best — I have seen re-pigmentation begin within 4–6 months in many cases. The key is starting treatment early and maintaining consistency. I also work with patients on managing the emotional aspects of the condition.",
    relatedConditions: ["psoriasis", "eczema", "thyroid-disorders"],
    metaTitle: "Vitiligo Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural vitiligo treatment with homeopathy in Pune. Dr. Sharda Tawale helps halt white patch spread and promote re-pigmentation safely.",
  },
  {
    slug: "urticaria",
    name: "Urticaria (Hives)",
    category: "skin",
    icon: "🫧",
    shortDesc: "Itchy welts and hives triggered by allergies",
    overview:
      "Urticaria, commonly known as hives, is characterized by red, itchy welts that result from a skin reaction. The welts vary in size and appear and fade repeatedly as the reaction runs its course. Chronic urticaria occurs when welts persist for more than six weeks and recur frequently over months or years. The condition is often frustrating because it frequently resists treatment.",
    symptoms: [
      "Batches of red or skin-colored welts (wheals)",
      "Intense itching that may be severe",
      "Welts that vary in size, change shape, and fade repeatedly",
      "Swelling of lips, eyelids, and throat (angioedema)",
      "Tendency to flare with heat, exercise, or stress",
      "Episodes lasting hours to days, recurring over weeks",
    ],
    causes: [
      "Allergic reactions (food, medications, insect stings)",
      "Infections (viral, bacterial, parasitic)",
      "Physical triggers (cold, heat, pressure, sun)",
      "Stress and emotional triggers",
      "Autoimmune conditions",
      "Unknown causes (chronic idiopathic urticaria)",
    ],
    homeopathyApproach:
      "Homeopathy excels in treating chronic urticaria by addressing the underlying allergic tendency and immune hypersensitivity. Treatment reduces the frequency, duration, and severity of episodes while working on the root cause. Remedies are selected based on trigger factors, pattern of eruptions, and individual constitution.",
    doctorNote:
      "Chronic urticaria can be incredibly frustrating — I understand the impact it has on daily life. In my experience, homeopathic treatment can significantly reduce episode frequency within 2–3 months and often achieve long-term remission within 6–8 months.",
    relatedConditions: ["eczema", "psoriasis", "allergic-rhinitis"],
    metaTitle: "Urticaria Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for chronic urticaria and hives in Pune. Dr. Sharda Tawale provides natural relief from recurring itchy welts and allergic skin reactions.",
  },

  // ===== RESPIRATORY (4) =====
  {
    slug: "asthma",
    name: "Asthma",
    category: "respiratory",
    icon: "🫁",
    shortDesc: "Chronic breathing difficulty with wheezing",
    overview:
      "Asthma is a chronic condition in which the airways narrow and swell, producing extra mucus. This makes breathing difficult and triggers coughing, a whistling sound (wheezing) when you breathe out, and shortness of breath. For some people, asthma is a minor nuisance. For others, it can be a major problem that interferes with daily activities and may lead to a life-threatening asthma attack.",
    symptoms: [
      "Shortness of breath and difficulty breathing",
      "Chest tightness or pain",
      "Wheezing when exhaling (common in children)",
      "Trouble sleeping caused by breathing problems",
      "Coughing attacks worsened by cold or flu",
      "Exercise-induced breathing difficulty",
    ],
    causes: [
      "Airborne allergens (pollen, dust mites, pet dander, mold)",
      "Respiratory infections and common cold",
      "Physical activity (exercise-induced asthma)",
      "Cold air and weather changes",
      "Air pollutants and irritants (smoke, fumes)",
      "Family history of asthma or allergies",
    ],
    homeopathyApproach:
      "Homeopathic treatment for asthma aims to reduce the frequency and severity of attacks by strengthening respiratory immunity and reducing airway hypersensitivity. The approach addresses both the acute symptoms and the chronic tendency, working to reduce dependence on rescue inhalers over time. Treatment is complementary and does not require stopping existing medications abruptly.",
    doctorNote:
      "Asthma management through homeopathy has been one of my most rewarding areas of practice. Many patients experience a significant reduction in attack frequency within 3–4 months. I always work alongside your existing treatment plan — the goal is gradual improvement, not abrupt changes.",
    relatedConditions: ["allergic-rhinitis", "sinusitis", "tonsillitis"],
    metaTitle: "Asthma Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural asthma treatment with homeopathy in Pune. Dr. Sharda Tawale helps reduce asthma attacks and breathing difficulty with safe, effective remedies.",
  },
  {
    slug: "allergic-rhinitis",
    name: "Allergic Rhinitis",
    category: "respiratory",
    icon: "🫁",
    shortDesc: "Sneezing, runny nose, and nasal allergies",
    overview:
      "Allergic rhinitis is an allergic response to specific allergens that causes cold-like symptoms such as sneezing, itchiness, nasal congestion, and runny nose. Unlike a cold, allergic rhinitis is not caused by a virus but by an immune response to indoor or outdoor allergens. It can significantly affect quality of life, work productivity, and sleep quality.",
    symptoms: [
      "Persistent sneezing, especially morning episodes",
      "Runny nose with thin, watery discharge",
      "Nasal congestion and stuffiness",
      "Itchy nose, eyes, and roof of mouth",
      "Watery, red, or swollen eyes",
      "Reduced sense of smell and taste",
    ],
    causes: [
      "Pollen from trees, grass, and weeds (seasonal)",
      "Dust mites, pet dander, and cockroach droppings (perennial)",
      "Mold spores in damp environments",
      "Genetic predisposition to allergies",
      "Environmental pollution and irritants",
      "Occupational exposure to chemicals or dust",
    ],
    homeopathyApproach:
      "Homeopathy treats allergic rhinitis by desensitizing the immune system to allergens and reducing the hypersensitive response. Unlike antihistamines that merely suppress symptoms, homeopathic remedies work to correct the underlying allergic tendency. Treatment aims for long-term reduction in sensitivity rather than temporary relief.",
    doctorNote:
      "Allergic rhinitis is one of the conditions where homeopathy truly shines. I have seen patients who suffered daily sneezing episodes for years find lasting relief within 2–3 months of treatment. The improvement is often dramatic and sustained.",
    relatedConditions: ["asthma", "sinusitis", "urticaria"],
    metaTitle: "Allergic Rhinitis Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for allergic rhinitis and nasal allergies in Pune. Get natural, lasting relief from sneezing, runny nose, and congestion.",
  },
  {
    slug: "sinusitis",
    name: "Sinusitis",
    category: "respiratory",
    icon: "🫁",
    shortDesc: "Chronic sinus infections and congestion",
    overview:
      "Sinusitis is inflammation or swelling of the tissue lining the sinuses. When sinuses become blocked and filled with fluid, germs can grow and cause an infection. Chronic sinusitis lasts 12 weeks or longer despite treatment. The condition causes nasal congestion, facial pain, and thick nasal discharge, significantly impacting quality of life.",
    symptoms: [
      "Facial pain and pressure around eyes, cheeks, and forehead",
      "Thick, yellow or green nasal discharge",
      "Nasal congestion causing difficulty breathing",
      "Reduced sense of smell and taste",
      "Headache and ear pressure",
      "Fatigue, cough, and bad breath",
    ],
    causes: [
      "Viral infections (common cold) leading to bacterial infection",
      "Allergies causing sinus inflammation",
      "Nasal polyps blocking sinus passages",
      "Deviated nasal septum",
      "Weakened immune system",
      "Environmental pollutants and smoke",
    ],
    homeopathyApproach:
      "Homeopathic treatment for sinusitis addresses both acute infections and chronic tendency. Remedies help reduce sinus inflammation, improve drainage, and strengthen local immunity to prevent recurrence. The approach is particularly effective for patients with recurring sinusitis who have not found lasting relief with antibiotics.",
    doctorNote:
      "Chronic sinusitis patients often come to me after multiple courses of antibiotics. Homeopathy offers a different path — by strengthening sinus immunity and reducing inflammation naturally, many patients experience a dramatic reduction in infection frequency. Results typically begin within 4–6 weeks.",
    relatedConditions: ["allergic-rhinitis", "asthma", "tonsillitis"],
    metaTitle: "Sinusitis Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural sinusitis treatment in Pune with homeopathy. Dr. Sharda Tawale treats chronic sinus infections, congestion, and facial pain effectively.",
  },
  {
    slug: "tonsillitis",
    name: "Tonsillitis",
    category: "respiratory",
    icon: "🫁",
    shortDesc: "Recurring tonsil infections and throat pain",
    overview:
      "Tonsillitis is inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat. Signs and symptoms include swollen tonsils, sore throat, difficulty swallowing, and tender lymph nodes. Recurrent tonsillitis is particularly common in children and often leads to consideration of tonsillectomy (surgical removal).",
    symptoms: [
      "Red, swollen tonsils with white or yellow coating",
      "Sore throat and painful swallowing",
      "Fever, headache, and body aches",
      "Swollen, tender neck lymph nodes",
      "Bad breath and muffled voice",
      "Stomach pain (especially in younger children)",
    ],
    causes: [
      "Viral infections (most common cause)",
      "Bacterial infections (Streptococcus pyogenes)",
      "Frequent exposure to germs (school-age children)",
      "Weakened immune system",
      "Close contact with infected individuals",
      "Poor oral hygiene",
    ],
    homeopathyApproach:
      "Homeopathy treats recurrent tonsillitis by strengthening the immune system and reducing the susceptibility to throat infections. Treatment aims to reduce the frequency and severity of episodes, often eliminating the need for surgical removal. Remedies are selected based on the nature of the infection, associated symptoms, and the child's overall constitution.",
    doctorNote:
      "Parents often bring their children to me when tonsillectomy has been recommended. In many cases, homeopathic treatment significantly reduces infection frequency, helping children avoid surgery. I have seen children go from monthly episodes to perhaps one or two mild infections per year.",
    relatedConditions: ["sinusitis", "allergic-rhinitis", "recurrent-colds"],
    metaTitle: "Tonsillitis Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Avoid tonsil surgery with homeopathic treatment in Pune. Dr. Sharda Tawale treats recurrent tonsillitis in children and adults naturally.",
  },

  // ===== DIGESTIVE (4) =====
  {
    slug: "ibs",
    name: "IBS (Irritable Bowel Syndrome)",
    category: "digestive",
    icon: "🫃",
    shortDesc: "Chronic abdominal pain with irregular bowel habits",
    overview:
      "Irritable Bowel Syndrome (IBS) is a common disorder that affects the large intestine. It causes cramping, abdominal pain, bloating, gas, diarrhea, and constipation. IBS is a chronic condition that needs long-term management. While IBS doesn't cause changes in bowel tissue or increase the risk of colorectal cancer, the symptoms can be significant enough to affect daily life and emotional well-being.",
    symptoms: [
      "Cramping and abdominal pain relieved by bowel movement",
      "Bloating and excess gas",
      "Alternating diarrhea and constipation",
      "Mucus in stool",
      "Feeling of incomplete evacuation",
      "Symptoms triggered by meals or stress",
    ],
    causes: [
      "Gut-brain axis dysfunction",
      "Abnormal muscle contractions in the intestine",
      "Nervous system abnormalities",
      "Post-infectious inflammation",
      "Stress and anxiety",
      "Food sensitivities (dairy, gluten, FODMAPs)",
    ],
    homeopathyApproach:
      "Homeopathy addresses IBS holistically by treating the gut-brain connection, reducing intestinal hypersensitivity, and regulating bowel motility. The treatment is individualized based on whether symptoms are predominantly diarrhea, constipation, or mixed type. Emotional factors are also addressed since stress plays a major role in IBS.",
    doctorNote:
      "IBS is often dismissed as 'just stress,' but the suffering is very real. I take a comprehensive approach, addressing both the physical symptoms and the emotional triggers. Most patients notice a significant improvement in symptoms within 6–8 weeks of treatment.",
    relatedConditions: ["gastritis", "constipation", "piles-fissure"],
    metaTitle: "IBS Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural IBS treatment with homeopathy in Pune. Dr. Sharda Tawale provides effective relief from irritable bowel syndrome symptoms.",
  },
  {
    slug: "gastritis",
    name: "Gastritis",
    category: "digestive",
    icon: "🫃",
    shortDesc: "Stomach inflammation, acidity, and digestive discomfort",
    overview:
      "Gastritis is a group of conditions that cause inflammation of the stomach lining. It can occur suddenly (acute) or gradually (chronic). Gastritis can lead to stomach ulcers and an increased risk of stomach cancer if left untreated. The condition is often associated with a burning sensation in the upper abdomen and is commonly linked to H. pylori infection, NSAID use, or excessive alcohol consumption.",
    symptoms: [
      "Burning pain or gnawing ache in the upper abdomen",
      "Nausea, vomiting, and loss of appetite",
      "Bloating and feeling of fullness after eating",
      "Acid reflux and heartburn",
      "Belching and hiccups",
      "Dark stools (indicating stomach bleeding)",
    ],
    causes: [
      "H. pylori bacterial infection",
      "Regular use of NSAIDs (ibuprofen, aspirin)",
      "Excessive alcohol consumption",
      "Stress and irregular eating habits",
      "Spicy and acidic food consumption",
      "Autoimmune gastritis",
    ],
    homeopathyApproach:
      "Homeopathic treatment for gastritis addresses the root cause of stomach inflammation, whether infectious, stress-related, or dietary. Remedies help heal the stomach lining, reduce acid production naturally, and restore healthy digestive function without the rebound effects associated with antacids and PPIs.",
    doctorNote:
      "Many gastritis patients come to me after years of antacid dependency. Homeopathy helps break this cycle by healing the stomach lining from within. Combined with simple dietary guidance, most patients experience significant relief within 4–6 weeks.",
    relatedConditions: ["ibs", "constipation", "piles-fissure"],
    metaTitle: "Gastritis Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for gastritis and acidity in Pune. Natural remedies for stomach inflammation, heartburn, and digestive issues.",
  },
  {
    slug: "constipation",
    name: "Constipation",
    category: "digestive",
    icon: "🫃",
    shortDesc: "Chronic constipation and irregular bowel movements",
    overview:
      "Chronic constipation is infrequent bowel movements or difficult passage of stools that persists for several weeks or longer. It is generally described as having fewer than three bowel movements per week. Though occasional constipation is common, chronic constipation can interfere with daily life and lead to straining, hemorrhoids, and other complications.",
    symptoms: [
      "Fewer than three bowel movements per week",
      "Hard, dry, or lumpy stools",
      "Straining during bowel movements",
      "Feeling of incomplete evacuation",
      "Abdominal bloating and discomfort",
      "Need for manual intervention to empty rectum",
    ],
    causes: [
      "Low fiber diet and inadequate water intake",
      "Sedentary lifestyle and lack of exercise",
      "Ignoring the urge to have a bowel movement",
      "Medications (opioids, antidepressants, iron supplements)",
      "Hormonal changes (pregnancy, thyroid disorders)",
      "Pelvic floor muscle dysfunction",
    ],
    homeopathyApproach:
      "Homeopathy treats chronic constipation by restoring natural bowel motility without creating laxative dependency. Remedies stimulate the gut's natural peristaltic action and address underlying causes such as hormonal imbalances, stress, or dietary issues. The goal is to establish regular, comfortable bowel habits naturally.",
    doctorNote:
      "Laxative dependency is a common trap with constipation. Homeopathic treatment helps restore your body's natural rhythm. I combine remedies with practical dietary and lifestyle advice. Most patients achieve regular movements within 3–4 weeks of starting treatment.",
    relatedConditions: ["ibs", "piles-fissure", "gastritis"],
    metaTitle: "Constipation Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural treatment for chronic constipation in Pune. Homeopathic remedies that restore regular bowel movements without laxative dependency.",
  },
  {
    slug: "piles-fissure",
    name: "Piles & Fissure",
    category: "digestive",
    icon: "🫃",
    shortDesc: "Hemorrhoids and anal fissures causing pain and bleeding",
    overview:
      "Piles (hemorrhoids) are swollen veins in the lower rectum and anus, similar to varicose veins. Anal fissures are small tears in the lining of the anus. Both conditions cause pain, bleeding during bowel movements, and significant discomfort. They are extremely common and often occur together, particularly in people with chronic constipation or straining.",
    symptoms: [
      "Painless bleeding during bowel movements",
      "Itching and irritation in the anal region",
      "Pain and discomfort during and after passing stools",
      "Swelling and lumps around the anus",
      "Sharp, burning pain with fissures",
      "Mucus discharge after bowel movements",
    ],
    causes: [
      "Chronic constipation and straining",
      "Prolonged sitting, especially on the toilet",
      "Low fiber diet and dehydration",
      "Pregnancy and childbirth",
      "Obesity and sedentary lifestyle",
      "Heavy lifting and increased abdominal pressure",
    ],
    homeopathyApproach:
      "Homeopathy offers effective non-surgical treatment for piles and fissures by reducing venous congestion, promoting healing of fissures, and addressing the root cause (usually constipation). Treatment reduces pain, bleeding, and swelling while promoting long-term resolution. Many patients avoid surgery through timely homeopathic intervention.",
    doctorNote:
      "Piles and fissures cause significant suffering that patients often tolerate silently. Homeopathic treatment can resolve early to moderate cases completely and significantly improve advanced cases. I encourage patients not to wait — early treatment yields the best results.",
    relatedConditions: ["constipation", "ibs", "gastritis"],
    metaTitle: "Piles & Fissure Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Non-surgical homeopathic treatment for piles and fissures in Pune. Dr. Sharda Tawale provides natural relief from hemorrhoids and anal fissures.",
  },

  // ===== JOINT & BONE (4) =====
  {
    slug: "arthritis",
    name: "Arthritis",
    category: "joint",
    icon: "🦴",
    shortDesc: "Joint pain, stiffness, and inflammation",
    overview:
      "Arthritis is inflammation of one or more joints, causing pain and stiffness that can worsen with age. The most common types are osteoarthritis and rheumatoid arthritis. Osteoarthritis causes cartilage breakdown, while rheumatoid arthritis is an autoimmune disorder. Both types cause significant pain, reduced mobility, and decreased quality of life.",
    symptoms: [
      "Joint pain and tenderness",
      "Stiffness, especially in the morning or after inactivity",
      "Swelling and redness around joints",
      "Decreased range of motion",
      "Joint deformity in advanced cases",
      "Fatigue and general malaise (rheumatoid)",
    ],
    causes: [
      "Cartilage wear and tear (osteoarthritis)",
      "Autoimmune attack on joint lining (rheumatoid)",
      "Age-related degeneration",
      "Joint injuries and trauma",
      "Obesity putting excess stress on joints",
      "Genetic predisposition",
    ],
    homeopathyApproach:
      "Homeopathic treatment for arthritis aims to reduce inflammation, relieve pain, and slow disease progression naturally. For rheumatoid arthritis, treatment addresses the autoimmune component. Remedies are selected based on the type of arthritis, affected joints, modalities, and the patient's constitutional type.",
    doctorNote:
      "Arthritis treatment with homeopathy has been transformative for many of my patients. While it may not reverse structural damage, it significantly reduces pain and inflammation, improves mobility, and slows progression. Patients often reduce their dependence on painkillers within months.",
    relatedConditions: ["back-pain", "sciatica", "gout"],
    metaTitle: "Arthritis Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural arthritis treatment with homeopathy in Pune. Effective relief from joint pain, stiffness, and inflammation by Dr. Sharda Tawale.",
  },
  {
    slug: "back-pain",
    name: "Back Pain",
    category: "joint",
    icon: "🦴",
    shortDesc: "Chronic back pain and spinal discomfort",
    overview:
      "Back pain is one of the most common reasons people seek medical help or miss work. It can range from a dull, constant ache to a sudden, sharp, debilitating pain. Most back pain gradually improves with home treatment, but chronic back pain lasting 12 weeks or longer can be persistent and require a comprehensive treatment approach.",
    symptoms: [
      "Persistent aching or stiffness along the spine",
      "Sharp, localized pain in the neck, upper, or lower back",
      "Pain radiating from the lower back to the buttocks and legs",
      "Inability to stand straight without pain",
      "Decreased range of motion and flexibility",
      "Muscle spasms and tightness",
    ],
    causes: [
      "Muscle or ligament strain from heavy lifting",
      "Herniated or bulging discs",
      "Degenerative disc disease (aging)",
      "Poor posture and prolonged sitting",
      "Arthritis and spinal stenosis",
      "Osteoporosis-related compression fractures",
    ],
    homeopathyApproach:
      "Homeopathic treatment addresses the root cause of back pain — whether muscular, structural, or inflammatory. Remedies reduce pain, muscle spasm, and inflammation while promoting tissue healing. Treatment is particularly effective for chronic back pain that hasn't responded well to conventional painkillers.",
    doctorNote:
      "Back pain often has multiple contributing factors — poor posture, stress, and structural issues all play a role. I take a comprehensive approach, combining homeopathic remedies with practical advice on posture, exercises, and lifestyle modifications. Many patients experience significant relief within 3–4 weeks.",
    relatedConditions: ["sciatica", "arthritis", "gout"],
    metaTitle: "Back Pain Homeopathic Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural back pain treatment with homeopathy in Pune. Effective relief from chronic back pain, disc problems, and spinal issues.",
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    category: "joint",
    icon: "🦴",
    shortDesc: "Nerve pain radiating from lower back to legs",
    overview:
      "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from the lower back through the hips and buttocks and down each leg. Typically, sciatica affects only one side of the body. It most commonly occurs when a herniated disc, bone spur, or spinal stenosis compresses part of the nerve, causing inflammation, pain, and often numbness in the affected leg.",
    symptoms: [
      "Pain radiating from lower back to buttock and down the leg",
      "Sharp, burning, or shooting pain in the leg",
      "Numbness or tingling in the affected leg or foot",
      "Weakness in the affected leg or foot",
      "Pain worsening with prolonged sitting",
      "Difficulty standing up or walking",
    ],
    causes: [
      "Herniated or slipped disc pressing on nerve",
      "Spinal stenosis (narrowing of spinal canal)",
      "Piriformis syndrome (muscle compression of nerve)",
      "Degenerative disc disease",
      "Spinal injuries or tumors",
      "Prolonged sitting and sedentary lifestyle",
    ],
    homeopathyApproach:
      "Homeopathic treatment for sciatica targets nerve inflammation and compression symptoms. Remedies help reduce nerve irritation, muscle spasm around the sciatic nerve, and associated pain. Treatment is particularly beneficial for patients who want to avoid long-term NSAID use or consider surgery.",
    doctorNote:
      "Sciatica can be debilitating, but many cases respond well to homeopathic treatment combined with gentle exercises. I have seen patients who were scheduled for surgery experience significant improvement, sometimes enough to postpone or cancel the procedure. Early intervention gives the best outcomes.",
    relatedConditions: ["back-pain", "arthritis", "gout"],
    metaTitle: "Sciatica Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic sciatica treatment in Pune. Natural relief from sciatic nerve pain, leg numbness, and lower back pain by Dr. Sharda Tawale.",
  },
  {
    slug: "gout",
    name: "Gout",
    category: "joint",
    icon: "🦴",
    shortDesc: "Sudden, severe joint pain from uric acid buildup",
    overview:
      "Gout is a complex form of arthritis characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in joints, often at the base of the big toe. It occurs when urate crystals accumulate in your joint, causing inflammation. Urate crystals form when you have high levels of uric acid in your blood. Gout attacks can happen suddenly, often waking you up in the middle of the night.",
    symptoms: [
      "Intense joint pain, especially in the big toe",
      "Lingering discomfort after acute pain subsides",
      "Inflammation, redness, and warmth in the affected joint",
      "Limited range of motion in the affected joint",
      "Swelling and tenderness",
      "Attacks often occurring at night",
    ],
    causes: [
      "High uric acid levels in the blood (hyperuricemia)",
      "Diet rich in purines (red meat, organ meats, seafood)",
      "Excessive alcohol consumption (especially beer)",
      "Obesity and metabolic syndrome",
      "Kidney disease or reduced uric acid excretion",
      "Medications (diuretics, low-dose aspirin)",
    ],
    homeopathyApproach:
      "Homeopathic treatment for gout addresses both acute attacks and the chronic uric acid imbalance. Acute remedies provide rapid pain relief, while constitutional treatment helps regulate uric acid metabolism and prevent future attacks. Dietary guidance is an integral part of the treatment plan.",
    doctorNote:
      "Gout attacks are excruciatingly painful, but they are also very treatable. Homeopathic treatment combined with dietary modifications can significantly reduce attack frequency and severity. Many patients achieve stable uric acid levels within 3–4 months of consistent treatment.",
    relatedConditions: ["arthritis", "back-pain", "diabetes-management"],
    metaTitle: "Gout Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural gout treatment with homeopathy in Pune. Reduce uric acid levels and prevent painful gout attacks with Dr. Sharda Tawale's holistic approach.",
  },

  // ===== CHILDREN (4) =====
  {
    slug: "bedwetting",
    name: "Bedwetting",
    category: "children",
    icon: "👶",
    shortDesc: "Involuntary urination during sleep in children",
    overview:
      "Bedwetting (nocturnal enuresis) is involuntary urination during sleep in children aged 5 and older. While most children outgrow bedwetting on their own, it can be a source of embarrassment and anxiety for both children and parents. Primary bedwetting (never achieved dryness) is the most common type, while secondary bedwetting (resuming after being dry) may indicate underlying issues.",
    symptoms: [
      "Involuntary urination during sleep",
      "Wetting the bed at least twice a week for 3+ months",
      "Deep sleep patterns difficult to wake from",
      "Emotional distress and low self-esteem",
      "Avoidance of sleepovers and social activities",
      "Daytime wetting in some cases",
    ],
    causes: [
      "Delayed maturation of bladder control",
      "Small bladder capacity",
      "Inability to recognize a full bladder during sleep",
      "Hormonal factors (low antidiuretic hormone at night)",
      "Family history of bedwetting",
      "Stress, anxiety, or emotional upheaval",
    ],
    homeopathyApproach:
      "Homeopathic treatment for bedwetting is gentle, safe, and particularly effective in children. Remedies help mature the bladder-brain connection, increase functional bladder capacity, and address any emotional factors contributing to the problem. Treatment is completely non-invasive and builds the child's confidence.",
    doctorNote:
      "Bedwetting is more common than parents realize, and it is never the child's fault. I create a supportive, shame-free treatment environment. Most children show significant improvement within 4–8 weeks of homeopathic treatment, with complete resolution in 3–4 months for many cases.",
    relatedConditions: ["recurrent-colds", "adhd", "growth-issues"],
    metaTitle: "Bedwetting Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for bedwetting in children in Pune. Safe, natural remedies to help your child achieve dry nights confidently.",
  },
  {
    slug: "recurrent-colds",
    name: "Recurrent Colds & Infections",
    category: "children",
    icon: "👶",
    shortDesc: "Frequent colds, coughs, and infections in children",
    overview:
      "Some children seem to catch every cold and infection going around. Recurrent respiratory infections — more than 6–8 upper respiratory infections per year — can indicate an underdeveloped or weakened immune system. These frequent illnesses disrupt schooling, cause parental anxiety, and often lead to repeated antibiotic courses that further compromise immunity.",
    symptoms: [
      "Frequent cold and cough episodes (monthly or more)",
      "Recurring ear infections (otitis media)",
      "Persistent nasal congestion and discharge",
      "Recurrent fever episodes",
      "Poor appetite and weight gain",
      "Frequent school absences due to illness",
    ],
    causes: [
      "Immature immune system in young children",
      "Exposure to pathogens in school/daycare settings",
      "Allergic tendencies (atopy)",
      "Nutritional deficiencies",
      "Passive smoking exposure",
      "Overuse of antibiotics weakening natural immunity",
    ],
    homeopathyApproach:
      "Homeopathic treatment strengthens the child's immune system naturally, reducing susceptibility to infections. Constitutional treatment addresses the underlying immune weakness, while acute remedies help manage individual episodes. The goal is to reduce infection frequency, duration, and severity over time.",
    doctorNote:
      "Children caught in the cycle of repeated infections and antibiotics benefit enormously from homeopathy. I focus on building their natural immunity. Parents typically notice a significant reduction in infection frequency within 2–3 months — children are healthier, happier, and miss less school.",
    relatedConditions: ["tonsillitis", "bedwetting", "growth-issues"],
    metaTitle: "Recurrent Infections Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Boost your child's immunity with homeopathy in Pune. Dr. Sharda Tawale treats recurrent colds, coughs, and infections naturally.",
  },
  {
    slug: "adhd",
    name: "ADHD",
    category: "children",
    icon: "👶",
    shortDesc: "Attention deficit, hyperactivity, and focus challenges",
    overview:
      "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity that interferes with functioning and development. It affects academic performance, social relationships, and family dynamics. While ADHD is often diagnosed in childhood, it can persist into adolescence and adulthood.",
    symptoms: [
      "Difficulty sustaining attention in tasks or play",
      "Frequently not following through on instructions",
      "Difficulty organizing tasks and activities",
      "Fidgeting, squirming, and inability to sit still",
      "Excessive talking and interrupting others",
      "Acting without thinking and difficulty waiting turns",
    ],
    causes: [
      "Genetic factors and family history",
      "Brain structure and neurotransmitter differences",
      "Premature birth and low birth weight",
      "Prenatal exposure to alcohol or tobacco",
      "Environmental toxins (lead exposure)",
      "Brain injuries",
    ],
    homeopathyApproach:
      "Homeopathic treatment for ADHD focuses on improving attention, reducing hyperactivity, and supporting emotional regulation through gentle, individualized remedies. Treatment considers the child's complete behavioral profile, temperament, fears, and preferences. Homeopathy works to balance the underlying neurological function without the side effects associated with stimulant medications.",
    doctorNote:
      "ADHD affects the whole family, and I understand the challenges parents face. Homeopathic treatment can be used alongside behavioral therapy for comprehensive support. Many parents report improvements in focus, behavior, and academic performance within 2–3 months of treatment.",
    relatedConditions: ["bedwetting", "growth-issues", "recurrent-colds"],
    metaTitle: "ADHD Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural ADHD treatment for children in Pune. Dr. Sharda Tawale offers homeopathic remedies to improve focus, attention, and behavior safely.",
  },
  {
    slug: "growth-issues",
    name: "Growth Issues",
    category: "children",
    icon: "👶",
    shortDesc: "Slow growth, poor appetite, and developmental concerns",
    overview:
      "Growth issues in children encompass delayed physical growth, poor weight gain, short stature, and developmental delays. While growth patterns vary among children, consistently falling below growth percentile charts may indicate nutritional deficiencies, hormonal imbalances, or chronic health issues. Early intervention can significantly improve outcomes.",
    symptoms: [
      "Height and weight below age-appropriate percentiles",
      "Delayed physical milestones",
      "Poor appetite and picky eating",
      "Frequent illness affecting growth",
      "Low energy and fatigue",
      "Delayed dental development",
    ],
    causes: [
      "Nutritional deficiencies (iron, zinc, vitamins)",
      "Chronic illnesses affecting nutrient absorption",
      "Hormonal imbalances (growth hormone, thyroid)",
      "Genetic factors and familial short stature",
      "Premature birth and low birth weight history",
      "Chronic stress and emotional factors",
    ],
    homeopathyApproach:
      "Homeopathic treatment for growth issues focuses on optimizing the child's nutritional absorption, stimulating appetite, and supporting hormonal balance naturally. Constitutional remedies help the child's body reach its full growth potential by addressing underlying barriers to healthy development.",
    doctorNote:
      "Every child has their own growth timeline, but when there are genuine concerns, early intervention makes a real difference. I work closely with parents to identify and address underlying factors. Many children show improved appetite, energy, and growth velocity within 2–3 months of treatment.",
    relatedConditions: ["recurrent-colds", "bedwetting", "adhd"],
    metaTitle: "Child Growth Issues Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for growth issues in children in Pune. Natural remedies to improve appetite, growth, and development.",
  },

  // ===== WOMEN'S HEALTH (4) =====
  {
    slug: "pcod-pcos",
    name: "PCOD / PCOS",
    category: "womens",
    icon: "🌸",
    shortDesc: "Hormonal imbalance affecting menstruation and fertility",
    overview:
      "Polycystic Ovary Syndrome/Disease (PCOS/PCOD) is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess androgen levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs. PCOS is one of the most common causes of female infertility.",
    symptoms: [
      "Irregular, infrequent, or prolonged periods",
      "Excess facial and body hair (hirsutism)",
      "Severe acne and oily skin",
      "Weight gain, especially around the abdomen",
      "Thinning hair and hair loss from the scalp",
      "Darkening of skin (neck, groin, under breasts)",
    ],
    causes: [
      "Hormonal imbalance (excess androgens)",
      "Insulin resistance and hyperinsulinemia",
      "Genetic predisposition",
      "Low-grade inflammation",
      "Unhealthy diet and sedentary lifestyle",
      "Stress and adrenal dysfunction",
    ],
    homeopathyApproach:
      "Homeopathic treatment for PCOS addresses the hormonal imbalance at its root, helping to regulate menstrual cycles, reduce androgen levels, and improve ovarian function. Treatment considers the full hormonal picture including thyroid, insulin, and adrenal function. Combined with lifestyle modifications, homeopathy can significantly improve PCOS symptoms and fertility outcomes.",
    doctorNote:
      "PCOS is a condition I treat frequently, and homeopathy has excellent results. Many of my patients achieve regular cycles within 3–4 months. For those trying to conceive, improved ovulation is often seen within the first few months of treatment. I always combine remedies with dietary and exercise guidance.",
    relatedConditions: ["thyroid-disorders", "infertility", "menstrual-disorders"],
    metaTitle: "PCOD/PCOS Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural PCOS/PCOD treatment with homeopathy in Pune. Regulate periods, balance hormones, and improve fertility with Dr. Sharda Tawale.",
  },
  {
    slug: "thyroid-disorders",
    name: "Thyroid Disorders",
    category: "womens",
    icon: "🌸",
    shortDesc: "Hypothyroidism, hyperthyroidism, and thyroid imbalance",
    overview:
      "Thyroid disorders occur when the thyroid gland produces too much (hyperthyroidism) or too little (hypothyroidism) thyroid hormone. These hormones regulate metabolism, energy levels, and body temperature. Thyroid disorders are significantly more common in women and can affect menstruation, fertility, and overall health.",
    symptoms: [
      "Unexplained weight gain or loss",
      "Fatigue, lethargy, or anxiety and restlessness",
      "Sensitivity to cold or heat",
      "Dry skin, hair loss, and brittle nails",
      "Irregular menstrual periods",
      "Mood swings, depression, or irritability",
    ],
    causes: [
      "Autoimmune conditions (Hashimoto's, Graves' disease)",
      "Iodine deficiency or excess",
      "Thyroid nodules or goiter",
      "Pituitary gland dysfunction",
      "Postpartum thyroiditis",
      "Genetic predisposition",
    ],
    homeopathyApproach:
      "Homeopathic treatment for thyroid disorders aims to regulate thyroid function naturally and address the underlying autoimmune or nutritional factors. Treatment is individualized based on whether the condition is hypothyroid or hyperthyroid, associated symptoms, and the patient's constitutional type. Homeopathy works alongside conventional thyroid medication.",
    doctorNote:
      "Thyroid management often requires a balanced approach. I work alongside your endocrinologist to optimize thyroid function. Many patients see improved TSH levels and reduced symptoms within 3–6 months, sometimes allowing for medication dose reduction under their doctor's guidance.",
    relatedConditions: ["pcod-pcos", "hair-fall", "infertility"],
    metaTitle: "Thyroid Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic thyroid treatment in Pune. Natural remedies for hypothyroidism, hyperthyroidism, and thyroid imbalance by Dr. Sharda Tawale.",
  },
  {
    slug: "infertility",
    name: "Infertility",
    category: "womens",
    icon: "🌸",
    shortDesc: "Difficulty conceiving and reproductive health support",
    overview:
      "Infertility is defined as not being able to get pregnant after one year of trying (or six months if the woman is 35 or older). Female infertility can be caused by ovulation disorders, blocked fallopian tubes, endometriosis, or unexplained factors. It affects approximately 10–15% of couples and can be emotionally devastating.",
    symptoms: [
      "Inability to conceive after 12 months of trying",
      "Irregular or absent menstrual periods",
      "Painful periods or pelvic pain",
      "History of miscarriages",
      "Hormonal symptoms (acne, hair growth changes)",
      "Emotional stress, anxiety, and depression",
    ],
    causes: [
      "Ovulation disorders (PCOS, premature ovarian failure)",
      "Blocked or damaged fallopian tubes",
      "Endometriosis",
      "Uterine fibroids or polyps",
      "Age-related egg quality decline",
      "Hormonal imbalances and thyroid disorders",
    ],
    homeopathyApproach:
      "Homeopathic treatment for infertility addresses the underlying hormonal, structural, and emotional factors affecting conception. Treatment aims to regulate ovulation, improve uterine health, balance hormones, and address stress and emotional blocks. Homeopathy can be used alongside assisted reproductive treatments.",
    doctorNote:
      "Fertility treatment is deeply personal, and I approach each case with sensitivity and thorough understanding. Homeopathy has helped many couples in my practice achieve pregnancy by optimizing the body's reproductive function naturally. The emotional support component is equally important.",
    relatedConditions: ["pcod-pcos", "thyroid-disorders", "menstrual-disorders"],
    metaTitle: "Infertility Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural infertility treatment with homeopathy in Pune. Dr. Sharda Tawale helps couples conceive with holistic reproductive health support.",
  },
  {
    slug: "menstrual-disorders",
    name: "Menstrual Disorders",
    category: "womens",
    icon: "🌸",
    shortDesc: "Painful, irregular, or heavy periods",
    overview:
      "Menstrual disorders encompass a range of conditions affecting the normal menstrual cycle, including dysmenorrhea (painful periods), menorrhagia (heavy bleeding), oligomenorrhea (infrequent periods), and amenorrhea (absent periods). These disorders can significantly impact a woman's quality of life, productivity, and emotional well-being.",
    symptoms: [
      "Severe cramping and pelvic pain during periods",
      "Excessively heavy or prolonged menstrual bleeding",
      "Irregular cycle length (less than 21 or more than 35 days)",
      "Missed periods or absent menstruation",
      "Premenstrual syndrome (PMS) — mood swings, bloating, breast tenderness",
      "Spotting between periods",
    ],
    causes: [
      "Hormonal imbalances (estrogen, progesterone)",
      "PCOS and thyroid disorders",
      "Uterine fibroids, polyps, or endometriosis",
      "Stress, weight changes, and excessive exercise",
      "Nutritional deficiencies (iron, vitamin D)",
      "Approaching menopause (perimenopause)",
    ],
    homeopathyApproach:
      "Homeopathic treatment for menstrual disorders is highly individualized, considering the specific pattern of the disorder, associated symptoms, and the woman's overall hormonal health. Remedies help regulate the menstrual cycle, reduce pain, normalize flow, and address underlying hormonal imbalances naturally.",
    doctorNote:
      "Menstrual problems are not something women should 'just live with.' I work to understand your unique pattern and find the right remedy to restore balance. Most women see improvement in cycle regularity and pain reduction within 2–3 cycles of treatment.",
    relatedConditions: ["pcod-pcos", "thyroid-disorders", "infertility"],
    metaTitle: "Menstrual Disorder Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for menstrual disorders in Pune. Natural relief from painful, irregular, and heavy periods by Dr. Sharda Tawale.",
  },

  // ===== LIFESTYLE (4) =====
  {
    slug: "diabetes-management",
    name: "Diabetes (Management)",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Blood sugar management and diabetic complications",
    overview:
      "Diabetes mellitus is a group of metabolic diseases characterized by high blood sugar levels over a prolonged period. Type 2 diabetes, the most common form, develops when the body becomes resistant to insulin or the pancreas doesn't produce enough insulin. Homeopathy supports diabetes management as a complementary approach alongside conventional treatment.",
    symptoms: [
      "Increased thirst and frequent urination",
      "Unexplained weight loss or gain",
      "Fatigue and weakness",
      "Blurred vision",
      "Slow-healing wounds and frequent infections",
      "Numbness or tingling in hands and feet",
    ],
    causes: [
      "Insulin resistance (Type 2)",
      "Genetic predisposition and family history",
      "Obesity and sedentary lifestyle",
      "Unhealthy diet high in processed foods",
      "Chronic stress",
      "Age (risk increases after 45)",
    ],
    homeopathyApproach:
      "Homeopathic treatment for diabetes works as a complementary approach to support blood sugar management, reduce complications, and improve overall well-being. Remedies help improve insulin sensitivity, support pancreatic function, and address associated conditions like diabetic neuropathy and slow wound healing.",
    doctorNote:
      "I want to be clear — homeopathy does not replace your diabetes medication. What it does is support better blood sugar control, reduce complications, and improve your quality of life. Many of my diabetic patients report better energy levels, improved wound healing, and more stable sugar readings with complementary homeopathic treatment.",
    relatedConditions: ["hypertension", "migraine", "arthritis"],
    metaTitle: "Diabetes Management in Pune | Sharda Homeopathy",
    metaDescription:
      "Complementary homeopathic support for diabetes management in Pune. Dr. Sharda Tawale helps improve blood sugar control and reduce complications.",
  },
  {
    slug: "hypertension",
    name: "Hypertension",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "High blood pressure management and cardiovascular support",
    overview:
      "Hypertension (high blood pressure) is a chronic condition in which the force of blood against artery walls is too high. Often called the 'silent killer' because it rarely has symptoms, hypertension significantly increases the risk of heart disease, stroke, and kidney problems. It is extremely common, affecting nearly half of adults.",
    symptoms: [
      "Often asymptomatic (silent killer)",
      "Headaches, particularly in the morning",
      "Dizziness and lightheadedness",
      "Shortness of breath",
      "Nosebleeds",
      "Visual changes",
    ],
    causes: [
      "Family history and genetic factors",
      "High salt intake and poor diet",
      "Obesity and lack of physical activity",
      "Chronic stress and anxiety",
      "Excessive alcohol consumption",
      "Kidney disease and hormonal disorders",
    ],
    homeopathyApproach:
      "Homeopathic treatment for hypertension works as a complementary approach to support blood pressure management. Remedies help address the underlying factors contributing to high blood pressure — whether stress, kidney function, or arterial health. Treatment aims to reduce the cardiovascular impact and support overall cardiovascular well-being.",
    doctorNote:
      "Like diabetes, hypertension management with homeopathy is complementary — it works alongside your prescribed medications. I focus on the stress, lifestyle, and metabolic factors that contribute to high blood pressure. Many patients report improved readings and a greater sense of well-being.",
    relatedConditions: ["diabetes-management", "migraine", "hair-fall"],
    metaTitle: "Hypertension Management in Pune | Sharda Homeopathy",
    metaDescription:
      "Complementary homeopathic support for high blood pressure in Pune. Natural approaches to hypertension management by Dr. Sharda Tawale.",
  },
  {
    slug: "migraine",
    name: "Migraine",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Severe headaches with nausea and sensitivity to light",
    overview:
      "A migraine is a severe, recurring headache that can cause intense throbbing or pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days and can be so severe that the pain is disabling.",
    symptoms: [
      "Intense throbbing or pulsing pain, usually one-sided",
      "Nausea and vomiting",
      "Extreme sensitivity to light and sound",
      "Visual disturbances (aura) — flashing lights, zigzag lines",
      "Lightheadedness and blurred vision",
      "Attacks lasting 4 to 72 hours",
    ],
    causes: [
      "Hormonal changes (menstruation, menopause)",
      "Stress, anxiety, and emotional triggers",
      "Dietary triggers (aged cheese, alcohol, MSG, caffeine)",
      "Sleep disturbances (too much or too little)",
      "Environmental factors (bright lights, strong smells)",
      "Genetic predisposition",
    ],
    homeopathyApproach:
      "Homeopathic treatment for migraines addresses the root triggers and underlying susceptibility rather than just managing acute pain. Remedies are selected based on the specific headache pattern — location, time of onset, triggers, associated symptoms, and modalities. Treatment aims to reduce attack frequency, duration, and intensity.",
    doctorNote:
      "Migraines are truly debilitating, and I have deep empathy for patients who suffer from them. Homeopathic treatment has been remarkably effective in reducing migraine frequency — many patients go from weekly attacks to perhaps one or two per month within 2–3 months of treatment. The key is identifying your unique triggers.",
    relatedConditions: ["hypertension", "diabetes-management", "hair-fall"],
    metaTitle: "Migraine Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Effective homeopathic migraine treatment in Pune. Reduce headache frequency and intensity naturally with Dr. Sharda Tawale's holistic approach.",
  },
  {
    slug: "hair-fall",
    name: "Hair Fall",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Excessive hair loss, thinning, and alopecia",
    overview:
      "Hair fall (alopecia) is a common condition that can range from mild thinning to complete baldness. While losing 50–100 hairs per day is normal, excessive hair loss can be distressing. It can affect the scalp or entire body, be temporary or permanent, and result from heredity, hormonal changes, medical conditions, or aging.",
    symptoms: [
      "Gradual thinning on top of head",
      "Circular or patchy bald spots",
      "Sudden loosening of hair",
      "Excessive hair loss during washing or combing",
      "Full-body hair loss",
      "Patches of scaling over the scalp",
    ],
    causes: [
      "Hereditary factors (androgenetic alopecia)",
      "Hormonal changes (thyroid, PCOS, menopause)",
      "Nutritional deficiencies (iron, biotin, zinc, vitamin D)",
      "Stress (telogen effluvium)",
      "Medical conditions (alopecia areata, scalp infections)",
      "Harsh chemical treatments and tight hairstyles",
    ],
    homeopathyApproach:
      "Homeopathic treatment for hair fall addresses the root cause — whether hormonal, nutritional, stress-related, or autoimmune. Remedies stimulate hair follicle health, improve blood circulation to the scalp, and correct internal imbalances causing excessive hair loss. Treatment is particularly effective for hormonal hair loss and alopecia areata.",
    doctorNote:
      "Hair fall often has multiple contributing factors. I conduct a thorough assessment including hormonal screening recommendations and nutritional evaluation. Most patients see reduced hair fall within 6–8 weeks and new growth beginning within 3–4 months. Patience and consistency are key.",
    relatedConditions: ["thyroid-disorders", "pcod-pcos", "acne"],
    metaTitle: "Hair Fall Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural hair fall treatment with homeopathy in Pune. Stop excessive hair loss and promote regrowth with Dr. Sharda Tawale's personalized approach.",
  },
];
