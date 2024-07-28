// alert("you are my love");

let body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";
body.style.boxSizing = "border-box";

let div = document.querySelector("div");
div.style.display = "grid";
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
image.src = "images/bana2.webp";
image.src = "images/cake1.jpeg";
image.src = "images/donut1.jpeg";
image.style.width = "200px";
document.querySelector("div").appendChild(image);

const image1 = document.createElement("p");
image1.innerHTML = "This is a image1graph.";
document.querySelector("body").appendChild(image1);
const image2 = document.createElement("p");
image2.innerHTML = "This is a image1graph.";
document.querySelector("body").appendChild(image2);
const image3 = document.createElement("p");
image3.innerHTML = "This is a image1graph.";
document.querySelector("body").appendChild(image3);
const image4 = document.createElement("p");
image4.innerHTML = "This is a image1graph.";
document.querySelector("body").appendChild(image4);
