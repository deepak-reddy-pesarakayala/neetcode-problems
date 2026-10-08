class Solution {
    pairSum(head: ListNode | null): number {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow!.next;
            fast = fast.next.next;
        }
        let prev: ListNode | null = null;
        let current = slow;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        let first = head;
        let second = prev;
        let maxSum = 0;
        while (second) {
            maxSum = Math.max(maxSum, first!.val + second.val);
            first = first!.next;
            second = second.next;
        }
        return maxSum;
    }
}
