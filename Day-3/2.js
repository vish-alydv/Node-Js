const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/"){
        res.end("Home Page")
    } else if (req.url == "/about"){
        res.end("About Page")
    } else {
        res.end("Not Found")
    }
});

server.listen(8000);



// const http = require("http");

// const server = http.createServer((request, response) => {
//     response.end("Welcome To my Server");
// });

// server.listen(8000);