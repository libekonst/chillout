import RadioItem from "./RadioItem";
import RadioAnim from "./RadioAnim";
import AudioController from "./AudioController";
import PlayButtonAnim from "./PlayButtonAnim";

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
 * RadioItems load themselves to the DOM automatically when created.
 * @param {XMLHttpRequest} request A XMLHttpRequest object which has a response property.
 */
function renderRadios(request) {
    const radioData = request.response;
    
    for (let radio of radioData.music) {
        new RadioItem(radio, new RadioAnim(radio.id), new AudioController(), new PlayButtonAnim(), 'music');
        console.log(`Loaded ${radio.name}`);
    }
    for (let radio of radioData.news) {
        new RadioItem(radio, new RadioAnim(radio.id), new AudioController(), new PlayButtonAnim(), 'news');
        console.log(`Loaded ${radio.name}`);
    }
}

function renderRadioSection(request) {
    // Takes the response and creates a <section></section> for each array (i.e. radio type) in JSON.
    // Then populate the section with an <h2>${type} Radios</h2>. First letter capitalized.
    // Also add an Unorder List and populate it with radio items using renderRadios().
}