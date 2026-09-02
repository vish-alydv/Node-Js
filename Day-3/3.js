// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.url == "/data"){
//         const data = fs.readFileSync("./1.json","utf-8");
//         res.end(data);
//     }});

// server.listen(8000);





const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/"){
        res.end("Home Page")
    } else if (req.url == "/about" && req.method=="POST"){
        res.end("About Page")
    } else {
        res.end("Not Found")
    }
});

server.listen(8000,() =>{
    console.log("Server Started");
});
