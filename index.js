function gameOn(){
  var randomNumber1 = Math.floor(Math.random() * 6) +1;
  var randomImg1 = "dice" + randomNumber1 + ".png";
  var imgOne = document.querySelector(".img1");
  imgOne.setAttribute("src", "images/" + randomImg1);

  var randomNumber2 = Math.floor(Math.random() * 6) +1;
  var randomImg2 = "dice" + randomNumber2 + ".png";
  var imgTwo = document.querySelector(".img2");
  imgTwo.setAttribute("src", "images/" + randomImg2);

  var heading = document.querySelector('h1');

  if (randomNumber1 > randomNumber2) {
    heading.textContent = "Peeple Wins 🤡"
  } else if (randomNumber1 === randomNumber2) {
    heading.textContent = "Draw!"
  } else {
    heading.textContent = "🤡 Poople Wins"
  }
}
