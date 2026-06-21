let employees = [
    {
        empname : 'anshu',
        age : 20,
        salary : 100000,
        location : 'delhi'
    },
    {
        empname : 'akshu',
        age : 50,
        salary : 120000,
        location : 'lucknow'
    },
    {
        empname : 'vanshu',
        age : 45,
        salary : 1004500,
        location : 'lucknow'
    },
    {
        empname : 'vanshi',
        age : 35,
        salary : 3004500,
        location : 'nagar'
    },
    {
        empname : 'ranshu',
        age : 85,
        salary : 1044500,
        location : 'murad'
    }
]
let newEmployees = employees.filter(employee => employee.age > 40 && employee.location == 'lucknow')
console.log(newEmployees);
