/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
            .replace(/^\s+|\s+$/g, '')
            .replace(/\s{2,}/g, ' ')
            .split(" ")
            .slice()
            .reverse()
            .join(' ')
};