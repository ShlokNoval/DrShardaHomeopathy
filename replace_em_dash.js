const fs = require('fs');
const path = require('path');

function replaceEmDashesInDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!['node_modules', '.next', '.git'].includes(file)) {
                replaceEmDashesInDir(fullPath);
            }
        } else {
            if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
                let content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('-')) {
                    const newContent = content.replace(/-/g, '-');
                    fs.writeFileSync(fullPath, newContent, 'utf8');
                    console.log(`Replaced em dashes in: ${fullPath}`);
                }
            }
        }
    }
}

replaceEmDashesInDir(__dirname);
console.log("Done replacing em dashes.");
