//variables
var qEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var titleE1 = document.getElementById("question-title");
var startbtn = document.getElementById("modal-save")
var allDoneEl = document.getElementById("all-done");
var currentQuestionI = 0


function start() {
    //hide start quiz btn
    document.getElementById("modal-save").style.display = "none";
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

// ava's code starts here

let modalSave = document.querySelector('#modal-save')
let modalCancel = document.querySelector('#modal-cancel')
let beginBtn = document.getElementById("begin-btn")
let deleteModal = document.getElementById("delete-modal")
let modalContainer = document.getElementById("user-location")

 function showModal () {

    modalContainer.classList.add('is-active')
    console.log("Hello.")

}

// code to save user's input for location

let userLocation = function () {
    let modalInfo = document.querySelector("#user-info").value
    localStorage.setItem("location", modalInfo)
    modalContainer.classList.remove('is-active')
    console.log("Hey there.")
    
}

modalSave.addEventListener("click", userLocation)

// function for when the user clicks the 'x' button on the modal.

function modalDelete () {

    modalContainer.classList.remove('is-active')

}

deleteModal.addEventListener("click", modalDelete)

// button listerner for when the user clicks the 'cancel' button on the modal.

modalCancel.addEventListener("click", modalDelete)


// fetch request code for the API's
// random cat image API
var kittykey = "UEjr9nH6HP9ZmWwr0s7mxku-9mpS7dUGmkilXBrhRcM"

function kittyFetch() {


    fetch(
        // api
        'https://api.unsplash.com/photos/?client_id='
        +
        kittykey
    )
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

        })

}

kittyFetch();

// random dog image API

function dogFetch() {

    fetch(
        'https://dog.ceo/api/breeds/image/random'
    )
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
}
dogFetch();

beginBtn.addEventListener("click", showModal)

// ava's code ends here



//start quiz
startbtn.onclick = start;