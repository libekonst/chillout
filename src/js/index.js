//@ts-check
import { getAttributeByClassName } from "./helper";
import { requestJSON } from "./populateDOM";
import { controlPlayPause } from "./playButton";


// WORKING WITH JSON
requestJSON();


// A useless array of all the Radio IDs loaded in the DOM. Cool stuff.
setTimeout(() => {
    const radioIDs = getAttributeByClassName('radio-item', 'id');
    console.log(`Radio IDs: ${radioIDs}`);
}, 5000); 

// Play button function. Temporary.
controlPlayPause();

// Add a controller Element in the DOM. When a radioItem is activated, it will pass its ID as a unique controller attribute.
// The playButton will read this attribute and re-activate the radioItem as needed.