/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function (str) {
    const bracketStack = [];

    const bracketMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (bracketMap[char]) {
            bracketStack.push(bracketMap[char]);
        } else {
            if (bracketStack.pop() !== char) {
                return false;
            }
        }
    }

    return bracketStack.length === 0;
};