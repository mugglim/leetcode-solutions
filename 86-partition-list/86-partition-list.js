class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    add(node){
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) return null;
        
    // (1) partition two parts
    const less = new LinkedList();
    const greater = new LinkedList();
    
    // (2) set two pointers for reference
    let curr = head;
    let next = head.next;
    
    // (3) connect and unconnect while loop
    while(curr){        
        if(curr.val < x) {
            less.add(curr);
        } else{
            greater.add(curr);
        }
        
        curr.next = null;
        
        if(!next) break;
        curr = next;
        next = next.next;
    }
    
    // (4) connect tail of less and head of greater  
    less.add(greater.head);
    
    return less.head;
};

