/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


const getMid = nums => Math.floor(nums.length / 2);

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const merge = (h1,h2) => {
    let [head, tail] = [null, null];    
    
     const add = (val) => {
        if(!head) {
            head = new ListNode(val);
            tail = head;
        } else{
            tail.next = new ListNode(val);
            tail = tail.next;
        }
    }
     
    while(h1 && h2){
        if(h1.val <= h2.val) {
            add(h1.val);
            h1 = h1.next;
        } else{
            add(h2.val)
            h2 = h2.next;
        }
    }


    while(h1) {
        add(h1.val);
        h1 = h1.next;
    }

    while(h2){
        add(h2.val);
        h2 = h2.next;
    }
    
    return head;
}

var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
        
    // divide
    const mid = getMid(lists);
    
    const l = mergeKLists(lists.slice(0,mid));
    const r = mergeKLists(lists.slice(mid));
    
    return merge(l, r);
};

                 