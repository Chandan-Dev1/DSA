const prompt = require("prompt-sync")()

console.log("1.Area of Circle")
console.log("2 Area of Traingle")
console.log("3 Area of Rectangle")

let num = Number(prompt("enter the your choice "))
switch(num){
    case 1:{
        const pi = 3.14
        let redius = Number(prompt("enter the redius"))
        let area =pi*redius*redius
        console.log("area of Circle is = ",area)
        break
    }

    case 2:{
        let length =Number(prompt("enter the length"))
        let width  =Number(prompt("enter th with "))
        console.log("area of traingle is =",length*width)
        break
    }

    case 3:{
        let height = Number(prompt("enter the height "))
        let base = Number(prompt("enter the base "))
        console.log("area of rectangale is = ",0.5*height*base)
    }
}