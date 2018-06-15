// const audio = document.getElementById('radioSource');
// const player = new Audio("http://46.28.53.118:7062/stream?1529011397134");
let audio = 'http://46.28.53.118:7062/stream?1529011397134';


/* 
function audioInitializer(source){
    const player = new Audio(source);
}
 */

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
