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

    //loop
    current.choices.forEach(function(choice, i ) {
        //button for choices
        var choicePick = document.createElement("button");
        choicePick.setAttribute("class", "choice");
        choicePick.setAttribute("value", choice);

        choicePick.textContent = i + 1 + ". " + choice;

        //click event listener for choices
        choicePick.onclick = next;

        //clear choices
        choicesEl.innerHTML = "";

        //display
        choicesEl.appendChild(choicePick);
    });

}


function next() {
    currentQuestionI++;
    theQuestions();
}

//start quiz
startbtn.onclick = start;