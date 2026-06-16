// USER LOGIN
// function loginUser(userName, callback) {
//     console.log(`user ${userName} loggen in`);
//     callback()

// }
// function reDirect() {
//     console.log("Redirecting to Dashboard..");
// }
// loginUser("Anshika", reDirect)

// Higher Order Functions -> String Manipulator
function stringManipulator(str,func) {
    return func(str)
}
function reverseString(s) {
    let reversed = " ";
    for(let i = s.length-1 ; i>=0 ; i--) {
        reversed = reversed + s[i];
    }
    return reversed
}
let finalOutput = stringManipulator("hello",reverseString)
console.log(finalOutput);

// functions of vowels a,e,i,o,u
function calVowel() {

}
function printVowel(v) {
    let vowels = " ";
    for()
}
