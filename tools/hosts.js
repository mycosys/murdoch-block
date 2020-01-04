const package = require('../package.json');
const path = require('path');
const fs = require("fs");
const list = fs.readFileSync(path.join(__dirname, "../list.tsv"), "utf8");
const parsedList = list.split("\n").map(row => row.split("\t"));

console.log(`##
# ${package.title}
`);
parsedList.forEach(([name,domain]) => {
  console.log(`127.0.0.1  ${domain}`);
});