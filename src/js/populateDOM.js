import { RadioItem } from "./RadioItem";

//@ts-check
/**
 * Sends an HTTP Request to get the radios.json file.
 * When the response property is implemented with the response object, 
 * calls a function that handles the json data from the response.
 */
export function requestJSON() {
    const requestURL = 'https://kostaslib.github.io/chillout/src/radios.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = () => {
        renderRadios(request);

    };
}

/**
 * Parses the response object and creates RadioItem objects using its data.
 * Each RadioItem object loads itself to the DOM when it gets created.
 * @param {XMLHttpRequest} request A XMLHttpRequest object which has a response property.
 */
function renderRadios(request) {
    const radioData = request.response;
    
    for (let radio of radioData.music) {
        new RadioItem(radio.name, radio.id, radio.img, radio.source, 'music');
        // The created object is not stored in a var because we don't need it anymore. We can access the Element directly from the DOM.
    }
    for (const radio of radioData.news) {
        new RadioItem(radio.name, radio.id, radio.img, radio.source, 'news');
    }
}


function renderRadioSection(request){
    // Takes the response and creates a <section></section> for each array (i.e. radio type) in JSON.
    // Then populate the section with an <h2>${type} Radios</h2>. First letter capitalized.
    // Also add an Unorder List and populate it with radio items using RenderRadios().

    const radioTypes = request.response;

    for (let type in radioTypes){
        // ...
    }
}

