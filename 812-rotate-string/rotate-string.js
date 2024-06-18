/**
 * @param {string} str
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (str, goal) {
    if (str.length !== goal.length) {
        return false;
    }

    const concatenatedStr = str + str;

    const goalLength = goal.length;

    for (let i = 0; i < concatenatedStr.length - goalLength + 1; i++) {
        const substring = concatenatedStr.slice(i, i + goalLength);

        if (substring === goal) {
            return true;
        }
    }

    return false;
};