const Procees = require("process");


const userIp = process.argv;
console.log(userIp);


const ops = Procees.argv[2];
const a = +Procees.argv[3];
const b = +Procees.argv[4];



function add(x,y) {
    console.log(x+y);
}

function sub(x,y) {
    console.log(x-y);
}


if (ops == "add"){
    add(a,b);
} else{
    sub(a,b)
}