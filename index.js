// alert("you are my love");

let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";
body.style.boxSizing = "border-box";
body.style.display = "grid";
body.style.alignItems = "center";

let div = document.querySelector("div");
div.style.display = "flex";
div.style.gridColumn = "2";

let ama = document.querySelector("h1");
ama.textContent = "Chiamaka Night Food";
ama.style.display = "flex";
ama.style.color = "pink";
ama.style.justifyContent = "center";
ama.style.fontSize = "50px";
ama.style.marginTop = "0px";

let image = document.createElement("img");
image.src = "images/bana1.jpg";
image.style.width = "200px";
document.querySelector("body").appendChild(image);
let image1 = document.createElement("img");
image1.src = "images/images/bana2.webp";
image1.style.width = "200px";
document.querySelector("body").appendChild(image1);
let image2 = document.createElement("img");
image2.src = "images/cake1.jpeg";
image2.style.width = "200px";
document.querySelector("body").appendChild(image2);
let image3 = document.createElement("img");
image3.src = "images/donut1.jpeg";
image3.style.width = "200px";
document.querySelector("body").appendChild(image3);

// const para = document.createElement("p");
// para.innerHTML = "This is a paragraph.";
// document.querySelector("body").appendChild(para);
