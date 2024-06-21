/**
 * @param {string} str
 * @return {number}
 */
var beautySum = function (str) {
    let totalBeauty = 0;

    for (let i = 0; i < str.length; i++) {
        const charFrequency = new Array(26).fill(0);

        for (let j = i; j < str.length; j++) {
            charFrequency[str.charCodeAt(j) - 97]++;

            let maxFrequency = -Infinity;
            let minFrequency = Infinity;

            for (let k = 0; k < charFrequency.length; k++) {
                if (charFrequency[k] > 0) {
                    maxFrequency = Math.max(maxFrequency, charFrequency[k]);
                    minFrequency = Math.min(minFrequency, charFrequency[k]);
                }
            }

            totalBeauty += maxFrequency - minFrequency;
        }
    }

    return totalBeauty;
};