/**
 * Finds Elements by their className and returns an array of each Element's requested attribute.
 * @param {string} className The class name by which Elements will be collected.
 * @param {string} attr The requested attribute.
 * @returns {Array<string>} An array of attribute values as strings.
 */
export function getAttributeByClassName(className, attr) {
    return [...document.getElementsByClassName(className)]
        .map(el => el.getAttribute(attr).toString());
}
