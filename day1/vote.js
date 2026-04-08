const promt = require("prompt-sync")()

let age = Number(promt("enter the age"))
let name = promt("enter the name")

if(age>18)console.log( "yes you can vote")
else console.log( "not eligible for vote ")

