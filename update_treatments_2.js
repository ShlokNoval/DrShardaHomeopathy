const fs = require('fs');
let content = fs.readFileSync('data/treatments.ts', 'utf8');

// Rename Kidney Stone
content = content.replace(/name:\s*"Kidney Stone & Creatinine Issues"/, 'name: "Kidney Stone"');

// Insert new treatments at the end of the treatments array
const newTreatments = `  {
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
  }
];

export const diseaseImages: Record<string, string> = {`;

content = content.replace(/];\s*export const diseaseImages: Record<string, string> = \{/, newTreatments);

// Update diseaseImages map. We will simply replace specific strings for images that were already in the block,
// and append new ones at the very end.
content = content.replace(/"obesity":\s*".*?"/, '"obesity": "/conditions/obesity.jpg"');
content = content.replace(/"cancer-supportive-care":\s*".*?"/, '"cancer-supportive-care": "/conditions/cancer.jpg"');
content = content.replace(/"kidney-stone":\s*".*?"/, '"kidney-stone": "/conditions/kidney-stone.jpg"');

// Append high-cholesterol and nail-deformation to the end of the diseaseImages block
const imageBlockAdditions = `  "high-cholesterol": "/conditions/high-cholesterol.jpg",
  "nail-deformation": "/conditions/nail-deformation.jpg"
};`;
content = content.replace(/\};\s*$/, ',\n' + imageBlockAdditions + '\n');

fs.writeFileSync('data/treatments.ts', content, 'utf8');
console.log('Treatments updated successfully.');
