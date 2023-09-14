const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("This is Home Page")
    }
    if(req.url === '/about'){
        res.end("Here is our strory")
    }
    res.end(`<h1 style="color:red">Error 404</h1>
    <p>the page doesnt exist or you have clicked wrong</p>
    <a href="/">Back Home</a>
    `)
}) 

server.listen(5000)