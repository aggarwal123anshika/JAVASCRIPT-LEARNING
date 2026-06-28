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

// const button = document.querySelector("#btn2");

// function greet() {
//     alert("Welcome user!!")
// }
// function changeColor() {
//     button.style.backgroundColor = "lightgreen";
//     button.style.borderRadius = "50px";
// }

// // button.addEventListener("click",greet);
// button.addEventListener("click", greet);
// button.addEventListener("click", changeColor);

// function printMessage() {
//     let MsgBox = document.querySelector("#message");
//     let msg = document.createElement("h2");
//     msg.innerText = "Response Submitted";
//     MsgBox.append(msg);
// }
// btn2.addEventListener("click", printMessage);


// let logIn = document.querySelector("#login");
// document.querySelector("#details").style.display = "none";

// function application() {
//     let screen = document.querySelector("#details");
//     screen.style.display = "block";
//     let salary = prompt("Enter your salary");
//     let salaryEl = document.createElement("h2");
//     salaryEl.innerText = "Your given salary is " + salary;
//     screen.append(salaryEl);

//     let bonus = document.getElementById("details");
//     bonus.addEventListener("click", function() {
//         // let bonusSalary = salary;
//         // bonusSalary = bonusSalary + 2000;
//         salary += 2000;
//         // console.log(salary);
//         //  let salaryEl = document.createElement("h2");
//          salaryEl.innerText = "Your given salary after bonus is: " + salary;
//         //  screen.append(salaryEl);
//     });
// }
// logIn.addEventListener("click", application);

// CHANGE PARKING ZONE COLOR

const Box = document.querySelector(".box");

Box.addEventListener("mouseover", () => {
    Box.style.background = 'lightgreen';
})
Box.addEventListener("mouseout", () => {
    Box.style.background = 'red';
})