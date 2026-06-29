# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        arr = []
        cur = head

        while cur:
            if cur.val != val:
                arr.append(cur.val)
            cur = cur.next

        if not arr:
            return None

        res = ListNode(arr[0])
        cur = res
        for i in range(1, len(arr)):
            node = ListNode(arr[i])
            cur.next = node
            cur = cur.next

        return res