// task 2:
// 1. we will have 10 employees having property:
// eid, ename, mobileno, post
// 2. we will search an employee based on id which will take 5 second
// 3. after getting the employee we will ftech the basic salaryof that 
// particular employee which will take 3 seconds
// 4. after getting the basic salary we will calculate the gross salary of 
// that employee

// logic of basic salary:
// post == 'Professor'
// basicSal = 56000
// post == 'Associate Professor'
// basicSal = 50000
// post == 'Assistant professor'
// basicSal = 40000

let employees = [
    {
        e_id : 101,
        e_name : 'Anshika',
        mobile_no : 9867,
        post : 'Professor'
    },
    {
        e_id : 102,
        e_name : 'Akanshi',
        mobile_no : 9787,
        post : 'Associate Professor'
    },
    {
        e_id : 103,
        e_name : 'Vanshika',
        mobile_no : 5677,
        post : 'Manager'
    },
    {
        e_id : 104,
        e_name : 'Shika',
        mobile_no : 9237,
        post : 'Assistant Professor'
    },
    {
        e_id : 105,
        e_name : 'Pokkiee',
        mobile_no : 2867,
        post : 'BADA CHAPRASI'
    }
]
function getEmployee(id, callback) {
    setTimeout(() => {
        let emp = employees.find((employee) => employee.e_id === id)
        console.log(emp);
        callback(emp) //employee milne k baad callback function ko call krega or employee object pass krega
    },5000)
}
function getBasicSalary(post, callback) {
    let basicSal = 0;
    setTimeout(() => {
        if(post == 'Professor') {
            basicSal = 56000;
        }
        else if(post == 'Assistant professor') {
            basicSal = 50000;
        }
        else {
            basicSal = 40000;
        }
        console.log(basicSal);
        callback(basicSal); //jis fun ko mujhe chalana h usme basic salary pass krna h
    },3000)
}
function calculateSalary(basicSal) { //ye function basic salary ko receive krega
    let grossSalary = 0;
    hra = basicSal * .40;
    da = basicSal * .80;
    fixAmount = 5000;
    grossSalary = basicSal + hra + da 
    console.log(grossSalary)
}
// PYRAMID OF DOMS IN JS👇
getEmployee(101, (emp) => {
    console.log(emp)
    getBasicSalary(emp.post, (basicSal) => {
        console.log(basicSal)
        calculateSalary(basicSal)
    })
});
// asynchoronous js ko handle krne k liye promise aur callback aaya..
// aur kamm time wale code ko jayada priority deti h rather than long time code..
// disadvantages of callback 
// likhne aur padhne m dikkat 
