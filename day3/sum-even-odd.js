const prompt = require("prompt-sync")()
let a = Number(prompt("Enter the fist number"))
let b = Number(prompt("enter the second number"))
let even=0
let odd=0

if(a>b){
    let c=a
    a=b;
    b=c
}
for(let i =a ;i<=b;i++){
    if(i%2==0)  even +=i
    else  odd +=i
}
console.log(even)
console.log(odd)