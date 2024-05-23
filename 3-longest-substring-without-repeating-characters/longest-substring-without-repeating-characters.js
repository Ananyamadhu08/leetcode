/**
 * @param {string} string
 * @return {number}
 */
 
var lengthOfLongestSubstring = function(string) {
    const n = string.length;
    
    let hashMap = new Map();
    
    let maxLength = 0;
    
    let start = 0;

    for (let end = 0; end < n; end++) {
        const currChar = string[end];

        if (hashMap.has(currChar) && hashMap.get(currChar) >= start) {
             start = hashMap.get(currChar) + 1;
        }

        hashMap.set(currChar, end);

         maxLength = Math.max(maxLength, end - start + 1);
    }

     return maxLength;
};