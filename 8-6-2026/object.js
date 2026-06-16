//object or we can say object literals
let employee = {
    name : 'ram',
    age : 45,
    salary : 8000,
    "mobileno" : 9876543210,
    "first address" : "radha kunj"
}
console.log(employee.name)
console.log(employee['name']);
console.log(employee.mobileno);
console.log(employee['mobileno']);
console.log(employee['first address']);
// console.log(employee.first address); //error we can not use here . because space in between the string
console.log(Object.keys(employee)); // it will give us the keys of the object in array form

// making object using class
class Student {
    constructor(name, age) {
        name = name;
        age = age;
    }
    getName() {
        console.log(this.name + " " + this.age + "printed...");
    }
}
s1 = new Student("Anshika", 22);
console.log(typeof(s1));
console.log(s1.getName());
console.log("The End");
