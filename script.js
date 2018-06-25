// Try to add support for mobile: onmouseover == tap, onmousedown == second tap.

//@ts-check

let offradio = document.getElementById('offradio');

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