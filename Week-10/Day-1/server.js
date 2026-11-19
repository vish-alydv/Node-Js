const express = require("express");
const userRouter = require("./routes/user.route");
const { connection } = require("./db")
const {auth} = require("./middleware/auth.middleware")

const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.get("/home", (req, res) => {
    res.send({ msg: "Welcome To Note Application" });
});

app.use(auth);
app.get("/dashboard" ,(req, res) => {
    res.send({ msg: "Welcome To Note Application" });
});

app.listen(8080, async () => {
    try {
        await connection;
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection Error:", error.message);
    }
    console.log("Server Started")
});