class RadioSection {
    constructor(category) {
        this.render(category);
    }

    render(category) {
        // Creates a <h2> heading and capitalizes the first letter.
        const h2 = document.createElement('h2');
        const type = category[0].toUpperCase() + category.slice(1);
        h2.innerHTML = `${type} Radios`;

        // Creates a <ul> that holds the radios.
        const ul = document.createElement('ul');
        ul.setAttribute('id', `${category}-radios`);
        ul.setAttribute('class', 'radio-item-list');

        // Creates a <section> that holds both the heading and the list.
        const section = document.createElement('section');
        section.setAttribute('id', `${category}-radios-section`);
        section.setAttribute('class', 'section-row');
        section.appendChild(h2);
        section.appendChild(ul);

        // Appends the section to the parent <div> container.
        document.getElementById('radio-sections-container')
            .appendChild(section);
    }
}

export default RadioSection;