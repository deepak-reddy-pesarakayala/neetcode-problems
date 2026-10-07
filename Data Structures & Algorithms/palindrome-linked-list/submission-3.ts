class Solution {
    isPalindrome(head: ListNode | null): boolean {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow!.next;
            fast = fast.next.next;
        }
        let second = fast ? slow!.next : slow;
        let prev: ListNode | null = null;
        while (second) {
            const next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }
        let first = head;
        while (prev) {
            if (first!.val !== prev.val) return false;
            first = first!.next;
            prev = prev.next;
        }
        return true;
    }
}