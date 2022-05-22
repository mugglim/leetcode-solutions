/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    const getLastNode = (head) => {
        let curr = head;
        while(curr.next){
            curr = curr.next;
        }
        return curr;
    }
    
    const getSize = (head) => {
        let curr = head;
        let cnt = 0;
        while(curr){
            curr = curr.next;
            cnt += 1;
        }
        return cnt;
    }
    
    const hasIntersection = () => {
        const lastNodeA = getLastNode(headA);
        const lastNodeB = getLastNode(headB);
        return lastNodeA && lastNodeA === lastNodeB;
    }
    
    const move = (node, k=0) => {
        let curr = node;
        
        while(k > 0){
            curr = curr.next;
            k -= 1;
        }
        
        return curr;
    }
    
    const getIntersection = () => {
        const sizeA = getSize(headA);
        const sizeB = getSize(headB);
        const sizeDiff = Math.abs(sizeA - sizeB);
        
        let currA = headA;
        let currB = headB;
        
        if(sizeA > sizeB) currA = move(currA, sizeDiff)
        else currB = move(currB, sizeDiff)
        
        while(currA && currB && currA !== currB){
            currA = currA.next;
            currB = currB.next;
        }
        
        return currA;
    }
    
    if(!hasIntersection()) return null;
    
    return getIntersection();
    
};