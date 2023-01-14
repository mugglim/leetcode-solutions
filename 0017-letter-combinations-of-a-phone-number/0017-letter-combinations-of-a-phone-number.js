const DIGIT_DIC = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    
    const picks = [];
    const result = [];
    
    const words = Array
        .from(digits)
        .map(digit => DIGIT_DIC[digit]);
    
    const backtrack = (wordIndex = 0) => {
        if(wordIndex === words.length) {
            result.push(picks.join(''));
            return;
        }
        
        for(const letter of words[wordIndex]){
            picks.push(letter);
            backtrack(wordIndex + 1);
            picks.pop();
        }
    } 
    
    backtrack()
    return result;
};
