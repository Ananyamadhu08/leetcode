/**
 * @param {string} string
 * @param {number} numOfRows
 * @return {string}
 */

var convert = function(string, numOfRows) {
    if (numOfRows === 1 || string.length < numOfRows) return string;
    
    let count = 0;
    
    let direction = false;
    
    const zigzagConversionArr = new Array(numOfRows).fill("");

    for (let i = 0; i < string.length; i++) {
        let currChar = string[i];
        
        zigzagConversionArr[count] += currChar;

        if (count === 0 || count >= numOfRows - 1) {
            direction = !direction;
        }

        direction ? count++ : count--;
    }

    const zigzagConversionString = zigzagConversionArr.join("");

    return zigzagConversionString;
};