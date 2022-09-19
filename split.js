const fs = require('fs')

let data = fs.readFileSync('good-books-ds.json', 'utf-8');

JSON.parse(data).forEach((obj, i) => {
  const filepath = 'data/' + obj.id + '.json';
  fs.writeFileSync(filepath, JSON.stringify(obj));
  console.log('Wrote: ' + filepath);
});
