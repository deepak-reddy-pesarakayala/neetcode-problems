/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    removeElements(head, val) {
        const dummy = new ListNode(0);
        dummy.next = head;
        let current = dummy;
        while (current.next !== null) {
            if (current.next.val === val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return dummy.next;
    }
}