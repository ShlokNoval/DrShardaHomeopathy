const fs = require('fs');

const diseaseImages = {
  "psoriasis": "/conditions/Psoriasis.jpeg",
  "eczema": "/conditions/Skin Eczema.jpeg",
  "acne": "/conditions/Body Acne.jpeg",
  "vitiligo": "/conditions/Vitiligo.jpeg",
  "urticaria": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/EMminor2010.JPG/330px-EMminor2010.JPG",
  "asthma": "/conditions/asthma.jpg",
  "allergic rhinitis": "/conditions/allergic-rhinitis.jpg",
  "sinusitis": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sinusitis_cdc.png/330px-Sinusitis_cdc.png",
  "tonsillitis": "/conditions/Tonsilitis and Adenoid.jpeg",
  "ibs": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Irritable_bowel_syndrome.jpg/330px-Irritable_bowel_syndrome.jpg",
  "gastritis": "/conditions/gastritis.jpg",
  "constipation": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Constipation.JPG/330px-Constipation.JPG",
  "piles": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Internal_and_external_hemorrhoids.png/330px-Internal_and_external_hemorrhoids.png",
  "arthritis": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Rheumatoid_Arthritis.JPG/330px-Rheumatoid_Arthritis.JPG",
  "back pain": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Spinal_column_curvature-en.svg/330px-Spinal_column_curvature-en.svg.png",
  "sciatica": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sciatic_nerve2.jpg/330px-Sciatic_nerve2.jpg",
  "gout": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Gout_Signs_and_Symptoms.jpg/330px-Gout_Signs_and_Symptoms.jpg",
  "bedwetting": "/conditions/bedwetting.jpg",
  "recurrent colds": "/conditions/recurrent-colds.jpg",
  "adhd": "/conditions/adhd.jpg",
  "growth issues": "/conditions/growth-issues.jpg",
  "pcod": "/conditions/Hairfall and PCOD.jpeg",
  "pcos": "/conditions/Hairfall and PCOD.jpeg",
  "thyroid": "/conditions/Thyroid Tumour.jpeg",
  "infertility": "/conditions/infertility.jpg",
  "menstrual disorders": "/conditions/menstrual-disorders.jpg",
  "diabetes": "/conditions/diabetes-management.png",
  "hypertension": "/conditions/hypertension.png",
  "migraine": "/conditions/migraine.jpg",
  "alopecia areata": "/conditions/alopecia areata.jpeg",
  "hair fall": "/conditions/alopecia areata.jpeg",
  "anxiety": "/conditions/anxiety-stress-depression.jpg",
  "insomnia": "/conditions/insomnia.jpg",
  "lack of concentration": "/conditions/lack-of-concentration.png",
  "autism": "/conditions/autism.png",
  "chronic fatigue": "/conditions/chronic-fatigue.jpg",
  "spondylitis": "/conditions/spondylitis.png",
  "obesity": "/conditions/obesity.jpg",
  "low immunity": "/conditions/low-immunity.png",
  "muscle pain": "/conditions/muscle-pain.jpg",
  "liver disorders": "/conditions/liver-disorders.png",
  "kidney stone": "/conditions/kidney-stone.jpg",
  "skin glow": "/conditions/skin-glow.jpg",
  "tonsils": "/conditions/Tonsilitis and Adenoid.jpeg",
  "ent issues": "/conditions/ent-issues.jpg",
  "hyperacidity": "/conditions/hyperacidity.jpg",
  "cancer": "/conditions/cancer.jpg",
  "high cholesterol": "/conditions/high-cholesterol.jpg",
  "nail deformation": "/conditions/nail-deformation.jpg",
  "melasma": "/conditions/Melasma.jpeg"
};

let content = fs.readFileSync('data/blog.ts', 'utf8');

let splitContent = content.split('// ─── NEW TREATMENT-SPECIFIC BLOGS (48 posts) ─────────────────────────────');

if (splitContent.length < 2) {
    console.error("Could not find the separator comment in blog.ts!");
    process.exit(1);
}

let topPart = splitContent[0];
let bottomPart = splitContent[1];

let regex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`,\s*author:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*readTime:\s*"([^"]+)",\s*featuredImage:\s*"([^"]+)",?\s*\}/g;

bottomPart = bottomPart.replace(regex, (match, slug, title, category, excerpt, contentStr, author, date, readTime, featuredImage) => {
    let diseaseMatch = title.match(/Best Homeopathy (?:Treatment for |for )?(.*?)(?: in Pune)? — (.*)/i);
    let newTitle = title;
    let diseaseName = "";
    
    if (diseaseMatch) {
        diseaseName = diseaseMatch[1].trim();
        let subtitle = diseaseMatch[2].trim();
        newTitle = `Understanding ${diseaseName}: ${subtitle}`;
    } else {
        newTitle = title.replace(/Best Homeopathy Treatment for /i, 'Understanding ').replace(/ in Pune/i, '');
        let parts = newTitle.split('—');
        if (parts.length > 1) {
            let extracted = title.match(/(?:for )?(.*?)(?: in Pune)/i);
            if (extracted) diseaseName = extracted[1].trim();
        }
    }
    
    if (!diseaseName) diseaseName = "this condition";

    let newSlug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    contentStr = contentStr.replace(/🏆 Why Homeopathy Is the Best Treatment for (.*?)\b/gi, '🏆 The Homeopathic Approach to $1');
    contentStr = contentStr.replace(/Why Homeopathy Is the Best Treatment for (.*?)\b/gi, 'The Homeopathic Approach to $1');

    let seoStatement = ` For those seeking expert care, Dr. Sharda Homeopathy is widely recognized as the best homeopathy clinic for ${diseaseName} treatment in Pune.`;
    
    let firstPIndex = contentStr.indexOf('</p>');
    if (firstPIndex !== -1) {
        contentStr = contentStr.substring(0, firstPIndex) + seoStatement + contentStr.substring(firstPIndex);
    }

    contentStr = contentStr.replace(/<p><strong>📍 Sharda Homeopathy Clinic, Pune.*?<\/strong><\/p>/gi, '');

    let newImage = featuredImage;
    if (diseaseName !== "this condition") {
        let key = Object.keys(diseaseImages).find(k => 
            diseaseName.toLowerCase().includes(k) || k.includes(diseaseName.toLowerCase())
        );
        if (key) {
            newImage = diseaseImages[key];
        }
    }

    return `{
    slug: "${newSlug}",
    title: "${newTitle}",
    category: "${category}",
    excerpt: "${excerpt}",
    content: \`${contentStr}\`,
    author: "${author}",
    date: "${date}",
    readTime: "${readTime}",
    featuredImage: "${newImage}",
  }`;
});

fs.writeFileSync('data/blog.ts', topPart + '// ─── NEW TREATMENT-SPECIFIC BLOGS (48 posts) ─────────────────────────────\n' + bottomPart, 'utf8');
console.log("Updated blog.ts successfully!");
