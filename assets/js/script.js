
let modalSave = document.querySelector('#modal-save')
let modalCancel = document.querySelector('#modal-cancel')
let beginBtn = document.getElementById("begin-btn")

let modalContainer = document.getElementById("user-location")

 function showModal () {

    modalContainer.classList.add('is-active')
    console.log("Hello.")

}

// code to save user's input for location

let userLocation = function () {
    localStorage.setItem("location", modalSave)
}

modalSave.addEventListener("submit", userLocation)


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

