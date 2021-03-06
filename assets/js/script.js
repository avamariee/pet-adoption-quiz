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