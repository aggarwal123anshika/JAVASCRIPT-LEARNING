// array of objects 
let employees = [
    {
        name: 'Ram',
        age: 45,
        salary: 50000
    },
    {
        name: 'Shyam',
        age: 50,
        salary: 60000
    },
    {
        name: 'Sita',
        age: 40,
        salary: 45000
    },
    {
        name: 'Gita',
        age: 35,
        salary: 40000
    }
]
let sum = 0;
// array k sare elements foreach loop s utahte hain aur un pr ek function call krte hain
// forEach loop khta h k ki m hmesha aaray k sath chalunga aur har element pr ek function call krunga
// forEach loop m hmesha ek function call krna hota h jo ki har element pr call hota h ...employees isme array of object h aur employee object h just like an element
// forEach loop kuch bhi return nhi krta hai 
employees.forEach((employee)=>{
    console.log(employee.name);
    sum = sum + employee.salary;
})
console.log("Sum of salaries: " + sum);
let filteredEmployee = []
let k = employees.forEach((employee)=>{
    if(employee.salary > 45000){
        filteredEmployee.push(employee);
    }
})
console.log(k);
console.log("Filtered Employees: ", filteredEmployee);