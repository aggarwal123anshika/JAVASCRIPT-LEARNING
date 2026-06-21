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
// ye code synchonous h quki isme koi bhi line kisi pr depend nhi
//  kr rhi aur na i isme koi set time out function use kiya h isliye
//  ye asynchoronus nhi h code
function addStudent(newStudent) {
    setTimeout(() => {
        console.log("Adding student");
        students.push(newStudent);
        console.log("Student added...");
    },3000);
}
function displayStudent() {
    students.forEach((student) => {
        console.log(student);
    })
}
addStudent(newStudent)
displayStudent()