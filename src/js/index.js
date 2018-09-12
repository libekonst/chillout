//@ts-check
import { getAttributeByClassName } from "./helper";
import { requestJSON } from "./populateDOM";
import controlPlayPause from "./playButton";
import addVolumeControls from "./volume-bar";


// WORKING WITH JSON
requestJSON();


// A useless array of all the Radio IDs loaded in the DOM.
// Call the fn async, after the radios are loaded, then save the array 
// to use later for right-left arrow key navigation.
setTimeout(() => {
    const radioIDs = getAttributeByClassName('radio-item', 'id');
    console.log(`Radio IDs: ${radioIDs}`);
}, 5000); 

// Play button function. Temporary.
controlPlayPause();

addVolumeControls();