//variables
var qEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var titleE1 = document.getElementById("question-title");
var startbtn = document.getElementById("start")
var currentQuestionI = 0


function start() {
    theQuestions(); 
}


function theQuestions() {
    var current = questions[currentQuestionI];
    titleE1.textContent = current.title;
}

startbtn.onclick = start;