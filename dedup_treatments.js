const fs = require('fs');

let content = fs.readFileSync('data/treatments.ts', 'utf8');

// The diseaseImages block starts near the end
const startPattern = /export const diseaseImages: Record<string, string> = \{/;
const startIndex = content.search(startPattern);

if (startIndex !== -1) {
    const headerEndIndex = content.indexOf('{', startIndex) + 1;
    const preContent = content.substring(0, headerEndIndex);
    const postContent = content.substring(headerEndIndex);
    
    const blockEndIndex = postContent.indexOf('};');
    const blockText = postContent.substring(0, blockEndIndex);
    const remainder = postContent.substring(blockEndIndex);
    
    // Parse lines to remove duplicates (keeping the last occurrence of each key)
    const lines = blockText.split('\n');
    const keyMap = new Map();
    
    const finalLines = [];
    
    for (const line of lines) {
        if (!line.trim()) continue;
        const match = line.match(/^\s*"([^"]+)":\s*"(.*?)",?$/);
        if (match) {
            keyMap.set(match[1], match[2]);
        }
    }
    
    for (const [key, value] of keyMap.entries()) {
        finalLines.push(`  "${key}": "${value}"`);
    }
    
    const newBlockText = '\n' + finalLines.join(',\n') + '\n';
    
    const newContent = preContent + newBlockText + remainder;
    fs.writeFileSync('data/treatments.ts', newContent, 'utf8');
    console.log('Duplicates removed successfully.');
} else {
    console.log('Could not find diseaseImages block.');
}
