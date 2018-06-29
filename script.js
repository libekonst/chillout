// Try to add support for mobile: onmouseover == tap, onmousedown == second tap.

//@ts-check

function animationHandler (radio) {
    // A function responsible for listening to mouse events and responding with the proper animation

    radio = document.getElementById(radio);  // returns object
    let isActive = false;

    function changeToHover(){
        if(radio.className != "radio-item radio-item-active"){
            radio.className = "radio-item radio-item-hover";
        }
    }
    
    function changeToActive(){
        if(radio.className != "radio-item radio-item-active"){
            let otherActive = document.getElementsByClassName('radio-item radio-item-active')
            for (let index = 0; index < otherActive.length; index++) {
                otherActive[index].className = 'radio-item';                
            }
            radio.className = "radio-item radio-item-active";
        } else {
            radio.className = "radio-item radio-item-hover";
        }
    }
    
    function resetClassName(){
        if(radio.className != "radio-item radio-item-active"){
            radio.className = "radio-item";
        }
    }
    radio.onmousedown = changeToActive;
    radio.onmouseover = changeToHover;
    radio.onmouseout = resetClassName;
}


function animationInitializer(){
    // Calls the animationHandler() for every radio.
    // might accept as an argument an array or an object to iterate on and create the radioID array

    let radioID = ['offradio', 'best', 'enlefko', 'imagine', 'pepper'];
    for (let i = 0; i < radioID.length; i++) {
        animationHandler(radioID[i]);
    }
}

animationInitializer();
