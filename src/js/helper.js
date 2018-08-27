//@ts-check

/**
 * Retrieves an HTMLCollection of Elements by their className and returns an array of each Element's requested attribute.
 * @param {string} className The class name by which Elements will be collected.
 * @param {string} attr The requested attribute.
 * @returns {Array<string>} An array of attribute values as strings.
 */
export function getAttributeByClassName(className, attr) {
    const radioCollection = document.getElementsByClassName(className);
    let arrayOfAttributes = [];
    
    validateRequest();
    for (let radio of radioCollection) {
        arrayOfAttributes.push(radio.getAttribute(attr));
    }
    return arrayOfAttributes;

    function validateRequest() {
        if (radioCollection.length < 1){
            throw new Error(`No elements of class '${className}' found.`);
        }
        
        for (let radio of radioCollection) {
            if (!radio.hasAttribute(attr))
                throw new Error(`No ${attr} assigned to this element.`);
        }
    }
}