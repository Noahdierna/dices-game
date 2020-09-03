function numberAleatoire(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
var dice1 = document.getElementById('dice1');

var dice2 = document.getElementById('dice2');

var button = document.querySelector('button');

let numbers = document.querySelectorAll(".number");

let cptr = document.querySelector(".cptr").innerHTML;

let restart = document.querySelector('.restart');

let controller = false;

window.addEventListener('keydown', function (e) {
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      console.log(`${e.keyCode}`);
      switch (`${e.keyCode}`) {
            case '32':
                  rollTheDices()
            case '49':

      }
})



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
                  }
            })
            document.querySelector(".cptr").innerHTML = parseInt(document.querySelector(".cptr").innerHTML) + cptr;
            restart.style.visibility = "visible"
      }
      button.disabled = true;

}
function refresh() {
      numbers.forEach(element => {
            element.classList.remove("checked");
      })
      button.disabled = false;
      restart.style.visibility = "hidden"
      cptr = 0;
}