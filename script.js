let start = document.querySelector("#startbtn")
let questionEl = document.querySelector(".questions")
let startPage = document.querySelector(".start-page")


start.addEventListener("click", Quiz)

function Quiz() {
    startPage.style.display = "none";
    questionEl.style.display = "block";
}
function showResults(){

}


