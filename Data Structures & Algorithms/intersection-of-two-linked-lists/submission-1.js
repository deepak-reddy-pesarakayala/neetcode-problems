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
    getIntersectionNode(headA, headB) {
        let pA = headA;
        let pB = headB;
        while (pA !== pB) {
            pA = pA ? pA.next : headB;
            pB = pB ? pB.next : headA;
        }
        return pA;
    }
}