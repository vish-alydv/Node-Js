const fs = require("fs");

// fs.readFile("./1.txt","utf-8",(err,data) => {
//     if (err) {
//         console.log('Error');
//     } else {
//         console.log(data);
//     }
// });


// const data = fs.readFileSync('./1.txt',"utf-8");
// console.log(data);


// fs.writeFile('./1.txt',"welcometo krmu", (err)=> {
//     if (err) {
//         console.log('Erroe Hai');
//     } else {
//         console.log('File Written SuccesFully');
//     }
// });


// fs.writeFileSync('./1.txt',"welcometo krmu 2" );
// console.log('Done')


// fs.appendFile('./1.txt',"Bye to krmu", (err)=> {
//     if (err) {
//         console.log('Error Hai');
//     } else {
//         console.log('File Update SuccesFully');
//     }
// });

// fs.appendFileSync('./1.txt',"Bye krmu 2" );
// console.log('Done')



fs.renameFile('./1.txt',"./2.txt", (err)=> {
    if (err) {
        console.log('Error Hai');
    } else {
        console.log('Update SuccesFully');
    }
});



fs.renameFile("./2.txt", (err)=> {
    if (err) {
        console.log('Error Hai');
    } else {
        console.log('Deleted SuccesFully');
    }
});