'use strict'

//Use params

// @ts-ignore
var param = process.argv.slice(2);
var number1 = parseFloat(param[0]);
var number2 = parseFloat(param[1]);

var plantilla = `
    The sum is: ${number1 + number2}
    The substraction is: ${number1 - number2}
    The division is: ${number1 / number2}
    The multiplication is: ${number1 * number2}
`;

console.log(plantilla);