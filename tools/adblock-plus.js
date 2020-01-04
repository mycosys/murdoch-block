const package = require('../package.json');
const path = require('path');
const fs = require("fs");
const list = fs.readFileSync(path.join(__dirname, "../list.tsv"), "utf8");
const parsedList = list.split("\n").map(row => row.split("\t"));

console.log(`[Adblock Plus 2.0]
! Version: ${package.version}
! Title: ${package.title}
! Last modified: ${new Date()}
! Expires: 30 days (update frequency)
! Homepage: ${package.homepage}
!
${parsedList.map(([name,domain]) => domain).join()}##body`);