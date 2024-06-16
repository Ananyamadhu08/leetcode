/**
 * @param {string} str
 * @return {string}
 */
var removeOuterParentheses = function(str) {
    let result = "";
    
    let count = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++
        } else if (str[i] === ")") {
            count--
        }

        if (count === 0) {
            result += str.substring(start + 1, i)

            start = i + 1
        }
    }

    return result;
};