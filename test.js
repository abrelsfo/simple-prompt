var pk = require('./');
var fs = require('fs');
//console.log(fs.readFileSync('./pk.json', 'utf8'));
console.log(pk(JSON.parse(fs.readFileSync('./pk.json', 'utf8'))));
