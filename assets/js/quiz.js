//variables
var qEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var titleE1 = document.getElementById("question-title");
var startbtn = document.getElementById("start")
var allDoneEl = document.getElementById("all-done");
var currentQuestionI = 0


function start() {
    //hide start quiz btn
    document.getElementById("start").style.display = "none";
    //get questions
    theQuestions(); 
}


function theQuestions() {
    //current object from question array
    var current = questions[currentQuestionI];

    //current title 
    titleE1.textContent = current.title;

    //clear choices
    choicesEl.innerHTML = "";

    //loop
    current.choices.forEach(function(choice, i ) {
        //button for choices
        var choicePick = document.createElement("button");
        choicePick.setAttribute("class", "choice");
        choicePick.setAttribute("value", choice);

        choicePick.textContent = i + 1 + ". " + choice;

        //click event listener for choices
        choicePick.onclick = next;

        //display
        choicesEl.appendChild(choicePick);
    });

}


function next() {
    
    currentQuestionI++;
  
    theQuestions();
}


function final() {
    // show result screen
    allDoneE1.removeAttribute("class");

    //hide questions
    qE1.setAttribute("class", "hide");
}

//start quiz
startbtn.onclick = start;