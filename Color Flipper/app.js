const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // Get random number 0 - 3 (colors[])
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]; // color change
    color.textContent = colors[randomNumber]; // backgroubnd color : [imprimo el color actual]
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length); // returns a random number. 0-3
    // floor rounds - // mathrandom- random num * length  asi esta entre 0 3
}