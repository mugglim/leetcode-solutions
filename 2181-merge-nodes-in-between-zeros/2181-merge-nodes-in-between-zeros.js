/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let newHead, newTail;
    
    let sum = 0;
    let zeroCnt = 0;
    let curr = head;

    const addNode = (val) => {
        if(!newHead) {
            newHead = new ListNode(val);
            newTail = newHead;
            return;
        }
        
        newTail.next = new ListNode(val);
        newTail = newTail.next;
    }
    
    while(curr !== null){
        sum += curr.val;
        
        // check value
        if(curr.val === 0){
            zeroCnt += 1;
        }        
        
        // check merge
        if(zeroCnt === 2){
            addNode(sum);
            
            // init
            sum = 0;
            zeroCnt = 1;            
        }
        
        curr = curr.next;
    }

    return newHead;
};