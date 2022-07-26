/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const plusCount = (countMap, key) => countMap.set(key, countMap.has(key) ? countMap.get(key) + 1 : 1); 
    
    const getCounter = arr => arr.reduce((counter, key) => {
        plusCount(counter, key);
        return counter;
    }, new Map());
    
    const compareCountEntry = ([wordA, countA], [wordB, countB]) => {
        const countDiff = countB - countA;
        return countDiff !== 0 ? countDiff : wordA.localeCompare(wordB)
    }
    
    return Array
        .from(getCounter(words))
        .sort(compareCountEntry)
        .slice(0,k)
        .map(([word, count]) => word);
};
