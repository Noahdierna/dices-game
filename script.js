//Inscription Page
document.querySelector(".container").style.visibility = "hidden";
document.querySelector(".container2").style.visibility = "hidden";
document.querySelector(".container3").style.visibility = "hidden";

let currentDiv = document.querySelector(".add");
let i = document.querySelector("i");
let start = document.querySelector("button");
let numberPlayer = 0;

function addPlayer() {
      if (numberPlayer < 10) {
            if (document.querySelector("input").value != "") {
                  numberPlayer++;

                  let newDiv = document.createElement("div");
                  newDiv.setAttribute("class", "player");
                  var newContent = document.createTextNode(
                        "Player " + numberPlayer + ": " + document.querySelector("input").value + " "
                  );
                  newDiv.appendChild(newContent);
                  document.querySelector(".first").insertBefore(newDiv, currentDiv.nextSibling);
                  
                  newDiv.innerHTML = newDiv.innerHTML + "<i onclick='deletePlayer()' class='fas fa-times'></i>";
                  start.disabled = false;
            }
            
      } else {
            i.disabled = true;
      }
}

function playGame() {
      document.querySelector(".container").style.visibility = "visible";
      document.querySelector(".container2").style.visibility = "visible";
      document.querySelector(".container3").style.visibility = "visible";
      document.querySelector(".first").style.visibility = "hidden";

}

function deletePlayer() {

}


















//Game Page
function numberAleatoire(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
var dice1 = document.getElementById('dice1');

var dice2 = document.getElementById('dice2');

var button = document.querySelectorAll('button')[1];

let numbers = document.querySelectorAll(".number");

let cptr = document.querySelector(".cptr").innerHTML;

let restart = document.querySelector('.restart');

let controller = false;

let allNumbersChecked = false;

let round = 0;

/*
window.addEventListener('keydown', function (e) {
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      console.log(`${e.keyCode}`);
      switch (`${e.keyCode}`) {
            case '32':
                  rollTheDices()
            case '49':

      }
})
*/

document.addEventListener("click", (event) => {
      if ([...event.target.classList].includes("yolo") && [...event.target.classList].includes("checked") == false) {
            event.target.classList.add("checked");
            numbers.forEach(element => {
                  element.classList.remove("yolo");
            });
            controller = false;
            button.disabled = false;
      }
})

function rollTheDices() {
      dice1.innerHTML = numberAleatoire(1, 6);
      dice2.innerHTML = numberAleatoire(1, 6);

      for (i = 1; i <= 9; i++) {
            var test = document.getElementsByClassName("number")[i - 1];

            if (dice1.innerHTML == i && [...test.classList].includes("checked") == false ||
                  dice2.innerHTML == i && [...test.classList].includes("checked") == false ||
                  parseInt(dice1.innerHTML) + parseInt(dice2.innerHTML) == i && [...test.classList].includes("checked") == false) {
                  test.classList.add("yolo");
                  controller = true;
            }
      }

      if (controller == false) {
            numbers.forEach(element => {
                  if ([...element.classList].includes("checked") == false) {
                        cptr = parseInt(cptr) + parseInt(element.innerHTML);
                        allNumbersChecked = true;
                  }
            })

            if (allNumbersChecked == false) {
                  document.querySelector(".cptr").innerHTML = document.querySelector(".cptr").innerHTML - 20;
            } else {
                  document.querySelector(".cptr").innerHTML = parseInt(document.querySelector(".cptr").innerHTML) + cptr;
            }

            if (round == 2) {
                  restart.innerHTML = "New game";
            } else {
                  restart.innerHTML = "Manche suivante";
            }
            restart.style.visibility = "visible"
      }
      button.disabled = true;
}

function refresh() {
      round++;
      if (round == 3) {
            document.querySelector(".cptr").innerHTML = 0;
            round = 0;
      }
      numbers.forEach(element => {
            element.classList.remove("checked");
      })
      button.disabled = false;
      restart.style.visibility = "hidden"
      cptr = 0;
      allNumbersChecked = false;
      
}