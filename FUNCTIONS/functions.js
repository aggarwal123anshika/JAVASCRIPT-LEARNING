console.log("welcome to tutedude");


// function Logger() {
//     console.log("Hello ji mitro!!");
//     console.log("aaj masum bhaut acha hai🕺")
// }
// Logger(); //function calling,invoke,run,etc.

// function declarations and // function definations

// function k signature ko function declarations bolte hai or jb hm ek fucntion ko banate h or template banate hai
// function ki body ko function definations bolte hai
// function signature -> parameter

// let electricity = true //global scope we can access this varianble anywhere in this code
// function Juicer(apples, oranges) {
//     // parameters are local variables like apples and oranges
//     let juice = `juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }
// const glass = Juicer(3,4)
// console.log(glass);

// function callAge(birthYear) {
//     const age = 2025 - birthYear
//     return age;
// }
// const output = callAge(2000);
// console.log(output);

// ANONYMOUS FUNCTION -> IDENTIFY
// FUNCTION EXPRESSION

let electricity = true;
function Juicer(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice
}
console.log(Juicer);
let glass = Juicer(2,3)
console.log(glass);
