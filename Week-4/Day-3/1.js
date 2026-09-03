const express  = require("express");


const app = express()


const middlewere1 = (req,res , next) => {
    console.log(1);
    next()
    console.log(2);
};

app.use(middlewere1)

// const middlewere2 = (req,res , next) => {
//     console.log(3);
//     next()
//     console.log(5);
// };

// app.use(middlewere2)



const timeLoggerMiddlewer = (req,res , next) => {
    const startTime = Date.now()
    next()
    const endTime = Date.now()


    console.log(`Time Taken By Route is ${endTime- startTime}ms`)
};

app.use(timeLoggerMiddlewer);


const routeLoggerMiddlewer = (req,res , next) => {
    const record = `Route name is: ${req.url} and Methond is :${req.method}\n}`

    fs.appendFileSync("./1.txt")
    next()


    console.log(`Time Taken By Route is ${endTime- startTime}ms`)
};

app.use(routeLoggerMiddlewer);



const watchmanMiddlewer = (req,res , next) => {
    const record = `Route name is: ${req.url} and Methond is :${req.method}\n}`

    fs.appendFileSync("./1.txt")
    next()


    console.log(`Time Taken By Route is ${endTime- startTime}ms`)
};

app.use(routeLoggerMiddlewer);


app.get("/home",(req,res)=>{
    console.log("Home Page");
    res.send("Home Page")
})



app.listen(8080, () => {
    console.log("Server")
})