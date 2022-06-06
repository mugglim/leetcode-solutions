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
var swapPairs = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    
    const newHead = new ListNode(0); 
    let curr = newHead;
    let [prevNode, nextNode] = [head, head.next];
    
    while(prevNode){
        if(!nextNode){
            curr.next = new ListNode(prevNode.val);
            break;
        }
        
        curr.next = new ListNode(nextNode.val, new ListNode(prevNode.val));
        curr = curr.next.next;
        
        if(!nextNode.next) break;
        [prevNode, nextNode] = [nextNode.next, nextNode.next.next];
    }
    
    return newHead.next;
};