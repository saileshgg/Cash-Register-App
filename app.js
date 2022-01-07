notes = [2000, 500, 100, 20, 10, 5, 1]

var input1 = document.querySelector("#bill");
var input2 = document.querySelector("#cash");
var button = document.querySelector("#check");

var denomination = [];

function clickHandler() {

    var billAmount = input1.value;
    var cashAmount = input2.value;

    if(billAmount < 0) {
        console.log("Invalid Input 1");
    } else if(billAmount > cas) {
        console.log("Invalid Input 2");
    }
    else {
        var returnAmount = cashAmount - billAmount;
        
        for(var i=0;i<notes.length;i++) {
            var note = Math.floor(returnAmount/notes[i]);
            denomination[i] = note;
            returnAmount = returnAmount % notes[i];
            if(returnAmount === 0) {
                break;
            }
        }

        console.log(denomination);
    }


    
}

button.addEventListener("click", clickHandler);






