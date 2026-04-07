const prompt = require('prompt-sync')()

let num = Number(prompt("enter the number"))

if(num%2==0) console.log("Even number")
else console.log("odd nummber")