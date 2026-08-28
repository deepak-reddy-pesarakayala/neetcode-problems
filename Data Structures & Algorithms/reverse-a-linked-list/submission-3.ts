class Solution {
    reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let current: ListNode | null = head;
        while (current !== null) {
            const nextTemp: ListNode | null = current.next;
            current.next = prev;                           
            prev = current;                                 
            current = nextTemp;                             
        }
        return prev;
    }
}