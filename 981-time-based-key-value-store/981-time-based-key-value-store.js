var TimeMap = function() {
    this.timestampLogs = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.timestampLogs.has(key)){
        this.timestampLogs.set(key, []);
    }
    
    this.timestampLogs.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.timestampLogs.has(key)) return '';
    
    const timestampLog = this.timestampLogs.get(key);
    
    let result = '';
    let [lo, hi] = [0, timestampLog.length];

    while(lo < hi){
        const mid = Math.floor((lo + hi) / 2);
        const [prevTimestamp, prevTimestampValue] = timestampLog[mid];
    
        if(prevTimestamp > timestamp) {
            hi = mid;
        } else {
            lo = mid + 1
            result = prevTimestampValue;
        }
    }
    
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */