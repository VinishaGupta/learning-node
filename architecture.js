const fs=require('fs')

// blocking

// console.log(1);

// const block=fs.readFileSync('./test.txt','utf-8');
// console.log(block);

// console.log(2);

// ============================

// non-blocking

console.log(1);

fs.readFile('./test.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
    } else{
        console.log(res);
    }
});


console.log(2);
