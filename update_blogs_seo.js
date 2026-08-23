const fs = require('fs');

let content = fs.readFileSync('data/blog.ts', 'utf8');

// Regex to match ANY blog block (including the first two, since they all follow the same pattern)
let regex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`,\s*author:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*readTime:\s*"([^"]+)",\s*featuredImage:\s*"([^"]+)",?\s*\}/g;

// Create a date generator starting from Jan 1, 2023
let currentDate = new Date('2023-01-10');

content = content.replace(regex, (match, slug, title, category, excerpt, contentStr, author, date, readTime, featuredImage) => {
    
    // Attempt to extract disease name from title (e.g. "Understanding Asthma: Breathe Freely")
    let diseaseName = "this condition";
    let titleMatch = title.match(/Understanding (.*?):/i);
    if (titleMatch) {
        diseaseName = titleMatch[1].trim();
    } else {
        // Fallback for the first two blogs or any other format
        if (title.toLowerCase().includes("monsoon allergies")) diseaseName = "Monsoon Allergies";
        else if (title.toLowerCase().includes("stress and anxiety")) diseaseName = "Stress and Anxiety";
        else {
            let splitTitle = title.split(':');
            if (splitTitle.length > 1) {
                diseaseName = splitTitle[0].replace('Understanding', '').trim();
            } else {
                diseaseName = title.split(' ')[0]; // just grab first word
            }
        }
    }

    // 1. Remove previous SEO line if it exists
    let previousSEORegex = / For those seeking expert care, Dr. Sharda Homeopathy is widely recognized as the best homeopathy clinic for .*? treatment in Pune\./g;
    contentStr = contentStr.replace(previousSEORegex, '');

    // Check if the new SEO block is already there to prevent duplication
    if (!contentStr.includes("widely recognized as the best homeopathy clinic for")) {
        // 2. Prepend prominent SEO block
        let seoBlock = `
<div style="background: rgba(43, 92, 61, 0.05); border-left: 4px solid #2B5C3D; padding: 1rem 1.5rem; margin-bottom: 2rem; border-radius: 0 8px 8px 0;">
  <p style="margin: 0; color: #1a3b26; font-size: 1.05rem;">
    <strong>Looking for the Best Homeopathy Treatment for ${diseaseName}?</strong><br/>
    Dr. Sharda Homeopathy is widely recognized as the best homeopathy clinic for ${diseaseName} treatment in Pune, offering natural, safe, and lasting results.
  </p>
</div>
`;
        // Insert right after the first <h2> or at the very top
        let firstH2Index = contentStr.indexOf('<h2>');
        if (firstH2Index !== -1) {
            contentStr = contentStr.substring(0, firstH2Index) + seoBlock + contentStr.substring(firstH2Index);
        } else {
            contentStr = seoBlock + contentStr;
        }
    }

    // 3. Assign sequential date to show consistency
    // Increment by 10 to 18 days
    currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 8) + 10);
    let newDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD

    // 4. Override specific images
    let newImage = featuredImage;
    if (slug.includes("pcod") || slug.includes("pcos")) {
        newImage = "/conditions/pcod-ai.png";
    } else if (slug.includes("recurrent-cold") || slug.includes("infection") || slug.includes("tonsil") || slug.includes("child")) {
        if (category.toLowerCase().includes("child") || category.toLowerCase().includes("pediatric") || slug.includes("child")) {
            newImage = "/conditions/child-infection-ai.png";
        }
    } else if (slug.includes("melasma")) {
        newImage = "/conditions/melasma-ai.png";
    }

    return `{
    slug: "${slug}",
    title: "${title}",
    category: "${category}",
    excerpt: "${excerpt}",
    content: \`${contentStr}\`,
    author: "${author}",
    date: "${newDate}",
    readTime: "${readTime}",
    featuredImage: "${newImage}",
  }`;
});

fs.writeFileSync('data/blog.ts', content, 'utf8');
console.log("Updated blog SEO structure, images, and randomized dates!");
