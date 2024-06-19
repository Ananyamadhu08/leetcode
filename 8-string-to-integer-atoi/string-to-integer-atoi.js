/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let i = 0;
    let n = str.length;

    while (i < n && str[i] === " ") {
        i++;
    }

    let sign = 1;

    if (i < n && (str[i] === "-" || str[i] === "+")) {
        sign = str[i] === "-" ? -1 : 1;

        i++;
    }

    let result = 0;

    while (i < n && str[i] >= "0" && str[i] <= "9") {
        let digit = str.charCodeAt(i) - "0".charCodeAt(0);

        if (result > (INT_MAX - digit) / 10) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;

        i++;
    }

    return result * sign;
};