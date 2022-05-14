/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(" ").filter(el => el !== '').length;
};