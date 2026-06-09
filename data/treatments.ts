export type TreatmentCategory =
  | "skin"
  | "respiratory"
  | "digestive"
  | "joint"
  | "children"
  | "womens"
  | "lifestyle"
  | "mental-wellness"
  | "ent";

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
  "mental-wellness": "Mind & Wellness",
  ent: "ENT & Throat",
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
      "Homeopathy treats psoriasis by addressing the root immune imbalance rather than just suppressing symptoms. Remedies are selected based on the individual's complete health picture - physical symptoms, emotional state, and constitutional type. This approach aims to regulate the overactive immune response, reduce inflammation naturally, and promote healthy skin cell turnover. Common remedies include Arsenicum Album, Graphites, Sulphur, and Petroleum, chosen based on individual case analysis.",
    doctorNote:
      "Most patients with psoriasis see significant improvement within 3–6 months of consistent homeopathic treatment. I focus on understanding your unique triggers - whether stress, diet, or environmental - and create a personalized plan. Many of my patients have been able to reduce their dependency on steroid creams significantly.",
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
      "Homeopathy addresses acne by treating hormonal imbalances and regulating sebum production from within. Unlike topical treatments that only work on the surface, homeopathic remedies help correct the internal factors causing acne - whether hormonal, digestive, or stress-related. Remedies like Berberis Aquifolium, Pulsatilla, and Hepar Sulph are commonly used based on individual case analysis.",
    doctorNote:
      "Teenage and hormonal acne responds excellently to homeopathy. I focus on the whole picture - your hormonal health, digestive system, and stress levels. Most patients see a visible reduction in new breakouts within 6–8 weeks, with the skin gradually clearing over 3–4 months.",
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
      "Vitiligo requires patience and consistent treatment. Early-stage vitiligo responds best - I have seen re-pigmentation begin within 4–6 months in many cases. The key is starting treatment early and maintaining consistency. I also work with patients on managing the emotional aspects of the condition.",
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
      "Chronic urticaria can be incredibly frustrating - I understand the impact it has on daily life. In my experience, homeopathic treatment can significantly reduce episode frequency within 2–3 months and often achieve long-term remission within 6–8 months.",
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
      "Asthma management through homeopathy has been one of my most rewarding areas of practice. Many patients experience a significant reduction in attack frequency within 3–4 months. I always work alongside your existing treatment plan - the goal is gradual improvement, not abrupt changes.",
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
      "Chronic sinusitis patients often come to me after multiple courses of antibiotics. Homeopathy offers a different path - by strengthening sinus immunity and reducing inflammation naturally, many patients experience a dramatic reduction in infection frequency. Results typically begin within 4–6 weeks.",
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
      "Piles and fissures cause significant suffering that patients often tolerate silently. Homeopathic treatment can resolve early to moderate cases completely and significantly improve advanced cases. I encourage patients not to wait - early treatment yields the best results.",
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
      "Homeopathic treatment addresses the root cause of back pain - whether muscular, structural, or inflammatory. Remedies reduce pain, muscle spasm, and inflammation while promoting tissue healing. Treatment is particularly effective for chronic back pain that hasn't responded well to conventional painkillers.",
    doctorNote:
      "Back pain often has multiple contributing factors - poor posture, stress, and structural issues all play a role. I take a comprehensive approach, combining homeopathic remedies with practical advice on posture, exercises, and lifestyle modifications. Many patients experience significant relief within 3–4 weeks.",
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
    shortDesc: "Frequent cold/ coughs, and infections in children",
    overview:
      "Some children seem to catch every cold and infection going around. Recurrent respiratory infections - more than 6–8 upper respiratory infections per year - can indicate an underdeveloped or weakened immune system. These frequent illnesses disrupt schooling, cause parental anxiety, and often lead to repeated antibiotic courses that further compromise immunity.",
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
      "Children caught in the cycle of repeated infections and antibiotics benefit enormously from homeopathy. I focus on building their natural immunity. Parents typically notice a significant reduction in infection frequency within 2–3 months - children are healthier, happier, and miss less school.",
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
    name: "Hair Fall",
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
    name: "Infertility/ Sterility",
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
      "Premenstrual syndrome (PMS) - mood swings, bloating, breast tenderness",
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
      "I want to be clear - homeopathy does not replace your diabetes medication. What it does is support better blood sugar control, reduce complications, and improve your quality of life. Many of my diabetic patients report better energy levels, improved wound healing, and more stable sugar readings with complementary homeopathic treatment.",
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
      "Homeopathic treatment for hypertension works as a complementary approach to support blood pressure management. Remedies help address the underlying factors contributing to high blood pressure - whether stress, kidney function, or arterial health. Treatment aims to reduce the cardiovascular impact and support overall cardiovascular well-being.",
    doctorNote:
      "Like diabetes, hypertension management with homeopathy is complementary - it works alongside your prescribed medications. I focus on the stress, lifestyle, and metabolic factors that contribute to high blood pressure. Many patients report improved readings and a greater sense of well-being.",
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
      "Visual disturbances (aura) - flashing lights, zigzag lines",
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
      "Homeopathic treatment for migraines addresses the root triggers and underlying susceptibility rather than just managing acute pain. Remedies are selected based on the specific headache pattern - location, time of onset, triggers, associated symptoms, and modalities. Treatment aims to reduce attack frequency, duration, and intensity.",
    doctorNote:
      "Migraines are truly debilitating, and I have deep empathy for patients who suffer from them. Homeopathic treatment has been remarkably effective in reducing migraine frequency - many patients go from weekly attacks to perhaps one or two per month within 2–3 months of treatment. The key is identifying your unique triggers.",
    relatedConditions: ["hypertension", "diabetes-management", "hair-fall"],
    metaTitle: "Migraine Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Effective homeopathic migraine treatment in Pune. Reduce headache frequency and intensity naturally with Dr. Sharda Tawale's holistic approach.",
  },
  {
    slug: "hair-fall",
    name: "Alopecia Areata",
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
      "Homeopathic treatment for hair fall addresses the root cause - whether hormonal, nutritional, stress-related, or autoimmune. Remedies stimulate hair follicle health, improve blood circulation to the scalp, and correct internal imbalances causing excessive hair loss. Treatment is particularly effective for hormonal hair loss and alopecia areata.",
    doctorNote:
      "Hair fall often has multiple contributing factors. I conduct a thorough assessment including hormonal screening recommendations and nutritional evaluation. Most patients see reduced hair fall within 6–8 weeks and new growth beginning within 3–4 months. Patience and consistency are key.",
    relatedConditions: ["thyroid-disorders", "pcod-pcos", "acne"],
    metaTitle: "Hair Fall Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural hair fall treatment with homeopathy in Pune. Stop excessive hair loss and promote regrowth with Dr. Sharda Tawale's personalized approach.",
  },

  // ===== MENTAL & WELLNESS (6) =====
  {
    slug: "anxiety-stress-depression",
    name: "Anxiety, Stress & Depression",
    category: "mental-wellness",
    icon: "🧠",
    shortDesc: "Chronic stress, anxiety, and nervous tension",
    overview:
      "Stress and anxiety are among the most prevalent health challenges today. Chronic stress suppresses immunity, disrupts sleep, and contributes to a cascade of physical ailments - from digestive issues to heart disease. Anxiety disorders affect millions and can manifest as generalized anxiety, panic attacks, social anxiety, or phobias, significantly impacting quality of life.",
    symptoms: [
      "Persistent worry, restlessness, and irritability",
      "Rapid heartbeat, sweating, and trembling",
      "Difficulty concentrating and mental fatigue",
      "Insomnia and disrupted sleep patterns",
      "Muscle tension, headaches, and digestive upset",
      "Avoidance of social situations",
    ],
    causes: [
      "Work pressure and lifestyle demands",
      "Hormonal imbalances",
      "Unresolved emotional trauma",
      "Nutritional deficiencies (magnesium, B vitamins)",
      "Overthinking and perfectionist tendencies",
      "Genetic predisposition to anxiety",
    ],
    homeopathyApproach:
      "Homeopathy addresses stress and anxiety holistically - calming the nervous system, improving resilience, and treating physical manifestations (palpitations, insomnia, digestive issues) simultaneously. Remedies are chosen based on the type and trigger of anxiety, the individual's temperament, and associated physical symptoms.",
    doctorNote:
      "Stress and anxiety respond beautifully to homeopathy. I use a gentle, judgement-free approach to understand the root of your anxiety. Many patients report feeling calmer and more grounded within the first 2–3 weeks of treatment, with progressive improvement over 2–3 months.",
    relatedConditions: ["insomnia", "migraine"],
    metaTitle: "Stress & Anxiety Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural homeopathic treatment for stress and anxiety in Pune. Calm your nervous system and restore balance with Dr. Sharda Tawale.",
  },
  {
    slug: "insomnia",
    name: "Insomnia & Sleeplessness",
    category: "mental-wellness",
    icon: "🧠",
    shortDesc: "Difficulty falling or staying asleep, sleep disorders",
    overview:
      "Insomnia is a sleep disorder in which you have trouble falling asleep, staying asleep, or getting restful sleep. Chronic insomnia lasts for a month or more and has far-reaching effects on cognitive function, immunity, mood, and physical health. It affects approximately one-third of adults at some point in their lives.",
    symptoms: [
      "Difficulty falling asleep despite being tired",
      "Waking up frequently during the night",
      "Waking too early and unable to return to sleep",
      "Daytime fatigue, irritability, and brain fog",
      "Dependence on sleep aids",
      "Anxiety about sleep",
    ],
    causes: [
      "Stress, anxiety, and racing thoughts",
      "Irregular sleep schedule and poor sleep hygiene",
      "Caffeine, alcohol, and stimulants",
      "Chronic pain, digestive issues, or respiratory problems",
      "Menopause and hormonal changes",
      "Certain medications",
    ],
    homeopathyApproach:
      "Homeopathy treats insomnia by identifying and addressing the root cause - whether stress, pain, hormonal imbalance, or mental activity. Remedies promote natural, restful sleep without sedation or dependency. Treatment considers sleep patterns, dream quality, and the time of waking.",
    doctorNote:
      "Many patients come to me after years of sleeping pill dependency. Homeopathy offers a safe path back to natural sleep. I focus on the underlying cause - stress, pain, hormonal shifts - and select remedies that gently restore normal sleep architecture. Most patients notice improved sleep quality within 2–4 weeks.",
    relatedConditions: ["anxiety-stress-depression", "migraine"],
    metaTitle: "Insomnia Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural insomnia and sleeplessness treatment with homeopathy in Pune. Restore restful sleep without dependency.",
  },
  {
    slug: "lack-of-concentration",
    name: "Lack of Concentration",
    category: "mental-wellness",
    icon: "🧠",
    shortDesc: "Poor focus, memory weakness, and mental fatigue",
    overview:
      "Difficulty concentrating and weak memory affect people of all ages - from students struggling with studies to professionals experiencing cognitive fatigue and older adults worried about memory decline. Homeopathy offers gentle, natural support to sharpen focus, improve retention, and restore mental clarity.",
    symptoms: [
      "Inability to focus on tasks for extended periods",
      "Frequent forgetfulness and memory lapses",
      "Mental fatigue and brain fog",
      "Difficulty retaining new information",
      "Distraction and restlessness",
      "Declining academic or professional performance",
    ],
    causes: [
      "Stress, anxiety, and emotional overload",
      "Poor sleep and fatigue",
      "Nutritional deficiencies",
      "Thyroid dysfunction",
      "Screen overexposure and digital fatigue",
      "Underlying ADHD or depression",
    ],
    homeopathyApproach:
      "Constitutional homeopathic remedies improve cognitive function by addressing the root causes of poor concentration - whether stress, nutritional, hormonal, or neurological. Treatment is safe and non-stimulant, suitable for children and adults alike.",
    doctorNote:
      "Poor concentration affects every area of life. I evaluate the whole picture - sleep, stress, diet, emotional state - to find the right remedy. Students and professionals often see improvements in focus and retention within 4–6 weeks of consistent treatment.",
    relatedConditions: ["anxiety-stress-depression", "insomnia", "adhd"],
    metaTitle: "Concentration & Memory Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for poor concentration and memory in Pune. Natural remedies to improve focus and mental clarity.",
  },
  {
    slug: "autism",
    name: "Autism Spectrum Support",
    category: "mental-wellness",
    icon: "🧠",
    shortDesc: "Supportive homeopathic care for autism spectrum behaviours",
    overview:
      "Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition affecting communication, social interaction, and behaviour. Homeopathy offers supportive, complementary care that aims to reduce associated difficulties - sensory sensitivities, sleep issues, digestive problems, anxiety, and tantrums - improving quality of life for children and families.",
    symptoms: [
      "Difficulty with social interaction and communication",
      "Repetitive behaviours and restricted interests",
      "Sensory sensitivities (sound, touch, light)",
      "Speech delay or non-verbal communication",
      "Sleep disturbances and digestive issues",
      "Emotional meltdowns and anxiety",
    ],
    causes: [
      "Genetic and chromosomal factors",
      "Advanced parental age",
      "Prenatal exposure to certain medications or chemicals",
      "Immune dysregulation and gut-brain axis issues",
      "Environmental factors",
    ],
    homeopathyApproach:
      "Homeopathic treatment for autism is supportive and complementary - it does not claim to cure ASD, but can significantly improve associated symptoms. Individualized remedies address anxiety, sleep, digestion, and sensory sensitivity, helping children become calmer and more responsive to therapy.",
    doctorNote:
      "I approach autism cases with deep compassion and clinical care. Homeopathy can be a valuable addition to speech therapy, occupational therapy, and behavioural support. Many parents report their children becoming calmer, sleeping better, and communicating more within a few months of treatment.",
    relatedConditions: ["adhd", "lack-of-concentration", "insomnia"],
    metaTitle: "Autism Support with Homeopathy in Pune | Sharda Homeopathy",
    metaDescription:
      "Complementary homeopathic care for autism spectrum behaviours in Pune. Safe support for communication, sleep, and sensory issues.",
  },
  {
    slug: "chronic-fatigue",
    name: "Chronic Weakness & Fatigue",
    category: "mental-wellness",
    icon: "🧠",
    shortDesc: "Persistent tiredness, low energy, and muscle weakness",
    overview:
      "Chronic fatigue goes beyond normal tiredness - it is a persistent, debilitating exhaustion that doesn't improve with rest. It can include muscle pain, cognitive difficulties, sleep problems, and a general sense of being unwell. Homeopathy offers deep constitutional treatment to restore vitality from within.",
    symptoms: [
      "Persistent exhaustion not relieved by rest",
      "Muscle pain and weakness",
      "Post-exertional fatigue (worse after minimal activity)",
      "Brain fog and difficulty concentrating",
      "Unrefreshing sleep",
      "Frequent illness due to low immunity",
    ],
    causes: [
      "Post-viral syndrome (long COVID, EBV)",
      "Chronic stress and adrenal fatigue",
      "Nutritional deficiencies (iron, B12, D3)",
      "Thyroid and hormonal disorders",
      "Autoimmune conditions",
      "Chronic pain conditions",
    ],
    homeopathyApproach:
      "Homeopathic treatment for chronic fatigue focuses on identifying and correcting the constitutional weakness underlying exhaustion. Remedies stimulate the body's own energy-restoring mechanisms, improve cellular nutrition, and address the stress-immunity-hormonal triad.",
    doctorNote:
      "Chronic fatigue is often dismissed, but it is very real and very treatable with homeopathy. I take a thorough history to uncover the root - whether post-viral, hormonal, or nutritional - and build a customised plan. Patients begin to notice improved energy and stamina within 4–8 weeks.",
    relatedConditions: ["anxiety-stress-depression", "insomnia", "thyroid-disorders"],
    metaTitle: "Chronic Fatigue Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for chronic weakness and fatigue in Pune. Restore energy and vitality naturally with Dr. Sharda Tawale.",
  },

  // ===== JOINT & BONE - ADDITIONS =====
  {
    slug: "spondylitis",
    name: "Spondylitis & Cervical Spondylitis",
    category: "joint",
    icon: "🦴",
    shortDesc: "Spinal inflammation, cervical pain, and vertebral degeneration",
    overview:
      "Spondylitis refers to inflammation of the vertebrae (spinal joints). Cervical spondylitis affects the neck region causing stiffness, pain, and nerve compression. Lumbar spondylitis affects the lower back. Ankylosing spondylitis is an autoimmune form causing progressive spinal stiffness. All forms can severely restrict mobility and quality of life if untreated.",
    symptoms: [
      "Neck stiffness and pain radiating to shoulders and arms",
      "Lower back pain and stiffness, worse in the morning",
      "Tingling or numbness in hands and fingers",
      "Headaches and dizziness from cervical compression",
      "Reduced range of motion in the neck or spine",
      "Chronic fatigue and difficulty in prolonged sitting or standing",
    ],
    causes: [
      "Age-related degeneration of cervical/lumbar discs",
      "Poor posture and prolonged desk work",
      "Autoimmune inflammation (ankylosing spondylitis)",
      "Injuries and trauma to the spine",
      "Calcium/vitamin D deficiency",
      "Genetic predisposition",
    ],
    homeopathyApproach:
      "Homeopathic treatment for spondylitis addresses spinal inflammation, nerve compression, and degenerative changes constitutionally. Remedies reduce pain, improve mobility, slow disc degeneration, and address the autoimmune component in ankylosing spondylitis. Treatment is complementary to physiotherapy and posture correction.",
    doctorNote:
      "Spondylitis is one of the most common conditions I treat, particularly in IT professionals and desk workers. Homeopathy provides significant pain relief and prevents further degeneration. Combined with targeted exercises and posture correction, most patients see major improvement within 6–8 weeks.",
    relatedConditions: ["back-pain", "sciatica", "arthritis"],
    metaTitle: "Spondylitis Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural homeopathic treatment for cervical spondylitis and spinal pain in Pune. Reduce neck stiffness and back pain safely.",
  },

  // ===== LIFESTYLE - ADDITIONS =====
  {
    slug: "obesity",
    name: "Obesity & Weight Management",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Healthy weight management with constitutional homeopathic support",
    overview:
      "Obesity is a complex condition involving excess body fat that increases health risks including heart disease, diabetes, hypertension, and joint problems. Homeopathy supports weight management by addressing the root metabolic, hormonal, and emotional causes of weight gain rather than simply suppressing appetite.",
    symptoms: [
      "BMI above 30 (obese) or 25 (overweight)",
      "Difficulty losing weight despite diet and exercise",
      "Fatigue, breathlessness on exertion",
      "Joint pain and mobility issues",
      "Emotional eating, cravings, and hormonal imbalance",
      "Associated conditions: thyroid, PCOS, diabetes",
    ],
    causes: [
      "Hormonal imbalances (thyroid, insulin resistance)",
      "Sedentary lifestyle and high-calorie diet",
      "Emotional eating and stress",
      "Medications (steroids, antidepressants)",
      "Genetic predisposition to metabolic slowness",
      "Sleep disorders",
    ],
    homeopathyApproach:
      "Constitutional homeopathic remedies improve metabolic efficiency, regulate appetite, address hormonal imbalances, and reduce emotional eating patterns. Treatment is combined with nutritional guidance for sustainable, healthy weight loss - not crash dieting.",
    doctorNote:
      "Weight management is never just about willpower. I assess thyroid, insulin sensitivity, cortisol, and emotional factors before selecting the right remedy. Most patients begin to see metabolic improvements within 6–8 weeks and consistent weight reduction over 3–6 months.",
    relatedConditions: ["thyroid-disorders", "diabetes-management", "hypertension"],
    metaTitle: "Obesity & Weight Management in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic support for weight management in Pune. Address the root cause of weight gain with Dr. Sharda Tawale's constitutional approach.",
  },
  {
    slug: "low-immunity",
    name: "Low Immunity",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Frequent infections, poor immunity, and susceptibility to illness",
    overview:
      "A weakened immune system makes the body more vulnerable to infections, slow recovery, and chronic illness. Low immunity can manifest as frequent colds, recurring infections, slow wound healing, and persistent fatigue. Homeopathy excels at immune modulation - strengthening the body's natural defences without stimulants.",
    symptoms: [
      "Frequent infections - colds, throat, UTI",
      "Slow recovery from illness",
      "Chronic fatigue and low energy",
      "Poor wound healing",
      "Digestive disturbances",
      "Sensitivity to environmental changes",
    ],
    causes: [
      "Chronic stress and adrenal depletion",
      "Nutritional deficiencies",
      "Overuse of antibiotics",
      "Autoimmune tendencies",
      "Sedentary lifestyle and poor diet",
      "Chronic illness burden",
    ],
    homeopathyApproach:
      "Homeopathic remedies work as immune modulators - gently stimulating the body's own defence mechanisms without overstimulation. Constitutional treatment addresses the individual's unique immune pattern, while specific remedies target recurring infection tendencies.",
    doctorNote:
      "Building immunity is one of homeopathy's greatest strengths. Whether it's a child who catches every cold or an adult prone to recurrent infections, I customise a protocol that strengthens their specific immune pattern. Results are typically noticed within 2–3 months.",
    relatedConditions: ["recurrent-colds", "chronic-fatigue", "anxiety-stress-depression"],
    metaTitle: "Low Immunity Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Boost immunity naturally with homeopathy in Pune. Dr. Sharda Tawale's constitutional approach to building lasting immune strength.",
  },
  {
    slug: "muscle-pain",
    name: "Muscle Pain & Fibromyalgia",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Widespread muscle pain, tenderness, and myofascial discomfort",
    overview:
      "Muscle pain (myalgia) can range from localised soreness after exertion to widespread pain as seen in fibromyalgia. Fibromyalgia causes widespread musculoskeletal pain, fatigue, sleep problems, and cognitive issues. Homeopathy addresses both acute muscle pain and the complex chronic pattern of fibromyalgia.",
    symptoms: [
      "Widespread aching and tenderness in muscles",
      "Stiffness, especially in the morning",
      "Fatigue and unrefreshing sleep",
      "Sensitivity to pressure at tender points",
      "Headaches and brain fog",
      "Muscle cramping and spasms",
    ],
    causes: [
      "Physical overexertion and injury",
      "Chronic stress and nervous system sensitization",
      "Viral infections triggering fibromyalgia",
      "Nutritional deficiencies (Mg, D3)",
      "Autoimmune conditions",
      "Sleep disorders",
    ],
    homeopathyApproach:
      "Homeopathic remedies reduce muscle inflammation, ease spasms, and address the central sensitization that underlies fibromyalgia. Constitutional treatment helps regulate pain perception and improve sleep quality, providing multi-dimensional relief.",
    doctorNote:
      "Fibromyalgia patients are often dismissed or overtreated with harsh medications. Homeopathy provides gentle, consistent relief without side effects. I focus on pain patterns, sleep quality, and emotional wellbeing. Most patients notice improved pain tolerance and sleep within 4–8 weeks.",
    relatedConditions: ["arthritis", "chronic-fatigue", "insomnia"],
    metaTitle: "Muscle Pain & Fibromyalgia Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural treatment for muscle pain and fibromyalgia in Pune. Homeopathic remedies for widespread pain and fatigue.",
  },
  {
    slug: "liver-disorders",
    name: "Liver Disorders",
    category: "digestive",
    icon: "🫃",
    shortDesc: "Fatty liver, hepatitis, and liver function support",
    overview:
      "The liver is the body's primary detoxification organ. Liver disorders ranging from fatty liver disease (NAFLD) to hepatitis and liver inflammation are increasingly common due to dietary habits, alcohol, and metabolic issues. Homeopathy provides supportive, protective treatment that supports liver regeneration and function.",
    symptoms: [
      "Fatigue and weakness",
      "Abdominal discomfort in the upper right area",
      "Jaundice (yellowing of skin/eyes)",
      "Nausea and loss of appetite",
      "Bloating and digestive difficulty",
      "Elevated liver enzymes (SGPT/SGOT on blood tests)",
    ],
    causes: [
      "Fatty liver (NAFLD) from obesity and diet",
      "Viral hepatitis (A, B, C)",
      "Alcohol-related liver damage",
      "Medications and toxin exposure",
      "Autoimmune hepatitis",
      "Metabolic syndrome",
    ],
    homeopathyApproach:
      "Homeopathic remedies support liver regeneration, reduce inflammation, and improve enzyme levels naturally. Constitutional treatment addresses the root cause - metabolic, viral, or toxic - while dietary guidance supports liver healing. Treatment is complementary to conventional monitoring.",
    doctorNote:
      "Fatty liver is now the most common liver condition I see. With the right remedies combined with dietary changes, enzyme levels often show improvement within 2–3 months. I monitor progress through regular liver function tests and adjust treatment accordingly.",
    relatedConditions: ["gastritis", "ibs", "diabetes-management"],
    metaTitle: "Liver Disorder Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic support for liver disorders including fatty liver and hepatitis in Pune. Natural liver protection and regeneration.",
  },
  {
    slug: "kidney-stone",
    name: "Kidney Stone",
    category: "lifestyle",
    icon: "💊",
    shortDesc: "Kidney stone prevention, renal support, and creatinine management",
    overview:
      "Kidney stones are hard deposits of minerals and salts that form in the kidneys. They can cause intense pain, blood in urine, and recurrent urinary infections. Elevated creatinine indicates impaired kidney function and may precede chronic kidney disease. Homeopathy helps dissolve small stones, prevent recurrence, and support kidney health.",
    symptoms: [
      "Severe, sudden pain in the side and back (renal colic)",
      "Blood in urine (haematuria)",
      "Frequent and painful urination",
      "Nausea and vomiting during stone attacks",
      "Elevated creatinine and urea on blood tests",
      "Recurrent urinary tract infections",
    ],
    causes: [
      "Low water intake and dehydration",
      "High oxalate, uric acid, or calcium diet",
      "Recurrent UTIs",
      "Metabolic disorders",
      "Genetic predisposition to stone formation",
      "Certain medications",
    ],
    homeopathyApproach:
      "Homeopathic remedies help expel small stones, reduce urinary pain, and prevent new stone formation by correcting the underlying metabolic tendency. For elevated creatinine, constitutional treatment supports kidney filtration function and reduces further damage progression.",
    doctorNote:
      "Kidney stones are excruciatingly painful, and recurrence is very common without addressing the root cause. Homeopathy significantly reduces recurrence risk. For creatinine issues, I work alongside your nephrologist to provide complementary support that protects remaining kidney function.",
    relatedConditions: ["hypertension", "diabetes-management", "gout"],
    metaTitle: "Kidney Stone Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for kidney stones and creatinine issues in Pune. Natural support for renal health and stone prevention.",
  },
  {
    slug: "skin-glow-anti-aging",
    name: "Skin Glow & Anti-Aging",
    category: "skin",
    icon: "🫧",
    shortDesc: "Natural skin radiance, pigmentation correction, and youthful skin",
    overview:
      "Homeopathy offers a unique inside-out approach to skin health. By correcting internal imbalances - hormonal, digestive, and nutritional - homeopathic treatment restores the skin's natural glow, reduces dullness, improves texture, and slows premature aging. This is a natural alternative to chemical cosmetic treatments.",
    symptoms: [
      "Dull, dry, and lacklustre skin",
      "Uneven skin tone and dark spots",
      "Fine lines, wrinkles, and sagging skin",
      "Enlarged pores and rough texture",
      "Pigmentation and sun damage",
      "Premature aging and loss of elasticity",
    ],
    causes: [
      "Hormonal imbalances affecting skin turnover",
      "Nutritional deficiencies (vitamins C, E, zinc)",
      "Chronic dehydration and poor diet",
      "Stress and cortisol-driven skin damage",
      "Oxidative stress and free radicals",
      "Digestive issues affecting skin health",
    ],
    homeopathyApproach:
      "Constitutional remedies address the internal environment that determines skin health - improving circulation, hormonal balance, digestive absorption of nutrients, and reducing oxidative stress. The result is naturally radiant, younger-looking skin from within.",
    doctorNote:
      "True skin glow comes from within. I address the gut-skin axis, hormonal health, and stress patterns that affect your skin. Patients are often amazed at the improvement in skin texture and radiance within 6–8 weeks - a natural, chemical-free glow.",
    relatedConditions: ["acne", "psoriasis", "thyroid-disorders"],
    metaTitle: "Skin Glow & Anti-Aging Homeopathy in Pune | Sharda Homeopathy",
    metaDescription:
      "Achieve natural skin glow and anti-aging results with homeopathy in Pune. Inside-out approach to radiant, youthful skin.",
  },

  // ===== ENT & THROAT (3) =====
  {
    slug: "tonsils-adenoid",
    name: "Tonsils & Adenoid (Avoid Surgery)",
    category: "ent",
    icon: "👂",
    shortDesc: "Enlarged tonsils and adenoids treated without surgery",
    overview:
      "Enlarged tonsils and adenoids are extremely common in children, often causing recurrent throat infections, breathing difficulties, snoring, and ear problems. Homeopathy has an excellent track record in treating chronic tonsil and adenoid enlargement, helping many children avoid surgical removal (tonsillectomy/adenoidectomy).",
    symptoms: [
      "Chronically enlarged or inflamed tonsils",
      "Frequent throat pain and difficulty swallowing",
      "Mouth breathing and snoring at night",
      "Nasal voice and speech difficulties",
      "Recurring ear infections and hearing difficulty",
      "Frequent fevers and throat infections",
    ],
    causes: [
      "Chronic or recurrent bacterial/viral infections",
      "Weakened immune system",
      "Allergic tendencies",
      "Environmental pollutants",
      "Family history of tonsil problems",
    ],
    homeopathyApproach:
      "Homeopathic treatment reduces chronic tonsil and adenoid enlargement by correcting the underlying immune weakness and reducing chronic inflammation. Treatment significantly reduces infection frequency, improves breathing, and shrinks enlarged tissue - often eliminating the need for surgery.",
    doctorNote:
      "Surgery avoidance is possible in most early to moderate cases. I have successfully treated hundreds of children with enlarged tonsils and adenoids. Parents notice improved breathing, fewer infections, and better sleep within 2–3 months. The key is starting before the condition becomes severe.",
    relatedConditions: ["tonsillitis", "allergic-rhinitis", "recurrent-colds"],
    metaTitle: "Tonsils & Adenoid Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Avoid tonsil and adenoid surgery with homeopathy in Pune. Dr. Sharda Tawale treats enlarged tonsils and adenoids naturally in children.",
  },
  {
    slug: "ent-issues",
    name: "ENT Disorders",
    category: "ent",
    icon: "👂",
    shortDesc: "Ear, nose, and throat conditions treated holistically",
    overview:
      "ENT (Ear, Nose, and Throat) disorders encompass a wide range of conditions including ear infections, tinnitus, vertigo, nasal polyps, deviated septum issues, voice problems, and throat disorders. Homeopathy treats the susceptibility to ENT problems by strengthening local mucosal immunity and reducing chronic inflammation.",
    symptoms: [
      "Chronic ear infections and ear pain",
      "Tinnitus (ringing in the ears)",
      "Dizziness and vertigo",
      "Nasal polyps and chronic congestion",
      "Voice hoarseness and throat discomfort",
      "Hearing loss due to chronic fluid in ears",
    ],
    causes: [
      "Recurrent infections and chronic inflammation",
      "Allergies and immune weakness",
      "Structural factors (deviated septum, nasal polyps)",
      "Environmental irritants and pollution",
      "Barotrauma (pressure changes)",
      "Autoimmune conditions",
    ],
    homeopathyApproach:
      "Constitutional homeopathic treatment addresses the chronic inflammatory and allergic tendency that underlies most ENT disorders. Remedies reduce mucous membrane sensitivity, improve local immunity, and target specific symptoms like tinnitus, vertigo, and hearing loss.",
    doctorNote:
      "ENT problems are often recurrent and frustrating. Homeopathy targets the root susceptibility, not just the symptoms. Chronic ear infections, persistent congestion, and tinnitus respond particularly well. Most patients see a significant reduction in episode frequency within 2–3 months.",
    relatedConditions: ["tonsils-adenoid", "allergic-rhinitis", "sinusitis"],
    metaTitle: "ENT Disorder Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Homeopathic treatment for ENT disorders in Pune. Natural remedies for ear infections, tinnitus, sinusitis, and throat problems.",
  },
  {
    slug: "hyperacidity",
    name: "Hyperacidity & Digestive Ulcers",
    category: "digestive",
    icon: "🫃",
    shortDesc: "Severe acidity, heartburn, and stomach ulcers",
    overview:
      "Hyperacidity occurs when the stomach produces excess acid, leading to heartburn, acid reflux, and potentially peptic ulcers. Chronic hyperacidity erodes the stomach and intestinal lining, causing significant discomfort. Homeopathy provides lasting relief by healing the gastric lining and correcting the underlying acid-secretion imbalance.",
    symptoms: [
      "Severe burning sensation in the chest and stomach",
      "Sour or bitter regurgitation",
      "Heartburn worse after meals, bending, or lying down",
      "Nausea and bloating after eating",
      "Stomach pain or cramps",
      "Vomiting acid in severe cases",
    ],
    causes: [
      "Irregular meal timing and spicy/oily diet",
      "Stress and emotional upsets",
      "H. pylori infection",
      "Overuse of NSAIDs and medications",
      "Alcohol and tobacco use",
      "Weak lower oesophageal sphincter",
    ],
    homeopathyApproach:
      "Homeopathic remedies heal the gastric mucosa, regulate acid production, and address the stress and dietary factors contributing to chronic hyperacidity. Unlike antacids that only provide temporary relief, homeopathy works to restore healthy digestive function permanently.",
    doctorNote:
      "Hyperacidity is incredibly common and incredibly treatable with homeopathy. I help patients break the antacid dependency cycle by healing the root cause. Combined with simple dietary adjustments, most patients achieve lasting relief within 4–6 weeks.",
    relatedConditions: ["gastritis", "ibs", "constipation"],
    metaTitle: "Hyperacidity Treatment in Pune | Sharda Homeopathy",
    metaDescription:
      "Natural homeopathic treatment for hyperacidity and digestive ulcers in Pune. Lasting relief from heartburn and acid reflux.",
  },

  // ===== CANCER SUPPORTIVE CARE =====
  {
    slug: "cancer-supportive-care",
    name: "Cancer - Supportive Care (All Types)",
    category: "lifestyle",
    icon: "🎗️",
    shortDesc: "Complementary homeopathic support during and after cancer treatment",
    overview:
      "Homeopathy does not claim to cure cancer - but it plays a powerful complementary role in supporting cancer patients through their journey. Whether undergoing chemotherapy, radiation, surgery, or immunotherapy, homeopathic treatment helps manage side effects, restore vitality, strengthen immunity, and improve overall quality of life. Dr. Sharda provides integrative supportive care for all cancer types - breast, lung, colorectal, prostate, cervical, blood cancers, and more - always alongside the patient's oncology team.",
    symptoms: [
      "Chemotherapy side effects - nausea, fatigue, hair loss, mouth sores",
      "Radiation-related skin reactions and fatigue",
      "Weakened immunity and susceptibility to infections",
      "Emotional distress - anxiety, fear, depression",
      "Sleep disturbances and chronic pain",
      "Loss of appetite and significant weight loss",
    ],
    causes: [
      "Genetic mutations and hereditary predisposition",
      "Chronic inflammation and oxidative stress",
      "Carcinogen exposure (tobacco, chemicals, radiation)",
      "Viral infections (HPV, Hepatitis B/C, EBV)",
      "Hormonal imbalances",
      "Lifestyle factors (obesity, alcohol, sedentary habits)",
    ],
    homeopathyApproach:
      "Homeopathic treatment in cancer care focuses on the individual's response to disease and its treatment - not on the tumour directly. Remedies are carefully selected to: (1) reduce side effects of chemotherapy and radiation, (2) support immune resilience, (3) address emotional trauma and fear, (4) improve sleep and appetite, and (5) restore energy and sense of wellbeing. This complementary approach works hand-in-hand with conventional oncology without interfering with treatment efficacy.",
    doctorNote:
      "I want to be completely honest - homeopathy is a supportive therapy in cancer, not a standalone cure. My role is to walk alongside the patient through their cancer journey. Many of my patients undergoing chemotherapy have found significant relief from nausea, fatigue, and emotional distress with carefully chosen remedies. I work in full coordination with your oncologist. The goal is better quality of life, emotional resilience, and helping the body respond better to conventional treatment.",
    relatedConditions: [
      "low-immunity",
      "chronic-fatigue",
      "insomnia",
    ],
    metaTitle: "Cancer Supportive Homeopathic Care in Pune | Sharda Homeopathy",
    metaDescription:
      "Complementary homeopathic support for cancer patients in Pune. Dr. Sharda Tawale helps manage chemo side effects, build immunity, and improve quality of life during cancer treatment.",
  },
  {
    slug: "high-cholesterol",
    name: "High Cholesterol and Heart Care",
    category: "lifestyle",
    icon: "🫀",
    shortDesc: "Management of high cholesterol levels and heart health support.",
    overview: "High cholesterol can increase your risk of heart disease and stroke. Homeopathy offers natural support for cardiovascular health and lipid management, alongside dietary and lifestyle changes.",
    symptoms: ["Often asymptomatic until complications arise", "High blood pressure (sometimes associated)"],
    causes: ["Poor diet", "Sedentary lifestyle", "Genetics", "Stress"],
    homeopathyApproach: "Homeopathic remedies aim to support metabolic function, improve lipid profiles, and promote overall cardiovascular health.",
    doctorNote: "A holistic approach combining homeopathic remedies with diet and exercise is most effective for managing cholesterol and supporting heart health.",
    relatedConditions: ["obesity", "hypertension", "diabetes-management"],
    metaTitle: "High Cholesterol Treatment in Pune | Sharda Homeopathy",
    metaDescription: "Natural high cholesterol and heart care treatment with homeopathy in Pune by Dr. Sharda Tawale."
  },
  {
    slug: "nail-deformation",
    name: "Nail Deformation",
    category: "skin",
    icon: "💅",
    shortDesc: "Changes in nail shape, texture, or color due to underlying issues.",
    overview: "Nail deformation can be a sign of nutritional deficiencies, fungal infections, trauma, or underlying systemic diseases. It can affect both fingernails and toenails.",
    symptoms: ["Brittle or crumbly nails", "Discoloration", "Changes in nail shape", "Thickening of nails"],
    causes: ["Fungal infections", "Psoriasis", "Nutritional deficiencies", "Trauma"],
    homeopathyApproach: "Homeopathy addresses the root cause of nail deformation, whether it's an infection, an autoimmune condition like psoriasis, or poor nutrient absorption.",
    doctorNote: "Nail changes can tell us a lot about your internal health. We address the systemic cause to promote the growth of healthy new nails.",
    relatedConditions: ["psoriasis", "skin-glow-anti-aging", "low-immunity"],
    metaTitle: "Nail Deformation Treatment in Pune | Sharda Homeopathy",
    metaDescription: "Effective homeopathic treatment for nail deformation and infections in Pune."
  },
  {
    slug: "melasma",
    name: "Melasma",
    category: "skin",
    icon: "✨",
    shortDesc: "Dark, discolored patches on your skin.",
    overview: "Melasma is a common skin condition characterized by brown or blue-gray patches or freckle-like spots. It's often called the 'mask of pregnancy' because it frequently occurs during pregnancy.",
    symptoms: ["Brownish colored patches", "Typically appears on the cheeks, forehead, nose, or chin"],
    causes: ["Sun exposure", "Hormonal changes", "Genetics", "Certain medications"],
    homeopathyApproach: "Homeopathic remedies work from within to regulate hormonal imbalances and improve skin pigmentation naturally without harsh chemicals.",
    doctorNote: "Consistency is key with melasma. Along with homeopathic treatment, strict sun protection is essential for best results.",
    relatedConditions: ["skin-glow-anti-aging", "acne", "thyroid-disorders"],
    metaTitle: "Melasma Treatment in Pune | Sharda Homeopathy",
    metaDescription: "Natural melasma and pigmentation treatment with homeopathy in Pune by Dr. Sharda Tawale."
  }
];

export const diseaseImages: Record<string, string> = {
  "psoriasis": "/conditions/Psoriasis.jpeg",
  "eczema": "/conditions/Skin Eczema.jpeg",
  "acne": "/conditions/Body Acne.jpeg",
  "vitiligo": "/conditions/Vitiligo.jpeg",
  "urticaria": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/EMminor2010.JPG/330px-EMminor2010.JPG",
  "asthma": "/conditions/asthma.jpg",
  "allergic-rhinitis": "/conditions/allergic-rhinitis.jpg",
  "sinusitis": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sinusitis_cdc.png/330px-Sinusitis_cdc.png",
  "tonsillitis": "/conditions/Tonsilitis and Adenoid.jpeg",
  "ibs": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Irritable_bowel_syndrome.jpg/330px-Irritable_bowel_syndrome.jpg",
  "gastritis": "/conditions/gastritis.jpg",
  "constipation": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Constipation.JPG/330px-Constipation.JPG",
  "piles-fissure": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Internal_and_external_hemorrhoids.png/330px-Internal_and_external_hemorrhoids.png",
  "arthritis": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Rheumatoid_Arthritis.JPG/330px-Rheumatoid_Arthritis.JPG",
  "back-pain": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Spinal_column_curvature-en.svg/330px-Spinal_column_curvature-en.svg.png",
  "sciatica": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sciatic_nerve2.jpg/330px-Sciatic_nerve2.jpg",
  "gout": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Gout_Signs_and_Symptoms.jpg/330px-Gout_Signs_and_Symptoms.jpg",
  "bedwetting": "/conditions/bedwetting.jpg",
  "recurrent-colds": "/conditions/recurrent-colds.jpg",
  "adhd": "/conditions/adhd.jpg",
  "growth-issues": "/conditions/growth-issues.jpg",
  "pcod-pcos": "/conditions/Hairfall and PCOD.jpeg",
  "thyroid-disorders": "/conditions/Thyroid Tumour.jpeg",
  "infertility": "/conditions/infertility.jpg",
  "menstrual-disorders": "/conditions/menstrual-disorders.jpg",
  "diabetes-management": "/conditions/diabetes-management.png",
  "hypertension": "/conditions/hypertension.png",
  "migraine": "/conditions/migraine.jpg",
  "hair-fall": "/conditions/alopecia areata.jpeg",
  "anxiety-stress-depression": "/conditions/anxiety-stress-depression.jpg",
  "insomnia": "/conditions/insomnia.jpg",
  "lack-of-concentration": "/conditions/lack-of-concentration.png",
  "autism": "/conditions/autism.png",
  "chronic-fatigue": "/conditions/chronic-fatigue.jpg",
  "spondylitis": "/conditions/spondylitis.png",
  "obesity": "/conditions/obesity.jpg",
  "low-immunity": "/conditions/low-immunity.png",
  "muscle-pain": "/conditions/muscle-pain.jpg",
  "liver-disorders": "/conditions/liver-disorders.png",
  "kidney-stone": "/conditions/kidney-stone.jpg",
  "skin-glow-anti-aging": "/conditions/skin-glow.jpg",
  "tonsils-adenoid": "/conditions/Tonsilitis and Adenoid.jpeg",
  "ent-issues": "/conditions/ent-issues.jpg",
  "hyperacidity": "/conditions/hyperacidity.jpg",
  "cancer-supportive-care": "/conditions/cancer.jpg",
  "high-cholesterol": "/conditions/high-cholesterol.jpg",
  "nail-deformation": "/conditions/nail-deformation.jpg",
  "melasma": "/conditions/Melasma.jpeg"
};
