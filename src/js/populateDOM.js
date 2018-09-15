import RadioItem from "./RadioItem";
import RadioAnim from "./controllers/RadioAnim";
import AudioController from "./controllers/AudioController";
import PlayButtonAnim from "./controllers/PlayButtonAnim";
import RadioSection from "./RadioSection";

/**
 * Sends an HTTP Request to get the radios.json file.
 * When the response object is returned, calls a function that handles the json data.
 */
export function requestJSON() {
    // const requestURL = "http://127.0.0.1:5500/src/radios.json";
    const requestURL = 'https://kostaslib.github.io/chillout/src/radios.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = () => renderRadios(request);
}

/**
 * Parses the response object and creates RadioItem objects using its data.
 * RadioItems load themselves to the DOM automatically when instantiated.
 * @param {XMLHttpRequest} request A XMLHttpRequest object which has a response property.
 */
function renderRadios(request) {
    const radioData = request.response;
    setFirstRadio(radioData);
    
    // category: The JSON object's key name, as a String.
    // radioData[category]: The value of said key, here being an array.
    for (let category in radioData) {
        createRadioSection(category);
        radioData[category].forEach(radio => createRadioItem(radio, category));
    }
}

function setFirstRadio(radioData){
    const audio = new AudioController();
    const firstKey = Object.keys(radioData)[0]; // Returns a String.
    const firstRadio = radioData[firstKey][0]; // The 1st element of the Array.
    audio.lastRadio = firstRadio;
}

/** Accepts a property from the JSON object that represents a radio type
  * and creates a <section> element for that radio type. */
function createRadioSection(category){
    return new RadioSection(category);
}

/**Accepts an object with data about the radio and the category where it should
 * be loaded. Injecting dependencies in the constructor. */
function createRadioItem(radioInfo, category){
    return new RadioItem(radioInfo, new RadioAnim(radioInfo.id), new AudioController(), new PlayButtonAnim(), category); 
}
