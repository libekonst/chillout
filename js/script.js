//@ts-check

function animationHandler (radio) {
    // A function responsible for listening to mouse events and responding with the proper animation

    radio = document.getElementById(radio);  // returns object
   
    function changeToHover(){
        if(radio.className != "radio-item radio-item-active"){
            radio.className = "radio-item radio-item-hover";
        }
    }
    
    function changeToActive(){
        if(radio.className != "radio-item radio-item-active"){
            let otherActive = document.getElementsByClassName('radio-item radio-item-active');  // returns an indexable NodeList object 
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

/* ------------------PLAY IMAGE------------------ */
function playButtonAnimation() {
    const playImage = document.getElementById('play-image');

    function changeToHover(){
        if(playImage.className == "play-image"){
            playImage.className = "play-image play-image-hover";
        } else {
            playImage.className = "play-image play-image-active-hover";
        }
    }
    
    
    function changeToActive(){
        if(playImage.className == "play-image play-image-hover"){
            playImage.className = "play-image play-image-active";
        } else {
            playImage.className = "play-image play-image-hover";
        }
    }
    
    function resetClassName(){
        if(playImage.className == "play-image play-image-hover"){
            playImage.className = "play-image";
        } else if (playImage.className == "play-image play-image-active-hover") {
            playImage.className = "play-image play-image-active";
        }
    }

    playImage.onmousedown = changeToActive;
    playImage.onmouseover = changeToHover;
    playImage.onmouseout = resetClassName;
}

playButtonAnimation();