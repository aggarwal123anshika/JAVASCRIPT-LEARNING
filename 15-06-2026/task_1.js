// task 1: take a array of an 5 employees property of employee:
// name,age,salary,mobileno..make two functions and addEmployee takes 10 seconds
//  to add a employee..displayEmployee call this method after the execution of 
// addEmployee
let employees = [
    {
        name : 'Ram',
        age : 21,
        salary : 5600,
        mobileno : 9258409966
    },
    {
        name: 'Mohan',
        age : 22,
        salary : 5200,
        mobileno : 9368423575
    },
    {
        name : 'anshika',
        age : 22,
        salary : 3000,
        mobileno : 9760460100
    },
    {
        name : 'Pokkiee',
        age : 22,
        salary : 9000,
        mobileno : 9870753098
    },
    {
        name : 'akanshi',
        age : 67,
        salary : 2000,
        mobileno : 6397473536
    }
]
let newEmployee = {
    name : 'Anshu',
    age : 21,
    salary : 4700
}
function addEmployee(newEmployee, callback) {
    setTimeout(() => {
        console.log("Adding employee");
        employees.push(newEmployee);
        console.log("Employee added...")
        callback()
    },1000);
}
function displayEmployee() {
    console.log("Employee List...");
    employees.forEach((employee) => {
        console.log(employee);
    })
}
// addEmployee(newEmployee, displayEmployee);
addEmployee(newEmployee, ()=> {
        console.log("Employee List...");
        employees.forEach((employee) => {
            console.log(employee);
    })
})