/**
 * @param {string} string
 * @return {string}
 */

function calculateMaxPalindromeLength(string, left, right) {
     while (left >= 0 && right < string.length && string[left] === string[right]) {
        left--;
        right++;
     }

     return right - left - 1;
}
 
var longestPalindrome = function(string) {
    let start = 0;
    let end = 0;

    for (let i = 0; i < string.length; i++) {
        const oddPalindromeLength = calculateMaxPalindromeLength(string, i, i);
        const evenPalindromeLength = calculateMaxPalindromeLength(string, i, i + 1);

        const maxPalindromeLength = Math.max(
            oddPalindromeLength,
            evenPalindromeLength
        );

        if (maxPalindromeLength > end - start) {
            start = i - ((maxPalindromeLength - 1) >> 1);
            end = i + (maxPalindromeLength >> 1);
        }
    }

    const longestPalindromeSubstring = string.substring(start, end + 1);

    return longestPalindromeSubstring;
};