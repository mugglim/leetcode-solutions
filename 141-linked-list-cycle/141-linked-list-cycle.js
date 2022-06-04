/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) { 
    // slow-fast techinc ref : https://iq.opengenus.org/fast-and-slow-pointer-technique/
    if(!head) return false;
    
    let slow = head;
    let fast = head.next;
    
    while(slow && fast){
        if(slow === fast) return true;
        if(!fast || !fast.next) return false;
        
        slow = slow.next;
        fast = fast.next.next;
    } 
    
    return false;
};