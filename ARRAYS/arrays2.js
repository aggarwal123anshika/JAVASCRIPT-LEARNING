// console.log("welcome mitro!");

// // E-COMMERCE ORDER
// let orders = [
//     {
//     id : 101,
//     product : "faillovely",
//     price : 2000,
//     availability : "yes"
//     },
//     {
//     id : 102,
//     product : "LAKME CC CREAM",
//     price : 2500,
//     availability : "no"
//     },
//     {
//     id : 103,
//     product : "LAKME BB CREAM",
//     price : 400,
//     availability : "yes"
//     },
//     {
//     id : 104,
//     product : "CONCELEAR",
//     price : 20089,
//     availability : "yes"
//     }
// ];
// // FIND ALL THE ORDERS ABOVE 1000
// let expensive = orders.filter((order) =>{
//     // console.log(order.price);
//     return order.price > 1000;
// });
// console.log(expensive);
// // console.log(orders);

// // total expense
// let TotalKarcha = orders.reduce((sum,order) => { //reduce have two values first one is acculumulator and second one is current value
//     sum = sum + order.price;
//     return sum;
// },0)
// console.log(TotalKarcha);

// // PRODUCT NAMES ->print -> har item k upar lagani h

// let products = orders.map((order) => console.log(order.product))

// // SORT BY PRICE

// let sorted = orders.sort((a,b) => a.price - b.price);
// console.log(sorted);

// //


// let Students = ["anshika","akanshi","vanshika"]
// function printStudentName(arr) {
//     arr.forEach((student, index)=>{
//         console.log(`${index+1} . ${student}`);
//     })
// }
// printStudentName(Students);

// DOCUMENTATION FOR , FOREACH , FORIN AND FOROF

// FIND TOTAL SALARIES

// let salaries = [30000,45000,50000,60000]

// function printTotalSalaries(arr) {
//     let sum = 0;
//     for(let sal of arr) {
//         sum =  sum + sal
//     } 
//     return sum
// }
// let output = printTotalSalaries(salaries)
// console.log(output);

// DISPLAY EMPLOYEE INFO(USING FOR IN LOOP)

let Employee = {
    firstName : "anshika",
    age : 25,
    department : "IT",
    salary : 50000
}
function showEmployeeInfo(obj) {
    for(let key in obj) {
        console.log(`${key} : ${obj.key}`);
    }
}