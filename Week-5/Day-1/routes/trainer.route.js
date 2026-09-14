const express = require("express");

const fs = require("fs");


const studentRouter = express.Router();

studentRouter.get("/readu",(req,res)=> {
    const data = JSON.parse(fs.readFileSync("./krmu.json"),"utf-8");
    res.send(data.trainer);
});


module.exports = {trainerRouter}