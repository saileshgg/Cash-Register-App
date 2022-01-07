var billInput = document.querySelector("#bill");
var cashInput = document.querySelector("#cash");

var button = document.querySelector("#check");

function clickHandler() {

    if(billInput < 0 || cashInput < billInput) {
        
    }


    console.log("Button Clicked");
}

button.addEventListener("click", clickHandler);






