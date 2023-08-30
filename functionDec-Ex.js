// 1. FUNGSI KALKULATOR
function calculator (operand1, operand2, operator) {
    if (typeof operand1 !== "number" || typeof operand2 !== "number"){
        return "bukanAngka"
    }

   if (operator === "*") {
        return operand1 * operand2
    }   else if (operator === "/") {
        return operand1 / operand2
    }   else if (operator === "+") {
        return operand1 + operand2
    }   else if (operator === "-") {
        return operand1 - operand2
    }   
}

let nilai1 = calculator (3, 2, "*")
console.log(nilai1);
let nilai2 = calculator (3, 2, "/")
console.log(nilai2);
let nilai3 = calculator (3, 2, "+")
console.log(nilai3);
let nilai4 = calculator (3, 2, "-")
console.log(nilai4);
let nilai5 = calculator ("a", "b", "-")
console.log(nilai5);


// 2a. FUNCTION EXPRESSION

const myNameLower = function (namaSaya) {
    return namaSaya.toLowerCase()
}
let namaSaya = ("Charlene")
console.log(namaSaya);


// 2b. FUNCTION DECLARATION

function myNameUpper(myName) {
    return myName.toUpperCase()
}
let myNameUp = myNameUpper ("Charlene")
console.log(myNameUp);


