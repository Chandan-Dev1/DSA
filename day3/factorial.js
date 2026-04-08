const prompt =  require("prompt-sync")()

let n = Number(prompt("enter the number"))
fact=1;

for(let i=1;i<=n;i++){
fact=fact*i
}
console.log("factorial is =",fact)
