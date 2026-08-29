class Solution {
    mergeTwoLists(
        list1: ListNode | null,
        list2: ListNode | null
    ): ListNode | null {
        const dummy = new ListNode(0);
        let current = dummy;
        let l1 = list1;
        let l2 = list2;
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        if (l1 !== null) {
            current.next = l1;
        } else {
            current.next = l2;
        }
        return dummy.next;
    }
}

