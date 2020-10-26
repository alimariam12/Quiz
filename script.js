let startbtnEl = document.querySelector("#starterbtn")
let startPage = document.querySelector(".firstcontainer")
let questionPage = document.querySelector(".secondcontainer")
let finalPage = document.querySelector(".lastcontainer")
let highscorebtnEl = document.querySelector("#highscorebtn")
let quizTimer = document.querySelector("#timer")
let beginQuestions = document.querySelector("#quizstarts")
let finalScore = document.querySelector("#getscore")
let submitbtnEl = document.querySelector("#submit")
let answerBtn = document.querySelector("#A")
let yourfinalScore = 0
let totalSeconds = 100;
let timer = totalSeconds;
let nextQuestion 
let questionNumber = 0
let answerChoices = document.querySelector("#question-text");
let questionHead = document.getElementById("questions");
let secondsLeft = (questions.length * 15 + 1);

let allQuestions = [
    {
      question: "Question 1: blah blah blah question question?",
      options: ["blah 1", "blah 2", "blah 3", "blah 4"],
      rightAnswer: "blah 3",
    },
    {
      question: "Question 1: blah blah blah question question?",
      options: ["blah 1", "blah 2", "blah 3", "blah 4"],
      rightAnswer: "blah 3",
    },
    {
      question: "Question 1: blah blah blah question question?",
      options: ["blah 1", "blah 2", "blah 3", "blah 4"],
      rightAnswer: "blah 3",
    },
    {
      question: "Question 1: blah blah blah question question?",
      options: ["blah 1", "blah 2", "blah 3", "blah 4"],
      rightAnswer: "blah 3",
    },
    {
      question: "Question 1: blah blah blah question question?",
      options: ["blah 1", "blah 2", "blah 3", "blah 4"],
      rightAnswer: "blah 3",
    },
]

startbtnEl.addEventListener("click", startQuiz)
function startQuiz() {
    startPage.style.display = "none";
    questionPage.style.display = "block";
    let startTime = setInterval(function() {
        timer--; document.querySelector("#timer").innerHTML = timer;
        if (timer === 0) {
            console.log("timer")
            clearInterval(startTime)
            document.querySelector("#timer").innerHTML = "0"
        }
    }, 1000) ;
    console.log("checking")
    
    startQuestions();
}
let answer;
function startQuestions() {
    questionHead.textContent = allQuestions[questionNumber].question;
    answerChoices.innerHTML = "";
  
    let choices = allQuestions[questionNumber].options;
  
    for (let i = 0; i < choices.length; i++) {
      let nextChoice = document.createElement("button");
  
      nextChoice.textContent = choices[i];
      nextChoice.setAttribute("class", "p-3 m-1 btn btn-light btn-block answer");
      nextChoice.addEventListener("click", checkChoice);
      answerChoices.appendChild(nextChoice);
    }
    // checkChoice(choices)();
  }
  
  function checkChoice(choices) {
    console.log("hi");
    questionNumber++
    if (choices === answer) {
      allQuestions[questionNumber].rightAnswer;
    } else {
    }
    startQuestions ();
  }
function checkChoice(event) {
  console.log(event.target);
}



