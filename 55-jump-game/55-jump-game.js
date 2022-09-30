/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length;
    const visited = new Array(n).fill(false);
    
    const backtrack = (curr) => {
        if(visited[curr] || visited[n-1]) return;
        
        const maxJump = nums[curr];
        visited[curr] = true;
        
        for(let i = maxJump; i >= 0; i -= 1){
            if(curr + i >= n) continue;
            if(visited[curr+i]) continue;
            backtrack(curr + i);
        }
    }
    
    backtrack(0);
    return visited[n-1];
};
