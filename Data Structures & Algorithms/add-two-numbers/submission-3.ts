class Solution {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;
        while (l1 !== null || l2 !== null || carry > 0) {
            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = Math.floor(sum / 10);
            current.next = new ListNode(sum % 10);
            current = current.next;
            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }
        return dummy.next;
    }
}