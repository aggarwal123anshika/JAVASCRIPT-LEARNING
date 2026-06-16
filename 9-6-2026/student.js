// to find the greatest of 5 students based on their marks in 3 subjects which have a btech course only show
let students = [
    {
        name: 'ram',
        age : 20,
        course: 'Btech',
        marks: 200
    },
    {
        name: 'shyam',
        age : 30,
        course: 'Btech',
        marks: 250

    },
    {
        name: 'sita',
        age : 50,
        course: 'Bca',
        marks: 280
    },
    {
        name: 'anshika',
        age : 26,
        course: 'Bcom',
        marks: 600
    },
    {
        name: 'ramu',
        age : 10,
        course: 'Btech',
        marks: 270
    }
]
let filteredStudent = [];
students.forEach((student)=>{
    if(student.course === 'Btech'){
       filteredStudent.push(student);
    }
});
console.log("Filtered Students: ", filteredStudent);


