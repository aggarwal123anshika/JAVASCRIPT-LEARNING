// HOISTING IN JAVASCRIPT :- HOISTING MEANS VARIABLES AND FUNCTIONS MOVE TOP OF THE MEMORY DURING THE FUNCTION DECLARATION 
greet()
function greet() {
    console.log("SATURDAY");
}

console.log(date); //undefined because memory m ek placeholder abn gya h bs usko abhi value nhi mili h 
var date = 16;

console.log(date); // reference error aayegi ismee

console.log(date); //in case of let variable this shows an error
let date  = 23;

// function expression
greet() // in case of function we also do not print the value this shows the errorbefore initialisatio
let greet = function() {
    console.log("saturday");
 }
