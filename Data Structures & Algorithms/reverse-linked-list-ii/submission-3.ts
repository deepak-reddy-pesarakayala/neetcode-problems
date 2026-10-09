class Solution {
    reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
        if (!head || left === right) return head;
        const dummy = new ListNode(0);
        dummy.next = head;
        let prev: ListNode = dummy;
        for (let i = 1; i < left; i++) {
            prev = prev.next!;
        }
        let current = prev.next!;
        for (let i = 0; i < right - left; i++) {
            const next = current.next!;
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        return dummy.next;
    }
}
