const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn"); // me traigo los elementos del htmml
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = '#'; //porque el # no lo puedo generar de forma random
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; //va agregando un valor al final del contenido de hexcolor
    }

    color.textContent = hexColor;
     document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

