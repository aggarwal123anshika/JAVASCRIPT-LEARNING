// first we will make the program with out using filter
// I want to new array having students whose marks is greater than 50 
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
let filteredStudents = []
students.forEach((student)=> {
    if(student.marks > 50) {
        filteredStudents.push(student);
    }
})
console.log(filteredStudents);

// Now we will use filter 
let newStudents = students.filter((student)=> { //filter ek ek element ko utahyega agar condition di gyi satisfy ho gyi ya true ho gyi  toh us pure array ko uthayega aur usko new array m rakhega
    return student.marks > 50;
})
console.log(newStudents);

// 31-35 line ka code whi kamm krta h jo line no 38 pr hora h


