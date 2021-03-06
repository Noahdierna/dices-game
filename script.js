//Inscription Page
document.querySelector(".round").style.visibility = "hidden";
document.querySelector(".container").style.visibility = "hidden";
document.querySelector(".container2").style.visibility = "hidden";
document.querySelector(".container3").style.visibility = "hidden";
document.querySelector(".container4").style.visibility = "hidden";

let currentDiv = document.querySelector(".add");
let i = document.querySelector("i");
let start = document.querySelector(".start");
start.disabled = true;
let numberPlayer = 0;
let restart = document.querySelector(".restart");

function addPlayer() {
  if (numberPlayer < 10) {
    if (document.querySelector("input").value != "") {
      numberPlayer++;

      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "player");
      var newContent = document.createTextNode(
        "Player " +
          numberPlayer +
          ": " +
          document.querySelector("input").value +
          " "
      );
      newDiv.appendChild(newContent);
      document
        .querySelector(".first")
        .insertBefore(newDiv, currentDiv.nextSibling);

      newDiv.innerHTML =
        newDiv.innerHTML +
        "<i onclick='deletePlayer()' class='fas fa-times'></i>";
      start.disabled = false;
      document.querySelector("input").value = "";
    }
  } else {
    i.disabled = true;
  }
}

function deletePlayer() {
  document.querySelector(".first").removeChild(event.target.parentNode);

  document.querySelectorAll(".player").forEach((element) => {
    test = element.innerHTML.split("<")[0].split(" ")[2];

    element.innerHTML =
      "Player " +
      --numberPlayer +
      ": " +
      test +
      "<i onclick='deletePlayer()' class='fas fa-times'></i>";
  });
  numberPlayer = document.querySelectorAll(".player").length;
  if (numberPlayer == 0) {
    start.disabled = true;
  }
}

function playGame() {
  document.querySelector(".round").style.visibility = "visible";
  document.querySelector(".round").innerHTML = "Round 1";
  document.querySelector(".container").style.visibility = "visible";
  document.querySelector(".container2").style.visibility = "visible";
  document.querySelector(".container3").style.visibility = "visible";
  restart.style.display = "none";
  document.querySelector(".container4").style.visibility = "visible";
  document.querySelector(".first").style.visibility = "hidden";

  for (let i = 0; i < numberPlayer; i++) {
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "playerInfo");
    document.querySelector(".container4").appendChild(newDiv);

    test = document
      .getElementsByClassName("player")
      [numberPlayer - 1 - i].innerHTML.split("<")[0]
      .split(" ")[2];
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "name");
    newContent = document.createTextNode(test);
    newDiv.appendChild(newContent);
    document.getElementsByClassName("playerInfo")[i].appendChild(newDiv);
    document.getElementsByClassName("name")[i].innerHTML = newDiv.innerHTML;

    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "cptr");
    newContent = document.createTextNode("0");
    newDiv.appendChild(newContent);
    document.getElementsByClassName("playerInfo")[i].appendChild(newDiv);
    document.getElementsByClassName("cptr")[i].innerHTML = "0";
  }
}

//Game Page
function numberAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var dice1 = document.getElementById("dice1");

var dice2 = document.getElementById("dice2");

var button = document.querySelectorAll("button")[1];

let numbers = document.querySelectorAll(".number");

let controller = false;

let allNumbersChecked = false;

let round = 0;

let cptr = 0;

let playerCptr = 0;

let div1 = document.getElementsByClassName("number")[0];
let div2 = document.getElementsByClassName("number")[1];
let div3 = document.getElementsByClassName("number")[2];
let div4 = document.getElementsByClassName("number")[3];
let div5 = document.getElementsByClassName("number")[4];
let div6 = document.getElementsByClassName("number")[5];
let div7 = document.getElementsByClassName("number")[6];
let div8 = document.getElementsByClassName("number")[7];
let div9 = document.getElementsByClassName("number")[8];

window.addEventListener("keydown", function (e) {
  switch (`${e.keyCode}`) {
    case "13":
      if (document.querySelector("input").value != "") {
        addPlayer();
      } else if (
        numberPlayer > 0 &&
        document.querySelector(".first").style.visibility != "hidden"
      ) {
        playGame();
      }
      if (restart.style.visibility == "visible") {
        refresh();
      }
      break;
    case "32":
      e.preventDefault();
      if (document.querySelector(".first").style.visibility == "hidden") {
        if (button.disabled === false) {
          rollTheDices();
        } else {
          alert(
            "Vous devez sélectionner un nombre vert avant de relancer les dés"
          );
        }
      }
      break;
    case "49":
    case "97":
      if ([...div1.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[0].classList.remove("yolo");
        document.getElementsByClassName("number")[0].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "50":
    case "98":
      if ([...div2.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[1].classList.remove("yolo");
        document.getElementsByClassName("number")[1].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "51":
    case "99":
      if ([...div3.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[2].classList.remove("yolo");
        document.getElementsByClassName("number")[2].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "52":
    case "100":
      if ([...div4.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[3].classList.remove("yolo");
        document.getElementsByClassName("number")[3].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "53":
    case "101":
      if ([...div5.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[4].classList.remove("yolo");
        document.getElementsByClassName("number")[4].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "54":
    case "102":
      if ([...div6.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[5].classList.remove("yolo");
        document.getElementsByClassName("number")[5].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "55":
    case "103":
      if ([...div7.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[6].classList.remove("yolo");
        document.getElementsByClassName("number")[6].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "56":
    case "104":
      if ([...div8.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[7].classList.remove("yolo");
        document.getElementsByClassName("number")[7].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
    case "57":
    case "105":
      if ([...div9.classList].includes("yolo") === true) {
        document.getElementsByClassName("number")[8].classList.remove("yolo");
        document.getElementsByClassName("number")[8].classList.add("checked");
        numbers.forEach((element) => {
          element.classList.remove("yolo");
        });
        controller = false;
        button.disabled = false;
      }
      break;
  }
});

document.addEventListener("click", (event) => {
  if (
    [...event.target.classList].includes("yolo") &&
    [...event.target.classList].includes("checked") == false
  ) {
    event.target.classList.add("checked");
    numbers.forEach((element) => {
      element.classList.remove("yolo");
    });
    controller = false;

    button.disabled = false;
  }
});

function rollTheDices() {
  dice1.innerHTML = numberAleatoire(1, 6);
  dice2.innerHTML = numberAleatoire(1, 6);

  for (i = 1; i <= 9; i++) {
    var test = document.getElementsByClassName("number")[i - 1];

    if (
      (dice1.innerHTML == i &&
        [...test.classList].includes("checked") == false) ||
      (dice2.innerHTML == i &&
        [...test.classList].includes("checked") == false) ||
      (parseInt(dice1.innerHTML) + parseInt(dice2.innerHTML) == i &&
        [...test.classList].includes("checked") == false)
    ) {
      test.classList.add("yolo");
      controller = true;
    }
  }

  if (controller == false) {
    numbers.forEach((element) => {
      if ([...element.classList].includes("checked") == false) {
        cptr = parseInt(cptr) + parseInt(element.innerHTML);
        allNumbersChecked = true;
      }
    });

    if (allNumbersChecked == false) {
      document.getElementsByClassName("cptr")[playerCptr].innerHTML =
        document.getElementsByClassName("cptr")[playerCptr].innerHTML - 20;
    } else {
      document.getElementsByClassName("cptr")[playerCptr].innerHTML =
        parseInt(
          document.getElementsByClassName("cptr")[playerCptr].innerHTML
        ) + cptr;
    }

    if (round == 2) {
      if (
        playerCptr ==
        document.getElementsByClassName("playerInfo").length - 1
      ) {
        restart.innerHTML = "New game";
      } else {
        restart.innerHTML = "Next Player";
      }
    } else {
      restart.innerHTML = "Next round";
    }
    restart.style.display = "block";
    restart.style.visibility = "visible";
  }
  button.disabled = true;
}

function refresh() {
  round++;
  document.querySelector(".round").innerHTML = "Round " + (round + 1);
  if (round == 3) {
    if (
      playerCptr ==
      document.getElementsByClassName("playerInfo").length - 1
    ) {
      for (
        let i = 0;
        i < document.getElementsByClassName("playerInfo").length;
        i++
      ) {
        document.getElementsByClassName("cptr")[i].innerHTML = 0;
      }
      playerCptr = 0;
    } else {
      playerCptr++;
    }
    round = 0;
    document.querySelector(".round").innerHTML = "Round 1";
  }
  numbers.forEach((element) => {
    element.classList.remove("checked");
  });
  button.disabled = false;
  restart.style.visibility = "hidden";
  restart.style.display = "none";
  cptr = 0;
  allNumbersChecked = false;
}
