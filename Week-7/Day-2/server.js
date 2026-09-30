const express = require("express");
const {} = require("./db");
const { connection } = require("mongoose");

const app = express();

app.use()

app.get("/",(req,res)=> {
    res.send({msg:"Welcome"});
});

app.get("/read", async (req,res)=> {
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (error) {
        res.send({msg:"Something Went Wrong"})
    }
});


app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected")
    } catch (error) {
        console.log(error);
    }
    console.log("Server Started")
})