/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const sandwichPreferenceCnt = [0,0];
    
    students.forEach(sandwiche => {
        sandwichPreferenceCnt[sandwiche] += 1;
    })
    
    for(const [idx, sandwiche] of sandwiches.entries()){
        if(sandwichPreferenceCnt[sandwiche] === 0) return students.length - idx;
        sandwichPreferenceCnt[sandwiche] -= 1;
    }
    
    
    return 0;
};