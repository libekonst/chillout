import { RadioItem } from "./RadioItem";

//@ts-check
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

function renderRadioSection(request){
    // Takes the response and creates a <section></section> for each array (i.e. radio type) in JSON.
    // Then populate the section with an <h2>${type} Radios</h2>. First letter capitalized.
    // Also add an Unorder List and populate it with radio items using RenderRadios().
}

function renderRadios(request) {
    const radioData = request.response;
    console.log(`Radio data: ${radioData}`);
    for (let radio of radioData.music) {
        console.log(radio);
        new RadioItem(radio.name, radio.id, radio.img, 'music');
    }
    for (const radio of radioData.news) {
        console.log(radio);
        new RadioItem(radio.name, radio.id, radio.img, 'news');
    }
}
