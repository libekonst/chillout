//@ts-check

// Contains static methods, used as Event Handlers.
export class Animate {

    // Assigns the appropriate Event Handlers to a DOM Element, based on its type.
    static makeActive(element = {}) {
        let myClass = element.classList.item(0);
        const type = eventTargets.find(object => object.baseClass === myClass).type;
        console.log(type);

        if (type === 'radio') {
            Animate.makeRadioActive(element.getAttribute('id'));
        }
    }

    // Applies the radio-item-active styles.
    static makeRadioActive(radioID) {
        let radio = document.getElementById(radioID);

        if (!radio.classList.contains('radio-item-active')) {
            Animate.killOtherActive(radio);
            radio.classList.add('radio-item-active');
            Animate.makeButtonActive();
        } else {
            radio.classList.remove('radio-item-active');
            Animate.makeButtonIdle();
        }
    }

    // Deactivates other items of the same type.
    static killOtherActive(element = {}) {
        let myClassList = element.classList;
        let myClass = element.classList.item(0);

        if (!myClassList.contains(`${myClass}-active`)) {
            let otherActive = document.getElementsByClassName(`${myClass}-active`);
            for (let i = 0; i < otherActive.length; i++) {
                otherActive[i].classList.remove(`${myClass}-active`);
            }
        }
    }

    static makeButtonActive() {
        let playButton = document.getElementById('play-button');
        let buttonWrapper = document.getElementById('play-button-wrapper');

        playButton.classList.add('play-button-active');
        buttonWrapper.classList.add('play-button-wrapper-active');
    }

    static makeButtonIdle() {
        let playButton = document.getElementById('play-button');
        let buttonWrapper = document.getElementById('play-button-wrapper');

        playButton.classList.remove('play-button-active');
        buttonWrapper.classList.remove('play-button-wrapper-active');
    }
}

const eventTargets = [{
    type: 'radio',
    baseClass: 'radio-item'
},
{
    type: 'play-button',
    baseClass: 'play-button'
}
];