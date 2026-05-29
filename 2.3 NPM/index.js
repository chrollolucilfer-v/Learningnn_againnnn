// node package manager
//  a place which collects module created by people
// to create a package json we need to run npm init
// this generates package.json
// whicn containns descritions

// npm install something
var generateName = require("sillyname");


// import generateName from "sillyname";

var sillyName = generateName();

console.log(` My name is ${sillyName}`)