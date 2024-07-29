// alert("you are my love");

let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";
body.style.boxSizing = "border-box";
body.style.display = "flex";
body.style.flexDirection = "Column";
body.style.alignItems = "center";
body.style.overflowX = "hidden";

// body.style.display = "flex";
// div.style.justifyContent = "space-between";

let div = document.querySelector("div");
// div.style.display = "gird";
// div.style.gridTemplateColumns = "100px 100px 100px";
div.style.gap = "50px";
div.style.textAlign = "center";
body.style.padding = "0px 10px 0px 10px";
// div.style.margin = "0px 50px 0px 50px";
div.style.overflow = "hidden";

let ama = document.querySelector("h1");
ama.textContent = "Chiamaka Night Food";
ama.style.display = "flex";
ama.style.color = "pink";
ama.style.justifyContent = "center";
ama.style.fontSize = "20px";
ama.style.marginTop = "0px";
ama.style.marginBottom = "6px";

let container = document.createElement("a");
container.href =
  "Contact for delivery https://wa.me/[+2348150672809] Thank you patronizing";
container.textContent = "";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.fontStyle = "italic";
container.style.padding = "0px 5px 0px 5px";
container.style.textAlign = "center";
container.style.fontWeight = "bold";
container.style.background = "#000";
container.style.color = "#fff";
document.querySelector("body").appendChild(container);

let image = document.createElement("img");
image.src = "images/bana1.jpg";
image.style.width = "300px";
image.style.objectFit = "cover";
document.querySelector("div").appendChild(image);
let image2 = document.createElement("img");
image2.src = "images/cake1.jpeg";
image2.style.width = "300px";
image2.style.objectFit = "cover";
document.querySelector("div").appendChild(image2);
let image3 = document.createElement("img");
image3.src = "images/cupcake1.jpeg";
image3.style.width = "300px";
image3.style.objectFit = "cover";
document.querySelector("div").appendChild(image3);
let image1 = document.createElement("img");
image1.src = "images/donut1.jpeg";
image1.style.width = "300px";
image1.style.objectFit = "cover";
document.querySelector("div").appendChild(image1);

// let image1 = document.createElement("img");
// image1.src = "images/images/cupcake1.jpeg";
// image1.style.width = "200px";
// document.querySelector("body").appendChild(image1);
// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.querySelector("body").appendChild(para);
