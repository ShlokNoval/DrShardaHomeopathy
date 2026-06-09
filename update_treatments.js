const fs = require('fs');
let content = fs.readFileSync('data/treatments.ts', 'utf8');

// Remove depression object
content = content.replace(/\s*\{\s*slug:\s*"depression"[\s\S]*?\},/, '');

// Rename stress-anxiety
content = content.replace(/slug:\s*"stress-anxiety"/g, 'slug: "anxiety-stress-depression"');
content = content.replace(/name:\s*"Stress & Anxiety"/g, 'name: "Anxiety, Stress & Depression"');

// Replace references in relatedConditions
content = content.replace(/"stress-anxiety"/g, '"anxiety-stress-depression"');
// For depression in relatedConditions, replace with anxiety-stress-depression (but avoid duplicates if anxiety-stress-depression is already there)
content = content.replace(/,\s*"depression"/g, '');
content = content.replace(/"depression",\s*/g, '');
content = content.replace(/"depression"/g, '"anxiety-stress-depression"');

// Update diseaseImages block at the bottom
// We will replace the whole diseaseImages object ending to add the new images
const imageBlock = `  "cancer-supportive-care": "/conditions/tumour.jpeg",
  "gastritis": "/conditions/gastritis.jpg",
  "allergic-rhinitis": "/conditions/allergic-rhinitis.jpg",
  "asthma": "/conditions/asthma.jpg",
  "infertility": "/conditions/infertility.jpg",
  "menstrual-disorders": "/conditions/menstrual-disorders.jpg",
  "migraine": "/conditions/migraine.jpg",
  "anxiety-stress-depression": "/conditions/anxiety-stress-depression.jpg",
  "insomnia": "/conditions/insomnia.jpg",
  "autism": "/conditions/autism.png",
  "chronic-fatigue": "/conditions/chronic-fatigue.jpg"
};`;

content = content.replace(/\s*"cancer-supportive-care":\s*".*?"[\s\S]*?\};\s*$/, '\n' + imageBlock + '\n');

fs.writeFileSync('data/treatments.ts', content, 'utf8');
console.log('Treatments updated successfully.');
