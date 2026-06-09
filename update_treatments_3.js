const fs = require('fs');
let content = fs.readFileSync('data/treatments.ts', 'utf8');

// Replace PCOD/PCOS name with Hair Fall
content = content.replace(/name:\s*"PCOD \/ PCOS"/, 'name: "Hair Fall"');

// Replace the old Hair Fall name with Alopecia Areata
content = content.replace(/name:\s*"Hair Fall"/g, (match, offset) => {
    // Only replace the second occurrence (the original Hair Fall, not the one we just made)
    // Actually, safer to use the slug
    return match; // We'll handle this differently
});

content = content.replace(/slug:\s*"hair-fall",\s*name:\s*"Hair Fall"/, 'slug: "hair-fall",\n    name: "Alopecia Areata"');

// Insert new treatment for melasma
const melasmaTreatment = `  {
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

export const diseaseImages: Record<string, string> = {`;

content = content.replace(/];\s*export const diseaseImages: Record<string, string> = \{/, melasmaTreatment);

// Append melasma to the end of the diseaseImages block
const imageBlockAdditions = `  "melasma": "/conditions/Melasma.jpeg"
};`;
content = content.replace(/\};\s*$/, ',\n' + imageBlockAdditions + '\n');

fs.writeFileSync('data/treatments.ts', content, 'utf8');
console.log('Treatments updated successfully.');
