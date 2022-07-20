/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {    
    let max = 0;
    
    const findHalfNode = (head) => {
        let [slow, fast] = [head, head];
        
        while(fast){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    }
    
    const getReversed = (head) => {
        let curr = head;
        let prev = null;
        let reversed = null;
        
        while(curr){
            prev = reversed;
            reversed = curr;
            
            curr = curr.next;
            reversed.next = prev;
        }
        
        return reversed;
    }
    
    const halfNode = findHalfNode(head);
    let reversed = getReversed(halfNode);
    
    while(head && reversed){
        max = Math.max(max, head.val + reversed.val);
        head = head.next;
        reversed = reversed.next;
    }
    
    return max;
};
