/**
 * @param {string} str
 * @return {number}
 */
var romanToInt = function (str) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;

    for (let i = 0; i < str.length; i++) {
        const currentVal = romanMap[str[i]];
        const nextVal = romanMap[str[i + 1]];

        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};