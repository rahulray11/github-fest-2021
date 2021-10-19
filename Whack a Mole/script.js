const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const grid = document.querySelector(".grid");
const win = document.querySelector(".win");
const msg = document.querySelector(".msg");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

win.classList.add("hidden");
msg.classList.add("hidden");

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 700);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);

        grid.classList.add("hidden");
        win.classList.remove("hidden");
        msg.classList.remove("hidden");
        document.getElementById("disp").textContent = result;
    }
}

let countDownTimerId = setInterval(countDown, 1000);