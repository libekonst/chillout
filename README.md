# The Chillout App
*A modern web radio platform.*

Although nowadays we mostly enjoy our favorite radios online, we miss the ease of using the FM tuner to swap to that other
station and satisfy our music taste intricacies; web radios are scattered and pages that try to gather them into one place
are rather primitive and non-interactive.

This app is an attempt to solve this problem by introducing a contemporary and interactive platform that combines a customizable
collection of radios and an audio player in a single lightweight page, promising a modern and refined experience.

Simply click on a radio and enjoy the music! [Tune in to your groove.](https://kostaslib.github.io/chillout/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Installing
Clone the repo by running ```git clone https://github.com/KostasLib/chillout.git``` in the command line. See the [prerequisites](#prerequisites) for devDependencies.

### Typechecking
The project is utilizing [JSDoc](http://usejsdoc.org/)'s funny notations along with TypeScript's type checker for safer coding. Typescript natively supports JSDoc to provide type errors in compile time and intellisense features about your code.

Visual Studio Code ships with Typescript, so to use its type checker either include ```//@ts-check``` at the first line of a file or check all files by setting the ```javascript.implicitProjectConfig.checkJs``` option to true. If you are using another editor, you need to [install Typescript](https://www.npmjs.com/package/typescript) first.

Find out more about [typechecking with JSDoc](https://github.com/Microsoft/TypeScript-wiki/blob/master/JSDoc-support-in-JavaScript.md).

Use a linter, like [ESLint](https://eslint.org/) along with type checking for a joyful javascript experience!

### Prerequisites
This project is written in pure JavaScript(ES6+) and does not rely on any JS framework, but several node modules are required for its development, like [webpack](https://webpack.js.org/) and [Sass](https://sass-lang.com/). To install the devDependencies described in [package.json](https://github.com/KostasLib/chillout/blob/master/package.json): 

* Install [Node.js](https://nodejs.org/en/) on your machine
* Navigate to the root folder
* Run ```npm i``` in the command line

### Imitating a simple Back-end System
No back-end or database have been developed for the project yet so to avoid hard-coding the radio sources into the source code, they are instead stored in a [JSON file](https://github.com/KostasLib/chillout/blob/master/src/radios.json). A function sends a GET request asking for this file and once the response is returned, the JSON's information is then used to populate the DOM with radio items.

When a user opens the app, he requests this file from ```https://kostaslib.github.io/chillout/src/radios.json```.

#### Editing The Radio Sources
To load different radios in the DOM, you have to edit the radios.json file and let the app know where to find the updated version. During development, request the file from the local dev server:

* Navigate to the [populateDOM.js](https://github.com/KostasLib/chillout/blob/master/src/js/populateDOM.js) file, find the ```requestJSON()``` function and replace the ```requestURL``` variable's value with ```'http://localhost:mySocket/src/radios.json';```.
* Make sure to change ```localhost:mySocket``` to your local development server's address and socket.

### Usage
Before you start editing the code, type ```npm run dev``` in the command line. Webpack and Sass will start watching your files for changes and bundle them into single ```main.js``` and ```style.css``` files in the ```build/``` directory. The produced files are fed into ```index.html``` when they are saved. Use a development server tool that serves this html file.

## Deployment
If you [edited the radio sources](#editing-the-radio-sources), change the ```requestURL``` variable's value to the address where the radios.json will be hosted.

Finally type ```npm run build``` in the command line to produce files ready for deployment. Webpack and Sass will bundle all .js and .scss files into single non-human readable ```main.js``` and ```style.css``` files in the ```build/``` folder, which the browser can process faster.

--------------------------------------
# Old and obsolete :(

## Animation States and Event Listeners
Most interactive items in the app (event targets) have three different animation states that can be activated (i.e. styles that can be applied). Each state is bound to a different event listener, which waits for the equivalent event to be raised before calling the function that activates the state.
- **Idle:** This is the default state of an item when it is not interacted with. This state is also activated by the ```changeToIdle()``` method when an item loses focus (bound to ```onmouseout``` ).
- **Hover:** This state is activated when the user hovers the mouse over the item, to indicate that the item is interactive. Activated by the```changeToHover()``` method (bound to ```onmouseenter```).
- **Active:** This state is activated when the user clicks on an item. Activated by the ```changeToActive()``` method (bound to ```onmousedown```).

An item can stay in the **active** state either momentarily, only to provide the animation, or until it is deactivated. The main features of the app stay in their active state until directed otherwise. For this reason, the active state is the most prominent state, meaning that:
1. When an item is **active**, its other event listeners stop responding to raised events.
2. Only one item of the same type (e.g. ```<div class="radio-item"/>```) can be **active** at any time. If a similar item is already active, it will be deactivated.

Some items, however, can enter a fourth state which is triggered when an already ***active*** item gets ***hovered***. This state, namely **Active-hover**, provides visual feedback to the user that when clicked, this item will be deactivated.

**Active-hover** is a different state than **hover** in that it can be trigerred only when an item is already **active**, its styles override the **active** styles and when the item leaves the **active-hover** state, it returns to **active**. Similar to **hover**, **active-hover** can be activated when the ```onmouseenter``` event is raised.

To help ```changeToHover()``` decide which of the two states to activate, the ```.hasActiveHover``` property is introduced. This property takes a ```Boolean``` value that can be passed as an optional arguement to the constructor. If not specificed, ```hasActiveHover``` defaults to false, which invokes the default behavior referenced in the three basic states.

### Adding an Event Listener for the ```onmouseover``` event.

To add event listeners on the desired Element object (the event target), an instance of the ```ElementAnimationState``` class must be created first and the event target object should be passed as the arguement. Then, the event listener is initialized by calling the respective ```ElementAnimationState``` method. For example: 
```Javascript
function addEventListeners(){
    const radio = document.getElementById(radioID); // Returns the desired Element object.
    const animationHandler = new ElementAnimationState(radio);
    radio.addEventListener('mouseenter',() => animationHandler.changeToHover(radio));
    radio.addEventListeners('mouseout',() => animationHandler.changeToIdle(radio));
    }
}
```
The ```changeToHover()``` and ```changeToIdle()``` methods are declared in the ```AnimationTools``` class:
```Javascript
// Contains methods to be used as event handlers.
class AnimationTools {

    // Creates an object with data used by the event handlers.
    constructor(element = {}, hasActiveHover = false) {
        this.idle = element.className;
        this.hover = `${element.className} ${element.className}-hover`;
        this.active = `${element.className} ${element.className}-active`;
        this.activeHover = `${element.className} ${element.className}-active-hover`;
        this.hasActiveHover = hasActiveHover;
    }
    
        // onMouseOver
    changeToHover(element = {}) {
        if (element.className === this.idle) {
            element.className = this.hover;
        } else if (this.hasActiveHover) {
            element.className = this.activeHover;
        }
    }

    // onMouseOut
    changeToIdle(element = {}) {
        if (element.className === this.hover) {
            element.className = this.idle;
        } else if (this.hasActiveHover) {
            element.className = this.active;
        }
    }
}
```
Since ```hasActiveHover``` is not specified, it defaults to false and the radio object follows the default animation states behavior. For a play-button on the other hand, we want the additional **active-hover** state, so we pass ```true``` as the second parameter in the constructor:
```Javascript
function addAnotherEventListener(){
    const playButton = document.getElementById('play-button');
    const playButtonState = new AnimationTools(playButton.className, true);
    playButton.onmouseover = () => {
        playButtonState.changeToHover(playButton);
    };
}
