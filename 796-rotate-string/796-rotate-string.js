/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;

    return s.repeat(2).includes(goal);
};
