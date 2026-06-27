// OLD WAY OF EVENTS IN JS 
// const btn = document.getElementById("btn");
// btn.onclick = function() {
//     alert("Button clicked");
//     console.log("Hello mitron! Button clicked hua");
// };
// // WHEN WE USE MORE THAN ONE FUNCTION TO IMPLEMENT
// //  THAN IT OVERWRITES THE FIRST FUNCTION THIS
// //  IS THE MINA DISADAVNATAGE OF OLD SYNATX OF
// //  EVENTS IN JS
// btn.onclick = function() {
//     alert("hadiipppaa!!!!");
//     console.log("Button clicked hua or dusra function bhi chala");
// };

// MODERN WAY OF ONCLICK IN EVENTS

const button = document.querySelector("#btn2");

function greet() {
    alert("Welcome user!!")
}
function changeColor() {
    button.style.backgroundColor = "lightgreen";
    button.style.borderRadius = "50px";
}

// button.addEventListener("click",greet);
button.addEventListener("click", greet);
button.addEventListener("click", changeColor);
