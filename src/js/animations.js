// @ts-check

// Use polymorphism instead of calling specific static methods.
// Have various objects and each object will implement the methods differently.
// Then a function will map the requested object to call the apropriate fn.

function makeActive(element){
    const target = eventTargets.map( obj => obj.baseClass === element.classList[0] );

    if (target.type === 'radio') radio.makeActive();

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

const radio = {
    makeActive: element => {
        const radio = document.getElementById(element.id);

        if (!radio.classList.contains('radio-item-active')) {
            radio.classList.add('radio-item-active');
            playButton.makeActive();
        } 
    },

    makeIdle: element => {
        const radio = document.getElementById(element.id);

        radio.classList.remove('radio-item-active');
        playButton.makeIdle();
    },

    killOtherActive: element => {
        const myClassList = element.classList;
        const myClass = element.classList.item(0);

        if (!myClassList.contains(`${myClass}-active`)) {
            const otherActive = document.getElementsByClassName(`${myClass}-active`);
            for (const activeItem of otherActive) {
                activeItem.classList.remove(`${myClass}-active`);
            }
        }
    }
};

const playButton = {
    makeActive: () => {
        document.getElementById('play-button').classList.add('play-button-active');
        document.getElementById('play-button-wrapper').classList.add('play-button-wrapper-active');
    },

    makeIdle: () => {
        const playButton = document.getElementById('play-button');
        const buttonWrapper = document.getElementById('play-button-wrapper');

        playButton.classList.remove('play-button-active');
        buttonWrapper.classList.remove('play-button-wrapper-active');
    }
};