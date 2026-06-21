let students = [
    {
        name : 'Ram',
        age : 21,
        marks : 56
    },
    {
        name: 'Mohan',
        age : 22,
        marks : 52
    },
    {
        name : 'anshika',
        age : 22,
        marks : 30
    },
    {
        name : 'Pokkiee',
        age : 22,
        marks : 90
    },
    {
        name : 'akanshi',
        age : 67,
        marks : 20
    }
]
let newStudent = {
    name : 'Anshu',
    age : 21,
    marks : 47
}
function addStudent(newStudent, callback) {
    setTimeout(() => {
        console.log("Adding student");
        students.push(newStudent);
        console.log("Student added...")
        callback()
    },8000);
}
function displayStudent() {
    console.log("Student List...");
    students.forEach((student) => {
        console.log(student);
    })
}
// addStudent(newStudent, displayStudent);
addStudent(newStudent, ()=> {
        console.log("Student List...");
        students.forEach((student) => {
            console.log(student);
    })
})