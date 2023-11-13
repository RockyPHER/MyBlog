const fs = require('fs');

const sourceContent = fs.readFileSync('nav.html', 'utf8');

document.write(sourceContent);

