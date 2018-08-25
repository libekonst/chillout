//@ts-check

/** Contains static methods used as Event Handlers for animations.*/
export class Animate {

    // Assigns the appropriate Event Handlers to a DOM Element, based on its type.
    // Probably remove.
    static makeActive(element = {}) {
        const myClass = element.classList.item(0);
        const type = eventTargets.find(object => object.baseClass === myClass).type;
        console.log(type);

        if (type === 'radio') {
            Animate.makeRadioActive(element.getAttribute('id'));
        }
    }

    /**
     * Applies the radio-item-active styles and activates the play button.
     * @param {Element} element CURRENTLY USING WITH OTHER OBJECTS TOO
     */
    static makeRadioActive(element) {
        const radio = document.getElementById(element.id);

        if (!radio.classList.contains('radio-item-active')) {
            radio.classList.add('radio-item-active');
            Animate.makeButtonActive();
        } 

    }

    /**
     * Removes the radio-item-active styles and makes the play button idle.
     * @param {Element} element 
     */
    static makeRadioIdle(element){
        const radio = document.getElementById(element.id);

        radio.classList.remove('radio-item-active');
        Animate.makeButtonIdle();
    }
    
    /**
     * Makes other items of the same type display idle by removing their '-active' styles.
     * @param {Element} element
     */
    static killOtherActive(element) {
        const myClassList = element.classList;
        const myClass = element.classList.item(0);

        if (!myClassList.contains(`${myClass}-active`)) {
            const otherActive = document.getElementsByClassName(`${myClass}-active`);
            for (const activeItem of otherActive) {
                activeItem.classList.remove(`${myClass}-active`);
            }
        }
    }
    
    /** Applies the play-button-active and play-button-wrapper-active styles. */
    static makeButtonActive() {
        // const playButton = document.getElementById('play-button');
        // const buttonWrapper = document.getElementById('play-button-wrapper');

        // playButton.classList.add('play-button-active');
        // buttonWrapper.classList.add('play-button-wrapper-active');
        
        document.getElementById('play-button').classList.add('play-button-active');
        document.getElementById('play-button-wrapper').classList.add('play-button-wrapper-active');
    }

    /** Removes the play-button-active and play-button-wrapper-active styles. */
    static makeButtonIdle() {
        const playButton = document.getElementById('play-button');
        const buttonWrapper = document.getElementById('play-button-wrapper');

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