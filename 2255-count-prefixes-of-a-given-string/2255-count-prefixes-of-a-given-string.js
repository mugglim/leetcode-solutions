/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    return words
        .filter(word => s.startsWith(word))
        .length
};