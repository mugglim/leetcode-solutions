# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:    
    def getMidListNode(self, head):
        slow, fast = head, head.next
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        return slow
        
    def merge(self, head1, head2):
        dummy = tail = ListNode()
        
        while head1 and head2:
            if head1.val < head2.val:
                tail.next = head1
                head1 = head1.next
            else:
                tail.next = head2
                head2 = head2.next
            
            tail = tail.next
        
        if head1: tail.next = head1
        if head2: tail.next = head2
        
        return dummy.next
                
    
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 1. split left and right
        if not head or not head.next: return head
        
        left = head
        right = self.getMidListNode(head)
        
        # 2. unlink 
        tmp = right.next
        right.next = None
        right = tmp
        
        # 3. sort recursively
        left = self.sortList(left)
        right = self.sortList(right)
        
        # 4. merge left and right
        return self.merge(left, right)
        
