
var MinStack = function() {
    this.stack = []; // Array<[val, minVal]>
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const minVal = this.stack.length === 0 ? val : Math.min(val, this.stack.at(-1)[1]);
    this.stack.push([val, minVal]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0) this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack.at(-1)[1];
};
