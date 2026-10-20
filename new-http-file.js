const http=require('http')

const myServer=http.createServer((req,res)=>{
    res.end('hello')
    console.log('abc');
})

myServer.listen(8000,()=>{
    console.log("hello2");
})