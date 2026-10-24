const http=require('http')
const url=require('url')

const myServer=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url);
    console.log(myUrl);
    switch(req.url){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            res.end("About Page")
    }
})

myServer.listen(8000,()=>console.log("hello"));