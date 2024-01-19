var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " ⛳ Player 1 Wins"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins ⛳"
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🎌 Its a Tie 🎌"
}
