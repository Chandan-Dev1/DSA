const promt = require("prompt-sync")()
let n = Number(promt("enter the number "))

for(let i=1;i<=10;i++){
    console.log(`${n}*${i}=${i*n}`)
}