/**
 * @param {string} str
 * @return {number}
 */
var maxDepth = function (str) {
    let maxDepth = 0;
    let currDepth = 0;

    for (let char of str) {
        if (char === "(") {
            currDepth++;
            maxDepth = Math.max(maxDepth, currDepth);
        } else if (char === ")") {
            currDepth--;
        }
    }

    return maxDepth;
};