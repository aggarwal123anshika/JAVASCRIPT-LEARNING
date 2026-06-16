let numbers = [12,14,15,17,20,24];
let a = numbers.map((number)=> { //agar hm yha s pink bracket hata denge toh ye khud return kr dega aur hmme likhne ki bhi need nhi hogi 
    return 2*number;
})
console.log(numbers);
console.log("double numbers is:-",a);