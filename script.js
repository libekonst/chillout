// JS on click swaps from html class to another, activating each style.
// Switch: if class hover is visible, on click activates class active and disables hover. This way it works for mobile too (first tap = hover)
// Three states. notActive:hover, isActive(playing), isActive(puased). The last one will have it remain afloat but blue instead of green.
// Or no need. Simply hover is blue and isActive is always green.  

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