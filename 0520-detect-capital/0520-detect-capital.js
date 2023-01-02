/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const regex = /(^[A-Z]*[A-Z]$)|(^[a-z]*[a-z]$)|(^[A-Z][^A-Z]*)/;
    const actual = word.match(regex);
    return actual !== null && actual[0] === word;
};
