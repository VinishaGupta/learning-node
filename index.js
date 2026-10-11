// const math=require("fs")
// console.log(123);


// console.log(math);
// console.log(math.add(2,3));
// console.log(math.sub(2,3));

// console.log(math.addFn(2,3));
// console.log(math.subFn(2,3));
// console.log(math);
// console.log(math.add(2,3));
// console.log(math.sub(2,3));


const http=require('http')

const myServer=http.createServer((req,res)=>{
    console.log("New request received");
    res.end('hello from server');
})


myServer.listen(8000,()=>console.log(`Server started
    http://localhost:8000/`));