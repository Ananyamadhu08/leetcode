/**
 * @param {string} str
 * @return {string}
 */
var reverseWords = function (str) {
    str = str.trim();

    let words = [];

    let word = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char !== " ") {
            word += char;
        } else if (word.length > 0) {
            words.push(word);

            word = "";
        }
    }

    if (word.length > 0) {
        words.push(word);
    }

    let result = "";


    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];

        if (i > 0) {
            result += " ";
        }
    }

    return result;
};