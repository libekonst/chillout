//@ts-check
export class RadioItem{
    /** 
     * Bundles properties and attributes together to create a radio item and loads it to the DOM.
     * @param {String} name 
     * @param {String} id 
     * @param {String} imgURL 
     * @param {String} type 
     */
    constructor(name, id, imgURL, type){
        this.name = name;
        this.id = id;
        this.img = imgURL;
        this.type = type;
        this.render();
    }

    render(){
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
}