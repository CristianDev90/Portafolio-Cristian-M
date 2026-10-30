const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
  '<a class="btn btn-secondary" href="mailto:cristian.asepulveda08@gmail.com">',
  '<a class="btn btn-secondary" href="mailto:cristian.asepulveda08@gmail.com" target="_blank" rel="noopener noreferrer">'
);
fs.writeFileSync('index.html', html);
console.log('Done');