// first way also known as function statement
sum(10,45); // we can call the function before its declaration because of hoisting
// function sum(a, b){
//     a = 20;
//     b = 56;
//     c = a + b;
//     console.log(c);
//     console.log(arguments)
// }
// sum(10, 45);
// add(10,20)
function sum(a, b) {
    return a + b;
}
let result1 = sum(12,78);
console.log(result1 + "...result1");

// third way also known as arrow function
// let multiply = (a, b) => {
//     let c =  a + b;
//     console.log(c);
//     console.log(arguments); // it will give us error because arguments object is not available in arrow function
// }

let multiply = (a, b) => a * b 
let result = multiply(90,3);
console.log(result + "...result");

// second way also known as function expression
// add(20, 30); // we can not call the function before its declaration because of hoisting     
// add(20,30);
let sum1 = 10;
let add = function(a, b) {
    let c = a + b;
    console.log(c);
    console.log(arguments);
}
// add(20, 30);
console.log(typeof(add)); // function