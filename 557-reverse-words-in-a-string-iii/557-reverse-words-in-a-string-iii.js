/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverseWord = word => word.split('').reverse().join('');
    
    return s.split(" ")
            .map(reverseWord)
            .join(' ')
};
