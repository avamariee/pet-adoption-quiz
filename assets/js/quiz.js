//variables
var qEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var titleE1 = document.getElementById("question-title");
var startbtn = document.getElementById("start")
var currentQuestionI = 0


function start() {
    //get questions
    theQuestions(); 
}


function theQuestions() {
    //current object from question array
    var current = questions[currentQuestionI];

    //current title 
    titleE1.textContent = current.title;

    current.choices.forEach(function(choice, i ) {
        var choicePick = document.createElement("li");
        choicePick.setAttribute("class", "choice");
        choicePick.setAttribute("value", choice);

        choicePick.textContent = i + 1 + ". " + choice;

        choicesEl.appendChild(choicePick);
    })

}

//start quiz
startbtn.onclick = start;