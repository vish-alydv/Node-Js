const express = require("express");

const {connection} = require("./db")


const app = express();


app.get("/home", (req,res)=> {
    res.send({msg : "Welcome To Note Application"});
});


app.listen(8080, async() => {
    try {
        await connection;
        console.log("DB Connected")
    } catch (error) {
        console.log("error")
    }
    console.log("Server Started")
});