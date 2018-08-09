//@ts-check
export class RadioItem {

    /** 
     * Bundles properties together to create a radio item, load it to the DOM and assign event listeners to it.
     * @param {String} name The value used as the "data-name" attribute.
     * @param {String} id The value used as the "id" attribute.
     * @param {String} imgURL The source for the background image of the child div.
     * @param {String} src The radio's stream source
     * @param {String} type Used to render the radio item under a certain parent <ul> element, based on its place in the JSON file.
     */
    constructor(name, id, imgURL, src, type) {
        this.name = name;
        this.id = id;
        this.img = imgURL;
        this.src = src;
        this.type = type;
        this.render();
        console.log(this);
        document.getElementById(this.id).addEventListener('click', () => this.play());
    }

    /** Loads a RadioItem object into the DOM and converts its properties into Element attributes. */
    render() {
        const img = document.createElement('div');
        img.setAttribute('class', 'radio-image');
        img.style.backgroundImage = `url(${this.img})`;

        const radioItem = document.createElement('li');
        radioItem.setAttribute('class', 'radio-item');
        radioItem.setAttribute('id', this.id);
        radioItem.setAttribute('data-name', this.name);
        radioItem.appendChild(img);

        const parent = document.getElementById(`${this.type}-radios`);
        parent.appendChild(radioItem);
    }

    /** Finds the <audio> element in the DOM, changes its source and calls its play() or pause() methods.*/
    play() {
        const player = document.getElementsByTagName('audio')[0];

        console.log(`Loading ${this.name}...`);      
        
        if (player.src !== this.src) player.src = this.src;
        if (player.paused) {
            player.play()
                .then(() => console.log(`Playing ${this.name}...`))
                .catch( e => console.log(`Failed to load radio... :( ${e}`));
        } else player.pause();

        console.log(`Player paused? ${player.paused}`);
    }
}