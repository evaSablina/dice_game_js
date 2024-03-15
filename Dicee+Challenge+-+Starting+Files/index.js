var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// right = "./images/dice" + randomNumber1 + ".png";
// = "./images/dice" + 3 + ".png";
// = "./images/dice3.png";

var right = "./images/dice" + randomNumber1 + ".png";

var left = "./images/dice" + randomNumber2 + ".png";


document.querySelector(".img1").src = left;

document.querySelector(".img2").src = right;


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Its a tie";
}