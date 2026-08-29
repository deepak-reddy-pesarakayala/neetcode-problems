class Solution {
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) {
            return;
        }
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        while (fast !== null && fast.next !== null) {
            slow = slow!.next;
            fast = fast.next.next;
        }
        let second: ListNode | null = slow!.next;
        slow!.next = null;
        let prev: ListNode | null = null;
        while (second !== null) {
            const next: ListNode | null = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }
        let first: ListNode | null = head;
        second = prev;
        while (second !== null) {
            const firstNext: ListNode | null = first!.next;
            const secondNext: ListNode | null = second.next;
            first!.next = second;
            second.next = firstNext;
            first = firstNext;
            second = secondNext;
        }
    }
}

