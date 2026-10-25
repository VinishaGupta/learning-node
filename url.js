const http=require('http')
const url=require('url')

const myServer=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    switch(myUrl.pathname){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            res.end("About Page")
            break;
        case "/search":
            const search=myUrl.query.search_query;
            res.end("this is "+search)
            break;
        default:
            res.end("404 Not Found")
    }
})

myServer.listen(8000,()=>console.log("hello"));