let questionAmount = 0;

let equationsArray = [];
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
let wrongFormat = [];

let playerGuessArray = [];

let valueY = 0;

let timer;
let timePlayed = 0;
let baseTime = 0;
let penaltyTime = 0;
let finalTime;
let finalTimeDisplay = "0.0";

const startForm = document.getElementById("start-form");
const radioContainer = document.querySelectorAll(".radio-container");
const radioInputs = document.querySelectorAll("input");
const bestScores = document.querySelectorAll(".best-score-value");

startForm.addEventListener("click", () => {
  radioContainer.forEach((radioEl) => {
    console.log(radioEl);
    radioEl.classList.remove("selected-label");
    if (radioEl.children[1].checked) {
      radioEl.classList.add("selected-label");
    }
  });
});

function getRadioValue() {
  let radioValue;
  radioInputs.forEach((radioInput) => {
    if (radioInput.checked) {
      radioValue = radioInput.value;
    }
  });
  return radioValue;
}

function selectQuestionAmount(e) {
  e.preventDefault();
  questionAmount = getRadioValue();
  console.log(`no of q = ${questionAmount}`);
  if (questionAmount) {
    showCountDown();
  }
}

startForm.addEventListener("submit", selectQuestionAmount);

//game

const gamePage = document.querySelector("#game-page");
const scorePage = document.querySelector("#score-page");
const splashPage = document.querySelector("#splash-page");
const countDownPage = document.querySelector("#countdown-page");


const finalTimeEl = document.querySelector('.final-time')
const baseTimeEl = document.querySelector('.base-time')
const penaltyTimeEl = document.querySelector('.penalty-time')
const playAgainBtn = document.querySelector('.play-button')



let bestScoreArray = []


const countdown = document.querySelector(".countdown");

function showCountDown() {
  countDownPage.hidden = false;
  splashPage.hidden = true;
  countDownStart();
  populateGamePage();

  setTimeout(showGamePage, 4000);
}

function countDownStart() {
  countdown.textContent = "3";
  setTimeout(() => {
    countdown.textContent = "2";
  }, 1000);
  setTimeout(() => {
    countdown.textContent = "1";
  }, 2000);
  setTimeout(() => {
    countdown.textContent = "GO!";
  }, 3000);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//create correct / wrong random equations
function createEquations() {
  const correctEquations = getRandomInt(questionAmount);
  const wrongEquations = questionAmount - correctEquations;
  //create eq and push

  for (let i = 0; i < correctEquations; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);

    const equationValue = firstNumber * secondNumber;
    const equation = `${firstNumber} X ${secondNumber} = ${equationValue}`;
    console.log(equation);
    equationObject = { value: equation, evaluated: "true" };
    equationsArray.push(equationObject);
  }
  for (let i = 0; i < wrongEquations; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber} X ${secondNumber + 1} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber + 1} X ${
      secondNumber + 1
    } = ${equationValue}`;
    wrongFormat[2] = `${firstNumber} X ${secondNumber + 1} = ${
      equationValue - 2
    }`;
    const formatChoice = getRandomInt(3);
    const equation = wrongFormat[formatChoice];
    console.log(equation);
    equationObject = { value: equation, evaluated: "false" };
    equationsArray.push(equationObject);
  }
  shuffleArray(equationsArray);

  console.log(`EQUATIONS =  ${equationsArray}`);
}

function showGamePage() {
  gamePage.hidden = false;
  countDownPage.hidden = true;
}
const itemContainer = document.querySelector(".item-container");

function equationsToDOM() {
  equationsArray.forEach((equation) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const equationText = document.createElement("h1");
    equationText.textContent = equation.value;
    item.appendChild(equationText);

    itemContainer.appendChild(item);
  });
}

function populateGamePage() {
  itemContainer.textContent = "";
  const topSpacer = document.createElement("div");
  topSpacer.classList.add("height-240");

  const selectedItem = document.createElement("div");
  selectedItem.classList.add("selected-item");

  itemContainer.append(topSpacer, selectedItem);
  createEquations();
  equationsToDOM();

  const bottomSpacer = document.createElement("div");
  bottomSpacer.classList.add("height-500");
  itemContainer.append(bottomSpacer);
}

function select(guess) {
  
  valueY += 80;
  itemContainer.scroll(0, valueY);

  return guess ? playerGuessArray.push("true") : playerGuessArray.push("false");
}

function checkTime() {
  if (playerGuessArray.length == questionAmount) {
    console.log('guess array = ',playerGuessArray);
    clearInterval(timer);

    equationsArray.forEach((equation, index) => {
      if (equation.evaluated=== playerGuessArray[index]) {
   //NO PEN
      } else {
        penaltyTime += 0.5;
      }
    });
    finalTime = timePlayed + penaltyTime;
    console.log("TIMEplayed:", timePlayed);
    console.log("penaltyy:", penaltyTime);
    console.log("FINALTIME:", finalTime);
    scoreToDOM()
  }
}

function addTime() {
  timePlayed += 0.1;
  checkTime();
}

function startTimer() {
  timePlayed = 0;
  penaltyTime = 0;
  finalTime = 0;
  timer = setInterval(addTime, 100);
  gamePage.removeEventListener("click", startTimer);
}

gamePage.addEventListener("click", startTimer);

function showScorePage(){
    setTimeout(() => {
        playAgainBtn.hidden = false
        scorePage.hidden = false
        
    });
    gamePage.hidden = true
    scorePage.hidden = false
}

function scoreToDOM(){
    finalTimeDisplay = finalTime.toFixed(1)
    baseTime = timePlayed.toFixed(1)
    penaltyTime =penaltyTime.toFixed(1)

    baseTimeEl.textContent = `Base Time : ${baseTime}s`
    penaltyTimeEl.textContent = `Penalty Time : ${penaltyTime}s`
   finalTimeEl.textContent = `${finalTimeDisplay}s`
   updateBestScore()
   itemContainer.scrollTo({top:0,behavior:'instant'})
   showScorePage()

}

function playAgain(){
    gamePage.addEventListener('click',startTimer)
    scorePage.hidden = true
    splashPage.hidden  = false
    equationsArray = []
    playerGuessArray = []
    valueY= 0
    playAgainBtn.hidden = true




}



function getSavedBestScores(){
    if(localStorage.getItem('bestScores')){
        bestScoreArray = JSON.parse(localStorage.bestScores)

    }else{
        bestScoreArray = [{questions:10,bestScore:finalTimeDisplay},
            {questions:25,bestScore:finalTimeDisplay},
            {questions:50,bestScore:finalTimeDisplay},
            {questions:100,bestScore:finalTimeDisplay}]
            localStorage.setItem('bestScores',JSON.stringify(bestScoreArray))
    }
    bestScoreToDOM();


}


getSavedBestScores()

function bestScoreToDOM(){
    bestScores.forEach((bestScore,index)=>{
        const bestScoreEl = bestScore 
        bestScoreEl.textContent = `${bestScoreArray[index].bestScore}s`

        
    })
}

function updateBestScore(){
    bestScoreArray.forEach((score,index)=>{
        if(questionAmount == score.questions){
            //return score

            const savedBestScore = Number(bestScoreArray[index].bestScore)
              if(savedBestScore === 0 || savedBestScore > finalTime) {
                  bestScoreArray[index].bestScore = finalTimeDisplay
              } 
        }
    })
    bestScoreToDOM()
    localStorage.setItem('bestScores',JSON.stringify(bestScoreArray))

}