const fs=require('fs')

// fs.writeFileSync('./test.txt','hey there')

const res=fs.readFileSync('./test.txt','binary')

console.log(res);