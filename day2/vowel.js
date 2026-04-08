const prompt = require("prompt-sync")();

let s = prompt("Enter the string: ");
let consonant = 0;
let vowel = 0;

for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i).toLowerCase();

    if (ch >= 'a' && ch <= 'z') {
        switch (ch) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowel++;
                break;
            default:
                consonant++;
        }
    }
}

console.log("Consonant:", consonant);
console.log("Vowel:", vowel);