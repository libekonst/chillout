//@ts-check
export class RadioItem{
    /**
     * Assign attribute values to the radio item.
     * @param {String} name 
     * @param {String} id 
     */
    constructor(name, id, imgURL, type){
        this.name = name;
        this.id = id;
        this.img = imgURL;
        this.type = type;
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