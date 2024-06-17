/**
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix = function (words) {
    if (words.length === 0) {
        return "";
    }

    let prefix = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];

        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};