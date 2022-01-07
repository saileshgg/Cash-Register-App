notes = [2000, 500, 100, 20, 10, 5, 1]

var input1 = document.querySelector("#bill");
var input2 = document.querySelector("#cash");
var button = document.querySelector("#check");

var twoThousand = document.querySelector("#twoThousand");
var fiveHundred = document.querySelector("#fiveHundred");
var hundred = document.querySelector("#hundred");
var twenty = document.querySelector("#twenty");
var ten = document.querySelector("#ten");
var five = document.querySelector("#five");
var one = document.querySelector("#one");

//console.log(twoThousand);

//var denomination = [];

function clickHandler() {

    var billAmount = input1.value;
    var cashAmount = input2.value;

    if(billAmount < 0) {
        console.log("Invalid Input 1");
    } else if(billAmount > cashAmount) {
        console.log("Invalid Input 2");
    }
    else {
        var returnAmount = cashAmount - billAmount;
        
        for(var i=0;i<notes.length;i++) {
            var note = Math.floor(returnAmount/notes[i]);
            //denomination[i] = note;
            returnAmount = returnAmount % notes[i];

            if(notes[i] === 2000 && note > 0) {
                twoThousand.innerHTML = note;
            } else if(notes[i] === 500 && note > 0) {
                fiveHundred.innerHTML = note;
            } else if(notes[i] === 100 && note > 0) {
                hundred.innerHTML = note;
            } else if(notes[i] === 20 && note > 0) {
                twenty.innerHTML = note;
            } else if(notes[i] === 10 && note > 0) {
                ten.innerHTML = note;
            } else if(notes[i] === 5 && note > 0) {
                five.innerHTML = note;
            } else if(notes[i] === 1 && note > 0){
                one.innerHTML = note;
            }
  

            if(returnAmount === 0) {
                break;
            }
        }

        
    }


    
}

button.addEventListener("click", clickHandler);






