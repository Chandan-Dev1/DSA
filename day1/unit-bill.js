const prompt = require("prompt-sync")()

let unit = Number(prompt("enter the unit"))

if(unit>0 && unit<=100)
{
    console.log(100*4.2)
}
else if(unit>100 && unit<=200) console.log()