// Tess's code starts here

//variables
var qEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var titleE1 = document.getElementById("question-title");
var startbtn = document.getElementById("modal-save")
var finalEl = document.getElementById("petFinder");
var currentQuestionI = 0
var score = 0 


function start() {
    //hide start quiz btn
    document.getElementById("modal-save").style.display = "none";
    //get questions
    theQuestions();
}


function theQuestions() {
    //current object from question array
    let questionsEl = document.getElementById("questions")
    questionsEl.classList.remove('hide')
    var current = questions[currentQuestionI];

    //current title 
    titleE1.textContent = current.title;

    //clear choices
    choicesEl.innerHTML = "";

    //loop
    current.choices.forEach(function (choice, i) {
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


function next(event) {
//console.log(event.target.textContent[0])
    if (+event.target.textContent[0] === 1){
        score-- 
    }
    else if (+event.target.textContent[0] === 2){
        score++
    };

    console.log(score)

    currentQuestionI++;

    // check for more questions
    if (currentQuestionI === questions.length) {
        final();
    } else {
        theQuestions();
    }

}


function final() {

    // show result screen
    finalEl.removeAttribute("class");
   

    //hide questions
    document.getElementById("questions").style.display = "none";
}

// Tess's code ends here

/////////////////////////////////////////////////////////////////

// ava's code starts here

let modalSave = document.querySelector('#modal-save')
let modalCancel = document.querySelector('#modal-cancel')
let beginBtn = document.getElementById("begin-btn")
let deleteModal = document.getElementById("delete-modal")
let modalContainer = document.getElementById("user-location")

function showModal() {

    modalContainer.classList.add('is-active')
    console.log("Hello.")

}

// code to save user's input for location

let userLocation = function () {
    let modalInfo = document.querySelector("#user-info").value
    localStorage.setItem("location", modalInfo)
    modalContainer.classList.remove('is-active')
    console.log("Hey there.")
    beginBtn.classList.add('hide')

}

modalSave.addEventListener("click", userLocation)

// function for when the user clicks the 'x' button on the modal.

function modalDelete() {

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
        'https://api.unsplash.com/photos/random?query=cats,kittens,cat&client_id='
        +
        kittykey
    )
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data);

            // select container to place kitty picture

            let kittyContainer = document.querySelector("#kitty-container")
            // empty the current html
            kittyContainer.innerHTML = '';

            // create image element to append to kittyContainer element

            let kittyImg = document.createElement('img')
            kittyImg.setAttribute('src', response.urls.small)
            kittyImg.classList.add('animal-images')

            kittyContainer.appendChild(kittyImg);


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
        .then(function (response) {
            console.log(response.data);

            // select container to place dog picture

            let doggyCotainer = document.querySelector("#doggy-container")
            // empty the current html
            doggyCotainer.innerHTML = '';
            // create image elemenet to append to doggyContainer element

            let doggyImg = document.createElement('img')
            doggyImg.setAttribute('src', response.message)
            doggyImg.classList.add('animal-images')

            doggyCotainer.appendChild(doggyImg)
        })
}
dogFetch();

// let petFinder = "HwwW7HsxodZ98IyufO4qxjMN7Y5jliJEfxInvT5wwpqImlzJCP"

// function petfinderFetch() {
//     fetch(
//         'http://api.petfinder.com/my.method? ' + 'key=' + petFinder + '&arg1=foo' 
        
//     )
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         console.log(response.data)

//     })
// }
// petfinderFetch()

// alternative to petfinder API? does not work with CORS, unable to make requests.

function adoptionDisplay(){
    // code to display adoption information after quiz has ended
    // https://www.petfinder.com/search/dogs-for-adoption/us/utah/
    // https://www.petfinder.com/search/cats-for-adoption/us/utah/

    if ('user is cat person') {
        document.getElementById("petfinder-title").innerHTML = "<a href='https://www.petfinder.com/search/cats-for-adoption/us/" + localStorage.getItem("location") + "'>Click Here for Pet Adoptions in your Area!</a>"
    }
    else if ('user is dog person'){
        document.getElementById("petfinder-title").innerHTML = "<a href='https://www.petfinder.com/search/dogs-for-adoption/us/" + localStorage.getItem("location") + "'>Click Here for Pet Adoptions in your Area!</a>"
    }

}

// call adoptionDisplay after quiz has ended


beginBtn.addEventListener("click", showModal)

// ava's code ends here



//start quiz
startbtn.onclick = start;