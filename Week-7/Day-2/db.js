// Step -1 import mongooose module
const mongoose = require("mongoose");

// step -2 build connection with DB
const connection = mongoose.connect("mongodb+srv://thevishaleditor_db_user:@cluster-1.ces0w29.mongodb.net/?appName=Cluster-1");
// const connection = mongoose.connect("mongodb+srv://thevishaleditor_db_user:<db_password>@cluster-1.ces0w29.mongodb.net/class-1");

// step -3 build Schema/structure
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  Password: String,
});

// step -4 Create userModel for creating Document
const userModel = mongoose.model("user", userSchema);

// step - 5 Exports module that uses in server
module.exports = { connection, userModel };