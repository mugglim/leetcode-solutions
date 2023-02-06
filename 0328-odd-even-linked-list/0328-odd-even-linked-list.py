# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next or not head.next.next: return head
        
        odd_head = head
        even_head = head.next
        
        odd = head
        even = head.next
        
        while even and even.next:
            prev_odd = odd
            prev_even = even
            
            prev_odd.next = prev_even.next
            prev_even.next = prev_even.next.next
            
            odd = prev_odd.next
            even = prev_even.next
        
        odd.next = even_head
        return odd_head
            
            