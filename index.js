let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";
body.style.boxSizing = "border-box";
body.style.display = "flex";
body.style.flexDirection = "Column";
body.style.alignItems = "center";
body.style.overflowX = "hidden";

let div = document.querySelector("div");
div.style.gap = "50px";
div.style.textAlign = "center";
body.style.padding = "0px 10px 0px 10px";
div.style.overflow = "hidden";

let ama = document.querySelector("h1");
ama.textContent = "Chiamaka Night Food";
ama.style.display = "flex";
ama.style.color = "pink";
ama.style.justifyContent = "center";
ama.style.fontSize = "20px";
ama.style.marginTop = "0px";
ama.style.marginBottom = "6px";

let heading = document.createElement("h2");
heading.textContent =
  "This are for you but i dont know which one you will like so i Baked alot of it, and also so sorry it came in late";
heading.style.alignContent = "top";
document.querySelector("body").appendChild(heading);

let container = document.createElement("a");
container.href = " https://wa.me/+2348150672809";
container.textContent =
  "Contact for delivery Thank you for patronizing Click : [+2348150672809]";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.textDecoration = "none";
container.style.borderRadius = "3px 3px 8px 8px";
container.style.fontStyle = "";
container.style.padding = "0px 5px 0px 5px";
container.style.textAlign = "center";
container.style.fontWeight = "bold";
container.style.background = "#000";
container.style.color = "#d1cbe8";
document.querySelector("body").appendChild(container);

let image = document.createElement("img");
image.src = "images/bana1.jpg";
image.style.width = "300px";
image.style.objectFit = "cover";
image.style.borderRadius = "10px";
document.querySelector("div").appendChild(image);
let image2 = document.createElement("img");
image2.src = "images/cake1.jpeg";
image2.style.width = "300px";
image2.style.objectFit = "cover";
image2.style.borderRadius = "10px";
document.querySelector("div").appendChild(image2);
let image3 = document.createElement("img");
image3.src = "images/cupcake1.jpeg";
image3.style.width = "300px";
image3.style.objectFit = "cover";
image3.style.borderRadius = "10px";
document.querySelector("div").appendChild(image3);
let image1 = document.createElement("img");
image1.src = "images/donut1.jpeg";
image1.style.width = "300px";
image1.style.objectFit = "cover";
image1.style.borderRadius = "10px";
document.querySelector("div").appendChild(image1);

// let image1 = document.createElement("img");
// image1.src = "images/images/cupcake1.jpeg";
// image1.style.width = "200px";
// document.querySelector("body").appendChild(image1);
// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.querySelector("body").appendChild(para);
