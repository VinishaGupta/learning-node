const fs=require('fs')

// fs.writeFileSync('./test.txt','hey there')

// const res=fs.readFileSync('./test.txt','binary')

// console.log(res);

// fs.readFile('./test.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(result);
//     }
// }
// )

// console.log(res);


fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());

console.log(fs.statSync('./test.txt'))