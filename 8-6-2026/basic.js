//let , var, const 
// what is script language
let name = "Anshika";
console.log(typeof(name)); // string
let a = 100;
console.log(typeof(a)); //number
let marks = 67.6;
console.log(typeof(marks)); //number
let flag = true;
console.log(typeof(flag)); //boolean
let students = ["ram", "shyam", "mohan"];
console.log(typeof(students)); //object
let b;
console.log(typeof(b)); //undefined
let employee = {
    name: 'ram',
    age: 28,
    salary: 23000
}
console.log(typeof(employee));  //object
let d = ' ';
console.log(typeof(d)); //string
console.log(5+ "5"); //55
console.log(5 == "5"); //true
console.log(5 === "5"); //false
// objects k means h properties+ functions, arrays k means h ordered collection of data, functions k means h reusable block of code
// objects m curly bracket, arrays m square bracket, functions m round bracket,
// dynmaically typed languages m runtime pr engine ko pta chl jata h ki ye vaiable kis type ka hai
// runtime pr ek data type se dusre data type me convert ho jana usko lossely typed datatype khte h
//symbol is a new data type in js which is used to create unique identifiers for objects. It is a primitive data type and is immutable. It is often used to create private properties in objects.
