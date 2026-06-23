console.log("Good morning!!");
// let Students = ['anshika','anshu','anshik','anshi'];
// console.log(Students);
// console.log(Students[1]);
// for(let i =0; i<Students.length; i++) {
//     console.log(Students[i]);
// }

// let Skills = {
//     frontEnd : 'React',
//     backEnd : 'Express',
//     DataBase : 'MongoDB'
// }

// let EmployeeInfo = ["anshika",true,20000.00,321,Skills]
// console.log(EmployeeInfo);

// ARRAY CAN BE CREATED USING ARRAY CONSTRUCTOR
// default, parameterized

// let arr = new Array("Anshika","Aggarwal","Anshu")
// console.log(arr);
// let arr1 = ["anshika","aggarwal","anshu"];

// console.log(typeof(arr));
// console.log(typeof(arr1));


// const arr = ["anshika","aggarwal","anshu"]
// // ARRAY MUTABLE?
// // ARRAY CONST
// arr[0] = "vanshika"
// console.log(arr);

// const arr = ["Anshika","vanshu"]

// 1.SHOPPING CART SYSTEM
// let cart = ["milk","bread","eggs","ghee"]
//  ADD
// cart.push("juice");
// console.log(cart);

// // unshift() JavaScript me array ke starting (beginning) me element add karne ke liye use hota hai.
// cart.unshift("roti");
// console.log(cart);

// INDEX -> true -> remove that item
// let index = cart.indexOf("eggs")
// console.log(index);
// if(index !== -1) {
//     let deletedItems = cart.splice(index,2) // remove 1 element from arr
//     console.log(deletedItems);
// }
// console.log(cart);

// 2.STUDENT MARKS ANALYSIS

let marks = [23,34,45,56,67,78];
// MARKS GREATER THAN 60
// let above60 = marks.filter((item) => item > 60)
// console.log(above60);

// FILTER,FIND -> FIRST OCCURENCE OF DATA

let topper = marks.find((m) => m > 50)
console.log(topper);

// WORD TRANSFORMATION

let words = ["hello","ji","good","morning"]
// CONVERT ALL WORDS INTO UPPERCASE
let upperCaseArray = words.map((word) => word.toUpperCase())
console.log(words);
console.log(upperCaseArray);


