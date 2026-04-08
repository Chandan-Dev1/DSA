const prompt = require("prompt-sync")()

let n = Number(prompt("enter the number"))

for(let i=1;i<=n;i++){
    if(n%i==0)console.log(i)
}