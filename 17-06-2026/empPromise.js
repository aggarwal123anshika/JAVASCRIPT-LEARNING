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
// problem statement 
// we will make two functionz, addEmployee() which will take 3 seconds 
// another function displayEmployee() which will take 0 second
let newEmployee = {
    e_id : 106,
    e_name : 'imlee',
    mobile_no : 2524838867,
    post : 'Assistant professor'
}
function addEmployee(newEmployee) {
//promise ka ek object banaya isme ,ye promise return krega mtlb isko nhi pta ye kitna time lega means ye kuch n kuch aesa kamm kr rha hoga jisko krne m laga hua time nhi pta ho usko
    let pr = new Promise((resolve, reject) => { 
        setTimeout(() => {
            employees.push(newEmployee);
            resolve(employees)
        },3000)
    });
    return pr;
}
addEmployee(newEmployee) //iska mtlb ki promise return kra h quki isme .then .catch laga h
   .then((result) => {
      console.log(result);
   })
   .catch((err) => {
      console.log(err);
   })
