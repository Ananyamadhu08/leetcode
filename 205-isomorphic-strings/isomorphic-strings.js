/**
 * @param {string} strOne
 * @param {string} strTwo
 * @return {boolean}
 */
var isIsomorphic = function (strOne, strTwo) {
    if (strOne.length !== strTwo.length) {
        return false;
    }

    const mapOne = new Map();
    const mapTwo = new Map();

    for (let i = 0; i < strOne.length; i++) {
        const charOne = strOne[i];
        const charTwo = strTwo[i];

        if (mapOne.has(charOne) && mapOne.get(charOne) !== charTwo) {
            return false;
        }

        if (mapTwo.has(charTwo) && mapTwo.get(charTwo) !== charOne) {
            return false;
        }

        mapOne.set(charOne, charTwo);

        mapTwo.set(charTwo, charOne);
    }

    return true;
};