import { RadioItem } from "./populateDOM";

//@ts-check
export function requestJSON() {
    const requestURL = 'http://kostaslib.github.io./chillout/src/radios.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = () => {
        const radioData = request.response;
        console.log(radioData);
        for (let radio of radioData.music) {
            console.log(radio);
            new RadioItem(radio.name, radio.id, radio.img, 'music');
        }
        for (const radio of radioData.news) {
            console.log(radio);
            new RadioItem(radio.name, radio.id, radio.img, 'news');
        }
    };
}