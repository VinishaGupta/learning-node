const http=require('http')

const myServer=http.createServer((res,req)=>{
    res.end('hello')
    console.log(req);
})

myServer.listen(8000,()=>{
    console.log("hello2");
})