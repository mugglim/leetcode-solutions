/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    
    const getListSize = (head) => {
        let curr = head;
        let count = 0;
        
        while(curr){
            curr = curr.next;
            count += 1;
        }
        return count;
    }   
    
    const listAt = (head, k) => {
        let curr = head;
        
        while(k){
            k -= 1;
            curr = curr.next;
        }
        
        return curr;
    }
    
    const mergeLists = (list1, list2) => {
        if(!list1 && !list2) return null;
        if(!list2) return list1
        if(!list1) return list2
        
        let curr = list1;
        
        while(curr.next){
            curr = curr.next;
        }
        
        curr.next = list2;
        
        return list1;
    }
    
    const reverse = (head, k=Infinity) => {
        const stack = [];
        let curr = head;
        let newHead;
        
        while(curr && k > 0){
            stack.push(curr);
            curr = curr.next;
            k -= 1;
        }
        
        newHead = stack.at(-1);
        
        while(stack.length > 0){
            const node = stack.pop();
            const peek = stack.at(-1);
            
            if(peek){
                node.next = peek;
                peek.next = null;
            } else{
                node.next = null;
            }
        }
        
        return newHead;
    }


    const listSize = getListSize(head);
    k %= listSize;
    const reversedNode = reverse(head);
    const [leftHead, rightHead] = [reversedNode, listAt(reversedNode, k)];

    const leftReversedHead = reverse(leftHead, k);
    const rightReversedHead = reverse(rightHead);
    
    return mergeLists(leftReversedHead, rightReversedHead)    
};


