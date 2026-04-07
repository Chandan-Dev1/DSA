const prompt = require('prompt-sync')()

let year = Number(prompt("enter the year "));
if(year%4==0 && year%100!=0)console.log("yes leap year");
else if (year%400==0)console.log("yes leap year")
else console.log("its not leap year");