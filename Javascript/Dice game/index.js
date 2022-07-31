// random image for dice 1
var num1 = Math.floor(Math.random()*6) + 1;
var random_image1 = "images/dice" + num1 + ".png";

var image1 = document.querySelectorAll("img")[0];
var change_image = image1.setAttribute("src", random_image1);

// random image for dice 2
var num2 = Math.floor(Math.random()*6) + 1;
var random_image2 = "images/dice" + num2 + ".png";

var image1 = document.querySelectorAll("img")[1];
var change_image2 = image1.setAttribute("src", random_image2);

if(num1 == num2){
    document.querySelector("h1").innerHTML = "Draw!!";
}
else if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Won";
}