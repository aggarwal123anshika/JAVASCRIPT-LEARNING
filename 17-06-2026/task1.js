let students = [
    {
        name : 'anshika',
        email : 'anshika@gmail.com',
        mobileNo : 9258790958,
        age : 20
    },
    {
        name : 'akanshi',
        email : 'akanshi@gmail.com',
        mobileNo : 92556243958,
        age : 21
    },
    {
        name : 'anushka',
        email : 'anushka@gmail.com',
        mobileNo : 9252342958,
        age : 22
    },
    {
        name : 'vanshika',
        email : 'vanshika@gmail.com',
        mobileNo : 925878908,
        age : 23
    },
    {
        name : 'anshi',
        email : 'anshi@gmail.com',
        mobileNo : 92524958,
        age : 24
    }
]
let newStudent = {
        name : 'pokkiee',
        email : 'pokkiee@gmail.com',
        mobileNo : 923450958,
        age : 15
}
function addStudent (newStudent) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
        if(newStudent.age < 17) {
            reject("Not eligible");
        }
        else {
            students.push(newStudent);
            resolve(students);
        }
    },5000)
});
    return pr;
}
addStudent(newStudent)
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})