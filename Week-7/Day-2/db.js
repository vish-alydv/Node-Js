const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/randomdb");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = {connection,userModel}