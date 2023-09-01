// 1. UBAH CALCULATOR JADI ARROW FUNCTION
let calculator = (operand1, operand2, operator) => {
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



// 2a. UBAH CELCIUS KE FAHRENHEIT DENGAN FUNGSI ARROW
let convCelciusFahrenheit = celcius => (9 / 5 * (celcius)) + 32

let fahrenheit = convCelciusFahrenheit(36)
console.log(fahrenheit);



// 2b. UBAH CELCIUS KE FAHRENHEIT DENGAN FUNGSI CURRYING
function convCelciusFahrenheit2(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return (c / b * a) + d
            }
        }
    }
}
console.log(convCelciusFahrenheit2(36)(5)(9)(32));

