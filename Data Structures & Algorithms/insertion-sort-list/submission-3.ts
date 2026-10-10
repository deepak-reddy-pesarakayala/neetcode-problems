class Solution {
    insertionSortList(head: ListNode | null): ListNode | null {
        const dummy = new ListNode(0);
        let current = head;
        while (current) {
            const next = current.next;
            let prev = dummy;
            while (prev.next && prev.next.val <= current.val) {
                prev = prev.next;
            }
            current.next = prev.next;
            prev.next = current;
            current = next;
        }
        return dummy.next;
    }
}