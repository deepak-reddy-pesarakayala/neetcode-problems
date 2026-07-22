class Solution {
    reverseBetween(head, left, right) {
        if (!head || left === right) return head;
        const dummy = new ListNode(0);
        dummy.next = head;
        let prev = dummy;
        for (let i = 1; i < left; i++) {
            prev = prev.next;
        }
        let curr = prev.next;
        for (let i = 0; i < right - left; i++) {
            let next = curr.next;
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        return dummy.next;
    }
}