//@ts-check
import { getAttributeByClassName } from "./helper";
import { requestJSON } from "./populateDOM";
import controlPlayPause from "./playButton";


// WORKING WITH JSON
requestJSON();


// A useless array of all the Radio IDs loaded in the DOM. Cool stuff.
const randomMiliSeconds = 5000;
setTimeout(() => {
    const radioIDs = getAttributeByClassName('radio-item', 'id');
    console.log(`Radio IDs: ${radioIDs}`);
}, randomMiliSeconds); 

// Play button function. Temporary.
controlPlayPause();
