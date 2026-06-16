// map always returns a new array which size is equal to calling array
// jb array k sare elements pr kaam krna ho toh hm tbhi map ka use krte h aur isme bhi function call hoti h 
// isme name k aage MR lagaya jata h aur new array return krta h
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
let names = employees.map((employee)=>{
    if(employee.salary > 52000) {
        return 'Mr.' + employee.name
    }
})
console.log(names);

