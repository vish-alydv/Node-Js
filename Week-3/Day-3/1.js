const express = require("express");


const app = express();

app.get("/",(req,res) => {
    res.send("Welcome To Express Server");
});

app.get("/home",(req,res) => {
    res.send("Home Page");
});


app.listen(8080,()=> {
    console.log("Server Started")
})