const { readFileSync, writeFileSync} = require('fs')
//same as const fs = req('fs') and fs.readfilesync or writefile

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/resultsync.txt',
   `Here is the result : ${first}, ${second}`,
   { flag : 'a'}
)