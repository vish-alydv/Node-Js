const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    status: Boolean,
});

const userModel = mongoose.model("user", userSchema);

const main = async () => {

    await mongoose.connect("mongodb://127.0.0.1:27017/disc");
    console.log("Db connected");

    // mongoose.disconnect();
    // console.log("Db Disconnected");

    await userModel.insertOne({
        name: "Bhavesh",
        email: "by",
        age: 21,
        status: true,
    });
    console.log("Data Created");

    

}

main();
