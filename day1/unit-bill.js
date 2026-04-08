const prompt = require("prompt-sync")()

let unit = Number(prompt("enter the unit"))

if(unit>0 && unit<=100)console.log(100*4.2)

else if(unit>100 && unit<=200) console.log((100*4.2) + (unit-100)*6)
else if(unit>200 && unit<=400)console.log((100*4.2)+(100*6)+(unit-200)*8)
else if(unit>=400)console.log((100*4.2)+(100*6)+(200*6)+(unit-400)*13)
else console.log("invailid input please check ")