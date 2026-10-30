const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
  '<span data-i18n="contact.email">Email me</span>',
  '<span data-i18n="contact.email">Email me</span>' +
  '<span class="visually-hidden" data-i18n="a11y.newTab">(opens in a new tab)</span>'
);
fs.writeFileSync('index.html', html);
console.log('Done');