/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {
    const favoriteCompanySets = favoriteCompanies.map((favoriteCompany,idx) => [idx, new Set(favoriteCompany)]);
    
    const ans = [];

    const intersection = (baseSet, otherSet) => Array.from(baseSet).filter(el => otherSet.has(el));
    const isSubSet = (baseSet, otherSet) =>  intersection(baseSet, otherSet).length === baseSet.size;
    
    const notSubsetList = favoriteCompanySets.filter(([idx1, baseSet]) => {
        return favoriteCompanySets
                .filter(([idx2, otherSet]) => idx1 !== idx2)
                .every(([_, otherSet]) => !isSubSet(baseSet, otherSet))
    })
    
    return notSubsetList.map(([idx]) => idx);
    
};