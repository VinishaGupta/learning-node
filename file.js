const fs=require('fs')

// fs.writeFileSync('./test.txt','hey there')

const res=fs.readFile('./test.txt','binary')

console.log(res);