console.log("hello world");

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "patito <br> Feo";
h1.innerHTML = "patito <br> Feo";
console.log(h1.getAttribute("pantalla"));
console.log(h1.getAttribute("class"));
h1.setAttribute("pantalla", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");
// h1.classList.toggle(" verde ");
// h1.classList.contains(" verde ");

input.value = "456"

console.log(document.createElement("img"));

const img = document.createElement("img");
img.setAttribute("src", "https://img.freepik.com/fotos-premium/dragon13_639785-660.jpg");
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);