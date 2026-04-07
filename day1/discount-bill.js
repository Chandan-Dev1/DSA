const prompt = require("prompt-sync")()
let PayableAmount = 0
let amount = Number(prompt("Enter the amount "))

if(amount>0 && amount<=5000){
     console.log("you can pay only",PayableAmount=amount,"sorry not discount you can by more then 5000 get discount  ")
}
else if(amount>5001 && amount <=7000){
 console.log("you can pay only",PayableAmount=amount-(5*amount)/100 ,"your discount amount is 5%")
}

else if(amount>7001 && amount <=9000){
    console.log("you can pay only",PayableAmount=amount-(10*amount)/100 ,"your discount amount is 10%")
    
}

else if(amount>9001){
     console.log("you can pay only",PayableAmount=amount-(20*amount)/100 ,"your discount amount is 20%")
}

else{
    console.log("wrong Amount input please check amount right or not ")
}