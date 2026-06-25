console.log("hello mitron!!");

let element1 = document.getElementById("p1");
let element2 = document.getElementById("p2");
let element3 = document.getElementById("p3");

// element1.className = "redText";
// element2.className = "blueText";
// element3.className = "greenText";
// // rule of className : dikkat ye thi classname m ye purani classes or properties ko hata deta tha
// element1.className = "Background redText";

// console.log(element1.className);

// CLASS_LIST

let dabba = document.querySelector("#box");
console.log(dabba.classList); //list of classes
dabba.classList.add("underline");
let mode = prompt("Please enter the mode!");
if(mode == "dark") {
    dabba.classList.add("darkMode");
}
else if (mode == "light") {
    dabba.classList.add("lightMode");
}
else {
    alert("Please enter the valid mode..");
}
// Switch between modes
// dabba.classList.remove("darkMode");
// dabba.classList.add("lightMode");
// difference between className and classList




