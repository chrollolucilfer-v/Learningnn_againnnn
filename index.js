// reading and writing from message.txt
const fs = require("fs");
// creating a constant named fs which requires native node modules
// named fd short for file system;

fs.writeFile('second.txt', "He there this is the text going in message", (err)=>{
    if (err) throw err;
    console.log("the FIle has been saved!;");
});

fs.readFile('second.txt', "utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});