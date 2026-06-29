// // console.log("welcome mitron!");

// // let eventButton = document.querySelector("#eventBtn");
// // eventButton.addEventListener("click", function (event) {
// //   console.log(event);
// //   console.log(event.type);
// //   console.log(event.target);
// //   console.log(event.timeStamp);
// //   console.log(event.clientX, event.clientY);

// //   event.target.innerText = "details in console";
// // });

// // let Name = document.querySelector("#name");
// // Name.addEventListener("change",(event)=> {
// //     console.log(event.target.value);
// //     // console.log(event.target.innerText);
// // });


// // let TrackArea = document.getElementById("trackarea");
// // let Coords = document.getElementById("coords");

// // TrackArea.addEventListener("mousemove", (e) => {
// //     console.log(e);
// //     Coords.textContent = `X: ${e.offsetX} y: ${e.offsetY}`
// // })


// // DOUBLE CLICK TO ADD/REMOVE ELEMENT

// let container = document.getElementById("container");
// let button = document.getElementById("addBox");
// button.addEventListener("click", () => {
//     const box = document.createElement("div");
//     box.className = "box";
//     box.style.cssText = `width:60px; height:60px; 
//     background:hsl(${Math.random()*360}, 70%, 60%) 
//     display:inline-block; margin:5px`;
//     // newDiv.textContent = "New Box";
//     // newDiv.style.cssText = "width:80px; height:80px; background:red; margin:5px;"
//     container.appendChild(box);
//     console.log("added");
//     box.addEventListener('click', ()=> box.remove());
// });



// Select elements
const container = document.getElementById("container");
const button = document.getElementById("addBox");

// Button click event
button.addEventListener("click", () => {

    // Create a new div
    const box = document.createElement("div");

    // Add class
    box.classList.add("box");

    // Random background color
    box.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    // Add to container
    container.appendChild(box);

    console.log("Added");

    // Remove box on click
    box.addEventListener("click", () => {
        box.remove();
        console.log("Removed");
    });

});


// //WORD -> HOER -> TOOLTIP

const Word = document.getElementById("word");
const tooltip = document.createElement('span');
tooltip.textContent = "I am a ToolTip";
tooltip.style.cssText = "position:absolute; background:black; color:white";

document.body.appendChild(tooltip);

Word.addEventListener('mouseover', (e) => {
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = (e.pageY + 20) + "px";
});