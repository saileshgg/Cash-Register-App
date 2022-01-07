notes = [2000, 500, 100, 20, 10, 5, 1]

var input1 = document.querySelector("#bill");
var input2 = document.querySelector("#cash");
var message = document.querySelector("#error-message");

var button = document.querySelector("#check");

var twoThousand = document.querySelector("#twoThousand");
var fiveHundred = document.querySelector("#fiveHundred");
var hundred = document.querySelector("#hundred");
var twenty = document.querySelector("#twenty");
var ten = document.querySelector("#ten");
var five = document.querySelector("#five");
var one = document.querySelector("#one");



function clickHandler() {
    message.style.display = "none";

    let billAmount = parseInt(input1.value);
    let cashAmount = parseInt(input2.value);


    if(billAmount > 0) {
        if(cashAmount >= billAmount) {
            var returnAmount = cashAmount - billAmount;
            cashtobeReturned(returnAmount);

        } else {
            showMessage("Cash Amount should be greater than Bill Amount");
        }

    } else {
        showMessage("Bill Amount should be greater than 0");
    }

}

function cashtobeReturned(returnAmount) {
    for (var i = 0; i < notes.length; i++) {
        var note = Math.floor(returnAmount / notes[i]);
        //denomination[i] = note;
        returnAmount = returnAmount % notes[i];

        if (notes[i] === 2000 && note > 0) {
            twoThousand.innerHTML = note;
        } else if (notes[i] === 500 && note > 0) {
            fiveHundred.innerHTML = note;
        } else if (notes[i] === 100 && note > 0) {
            hundred.innerHTML = note;
        } else if (notes[i] === 20 && note > 0) {
            twenty.innerHTML = note;
        } else if (notes[i] === 10 && note > 0) {
            ten.innerHTML = note;
        } else if (notes[i] === 5 && note > 0) {
            five.innerHTML = note;
        } else if (notes[i] === 1 && note > 0) {
            one.innerHTML = note;
        }


        if (returnAmount === 0) {
            break;
        }
    

    }
}

function showMessage(errorMessage) {
    message.style.display = "block";
    message.innerText = errorMessage;
}

button.addEventListener("click", clickHandler);