let startbtnEl = document.querySelector("#starterbtn")
let startPage = document.querySelector(".firstcontainer")
let questionPage = document.querySelector(".secondcontainer")
let finalPage = document.querySelector(".lastcontainer")
let highscorebtnEl = document.querySelector("#highscorebtn")
let quizTimer = document.querySelector("#timer")
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
let highscoreEl = document.querySelector(".highscorescontainer");

let allQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      options: ["strings", "booleans", "alerts", "numbers"],
      rightAnswer: "alerts",
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      options: ["quotes", "curly brackets", "parentheses", "square brackets"],
      rightAnswer: "parentheses",
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      options: ["numbers and strings", "other arrays", "booleans","all of the above"],
      rightAnswer: "all of the above",
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      options: ["commas", "curly brackets", "quotes", "parentheses"],
      rightAnswer: "quotes",
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      rightAnswer: "console.log",
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
    
  }
  
function checkChoice(event) {
  questionNumber++
  startQuestions();
}



