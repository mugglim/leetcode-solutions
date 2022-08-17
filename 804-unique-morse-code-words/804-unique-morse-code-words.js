/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const MORSE_CODES = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    const chToMorseCode = ch => MORSE_CODES[ch.charCodeAt(0) - 97];
    
    const uniqueMorseCodes = new Set(words.map(word => Array.from(word).map(chToMorseCode).join('')));
        
    return uniqueMorseCodes.size;
};
