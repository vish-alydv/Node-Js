const express = require("express");
const fs = require("fs");

const app = express();


app.get("/", (req , res)=> {
    res.send({msg:"welcome to krmu application"})
})

app.get("/about", (req , res)=> {
    res.send({msg:"welcome to about page"})
})

app.get("/login", (req , res)=> {
    res.send({msg:"welcome to login page "})
})


app.get("/read", (req , res)=> {
    const data = fs.readFileSync("./db.json","utf-8");

    const jsdata = JSON.parse(data);
    console.log(jsdata, typeof jsdata);
    res.send(jsdata)
})

app.get("/stread", (req , res)=> {
    const data = fs.readFileSync("./db.json","utf-8");

    const jsdata = JSON.parse(data);
    console.log(jsdata, typeof jsdata);
    res.send(jsdata.student)
})


app.listen(8080,()=> {
    console.log("Server Started")
})