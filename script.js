// Try adding support for mobile: onmouseover == tap, onmousedown == second tap.

//@ts-check

let offradio = document.getElementById('offradio');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
function changeToHover(){
    if(offradio.className != "radioItemTest radioItemActive"){
        offradio.className = "radioItemTest radioItemHover";
    }
}

function changeToActive(){
    if(offradio.className != "radioItemTest radioItemActive"){
        offradio.className = "radioItemTest radioItemActive";
    } else {
        offradio.className = "radioItemTest";
    }
}

function resetClassName(){
    if(offradio.className != "radioItemTest radioItemActive"){
        offradio.className = "radioItemTest";
    }
}

offradio.onmousedown = changeToActive;
offradio.onmouseover = changeToHover;
offradio.onmouseout = resetClassName;