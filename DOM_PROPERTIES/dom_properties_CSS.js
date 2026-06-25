console.log("hello mitron!")

// simply remove any element after fetch and
//  get the data
// let element = document.querySelector("h2");
// element.remove();

// DYNMACICALLY ADD OR REMOVE
// to remove the particular element from specific tag
// let main = document.querySelector("div");
// let e1 = document.querySelector("h3");
// main.removeChild(e1);

// CSS MANIPULATE USING JS
// let data = document.querySelector("div");
// console.log(data.style);
// let color = prompt("What you want to do color for our wall?")
// data.style.backgroundColor = color;

// data.style.width = "300px";
// data.style.fontSize = "50px";
// data.style.border = "3px dashed red";

// IF YOU WANT TO HANDLE MULTIPLE PROPERIES A 
// SINGLE TIME -> CSS TEXT

// data.style.cssText = "background-color : blue ; color : white; font-size : 40px; text-decoration : underline;"

// setAttribute()  getAttribute()


// GETATTRIBUTE
// let element = document.querySelector("a");

// let hrefVal = element.getAttribute("href");
// console.log(hrefVal);

// if(hrefVal == "https://unsplash.com/") {
//     alert("Welcome to your website");
// }
// else {
//     alert("Could be a spam link..");
// }

// let element = document.querySelector("a");
// let hrefval = element.getAttribute("href");
// let element2 = document.querySelector("p");
// element2.innerText = hrefval;


// // SETATTRIBUTE

// let images = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuwnDKbuWLwCNVC92jsnoGesewBNR8z-a4A&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32JXts8MyRBpRAUxjGQQKrxrqoXzNnAvuAA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ySov4eI9YasckMknymMeT5QczTrWWNzgVQ&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZFuyqTxQsUw_Dh_1xxg4dXj8cF7XTCA3ew&s"
// ];
// let panel = document.querySelector("#flowers")
// let image = document.querySelector("img");
// image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuwnDKbuWLwCNVC92jsnoGesewBNR8z-a4A&s");

// for(let i=0; i < images.length; i++) {
//     let image = document.createElement("img");
//     image.setAttribute("src", images[i]);
//     panel.append(image);

// }

//  USER -> STUDENT / TEACHER

let role = prompt("Please Enter your role!");
if(role == "student") {
    let mail = document.querySelector("#email");
    mail.setAttribute("required", "true");
}







