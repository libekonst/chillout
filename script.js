/* 
function audioInitializer(source){
    const player = new Audio(source);
}*/

// using audio as the argument on the constructor doesn't work.
// audio is an object. Can I / Do I need to access the url itself from the source tag? 
let audio = document.getElementById('radioSource');
let url = 'http://46.28.53.118:7062/stream?1529011397134';
const player = new Audio(url);
// audioInitializer(url);

function playAudio(){
    player.play();
}

function pauseAudio(){
    // alert('the function works');
    player.pause();
}
