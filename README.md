# The Chillout App
*A modern web radio platform.*

Although nowadays we mostly enjoy our favorite radios online, we miss the ease of using the FM tuner to swap to that other
station and satisfy our music taste intricacies; web radios are scattered and pages that try to gather them into one place
are rather primitive and non-interactive.

This app is an attempt to solve this problem by introducing a contemporary and interactive platform that combines a customizable
collection of radios and an audio player in a single lightweight page, promising a modern and refined experience.

Simply click on a radio and enjoy the music! [Tune in to your groove.](https://kostaslib.github.io/chillout/)

You can also add this app to your home screen on any device:
* On mobile, open in Chrome, click the **three dots** in the right corner and select **Add to Home Screen**.
* On desktop, open in Chrome, click the **three dots** in the right corner, select **More Tools** and **Create Shortcut**.

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
This project is written in pure JavaScript(ES6+) and does not rely on any JS framework, but several node modules are required for its development, like [Webpack](https://webpack.js.org/) and [Sass](https://sass-lang.com/). To install the devDependencies described in [package.json](https://github.com/KostasLib/chillout/blob/master/package.json): 

* Install [Node.js](https://nodejs.org/en/) on your machine
* Navigate to the root folder
* Run ```npm i``` in the command line

### Simulating a simple Database
No back-end or database have been developed for the project yet so to avoid hard-coding the radio sources into the source code, they are instead stored in a [```JSON file```](https://github.com/KostasLib/chillout/blob/master/src/radios.json). A function sends a GET request asking for this file and once the response is returned, the JSON's information is then used to populate the DOM with radio items.

When a user opens the app, they request this file from ```https://kostaslib.github.io/chillout/src/radios.json```.

#### Editing The Radio Sources
To load different radios in the DOM, you have to edit the radios.json file and let the app know where to find the updated version. During development, request the file from the local dev server:

* Navigate to the [```populateDOM.js```](https://github.com/KostasLib/chillout/blob/master/src/js/populateDOM.js) file, find the ```requestJSON()``` function and replace the ```requestURL``` variable's value with ```'http://localhost:port/src/radios.json';```.
* Make sure to change ```localhost:port``` to your local development server's address and port.

The app will generate as many radios and radio sections as it finds in [```radios.json```](https://github.com/KostasLib/chillout/blob/master/src/radios.json), so you can add multiple entries and radio categories. The JSON contains an object, each key is a radio category and each key's value is an array of objects with data about a radio. Make certain that you enter your data in the same fashion.

### Usage
Before you start editing the code, type ```npm run dev``` in the command line. Webpack and Sass will start watching your files for changes and bundle them into single ```main.js``` and ```style.css``` files in the [```build/```](https://github.com/KostasLib/chillout/tree/master/build) directory. The produced files are fed into ```index.html``` when they are saved. Use a development server tool that serves this html file.

## Deployment
If you [edited the radio sources](#editing-the-radio-sources), change the ```requestURL``` variable's value to the address where the radios.json will be hosted.

Finally type ```npm run build``` in the command line to produce files ready for deployment. Webpack and Sass will bundle all .js and .scss files into single non-human readable ```main.js``` and ```style.css``` files in the [```build/```](https://github.com/KostasLib/chillout/tree/master/build) folder, which the browser can process faster.

## TODOs
* Add a landing page.
* Add a navbar with links to each radio section.
* Add favorites + floating button that displays them.
* Add option for light theme || rotating themes based on time of day (purple white - day, orange - evening, current-night)
* Add different views for the radio items (list view, etc).
* Prompt the user to Add to Home Screen on mobile.
* Add option to stream playlists from Spotify.

## Acknowledgements
The logo for this app was created with assets from [The Noun Project](https://thenounproject.com/).
