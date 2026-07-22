class Solution {
    insertionSortList(head) {
        const dummy = new ListNode(0); 
        let curr = head;
        while (curr) {
            let next = curr.next;
            let prev = dummy;
            while (prev.next && prev.next.val < curr.val) {
                prev = prev.next;
            }
            curr.next = prev.next;
            prev.next = curr;
            curr = next;
        }
        return dummy.next;
    }
}