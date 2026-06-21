console.log("hello mitro!");
// let person = {
//     firstName : 'Anshika',
//     lastName : 'Aggarwal',
//     "job" : "Software Developer",
//     age : 20
// }
// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person["job"]);

// OBJECTS IS MUTUABLE OR IMMUTABLE?

// let Employee1 = {
//     firstName : 'Anshika',
//     lastName : 'Aggarwal',
//     jodId : 123,
//     attendance : true,
//     salary : 100000
// }
// // mutuable

// Employee1.jodId = 321
// console.log(Employee1);

// // DOT OPERATOR V/S BRACKET OPERATOR

// console.log(Employee1['salary']);
// const nameKey = 'Name'
// console.log(Employee1['last' + nameKey]);

// // HERE BRACKET MEANS GENERALLY AN EXPRESSION WHICH IS MAINLY RETURN THE EXPRESSION

// const info = prompt("ENter the Info you want!!");
// console.log(Employee1[info]);

// TO ADD THE MANUALLY ADD THE OBJECTS NEW KEY VALUYE PAIR

// Employee1.location = "pune";
// console.log(Employee1);
// Employee1['email'] = "anshika@gmail.com";
// console.log(Employee1);

// USER PROFILE

// let user = {
//     name : 'Anshika Aggarwal',
//     age : 20,
//     city : 'Ghaziabad',
//     profession : 'Software engineer'
// }
// console.log("keys..", Object.keys(user));
// console.log("Values..", Object.values(user));
// console.log("has age..", user.hasOwnProperty('last name'));

// MERGING OF OBJECTS

let obj1 = {
    a : 1,
    b : 2
}
let obj2 = {
    c : 3,
    d : 4
}
let mergedObj = Object.assign({},obj1,obj2)
console.log(mergedObj);

// SPREAD OPERATOR

let obj3 = {...obj1,...obj2}
console.log(obj3);

// OBJECT FREEZE

let settings = {
    theme : 'dark',
    notification : true
}
// LOGIC 4 -> CLICK KARNE K BAAD DOM
Object.freeze(settings)
// freeze mainly used for freeze the object value after
//  tha it does not change the value of that object
settings.theme = "light"
console.log(settings);