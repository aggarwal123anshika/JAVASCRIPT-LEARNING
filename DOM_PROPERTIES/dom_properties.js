// let el = document.querySelector("p")
// console.log(el.innerText); //vo cheez return krega jo 
// // avilable h ya display hori h

// // innertext vs textcontent

// let e2 = document.querySelector("p")
// console.log(e2.textContent); // it can read the text as 
// // well as it can read the properties also

// let e3 = document.querySelector("p")
// console.log(e3.innerHTML);

// console.log(window);

// PRACTICES

// let element = document.querySelector("p")
// console.log(element.innerText);
// // element.innerText = "Hello Anshika Aggarwal!!";

// // console.log(element.innerText);
// let Name = prompt("Welcome User! Please Enter Your Good Name!");
// console.log(Name);
// // 1. name -> aaya ,, 2.name -> nhi aaya
// if(Name) {
//     element.innerText= "Hello " + Name  + " Nice To Meet You";
// }
// else {
//     console.log(Name);
//     element.innerText= "Hello user Nice To Meet You";
// }

// ADDING ELEMENTS TO YOUR DOM

// 1. create ,, 2. add => appendChild(),, 3.multiple elements add -> append()

// let heading = document.createElement("h1");
// let heading2 = document.createElement("h2");

// let section = document.querySelector('.screen');

// heading.innerText = "Hello Mitron!";
// heading2.innerText = "Jai Shree Shyam";

// section.appendChild(heading);
// section.appendChild(heading2);

// section.append(heading, heading2);

// let para = document.createElement("p");

// para.innerText = "Good Morning Ji";

// section.prepend(para);

// PRACTICE 
// let data = prompt("Enter your salary");
// let display = document.querySelector('.screen');
// if(data > 50000) {
//     let bonus = document.createElement("h1");
//     bonus.innerText = "You will get 10,000 joining bonus";
//     display.append(bonus);
// }
// else {
//     let blessings = document.createElement("p");
//     blessings.innerText = "May God Bless You";
//     display.append(blessings);
// }

// login/signup
 let orders = ['laptop','phone','headphones','bags','phonecover'];
 let display = document.querySelector('.screen');
 for(let i = 0; i < orders.length ; i++) {
    let data = document.createElement("h3");
    data.innerText = orders[i];
    display.append(data);
 }
