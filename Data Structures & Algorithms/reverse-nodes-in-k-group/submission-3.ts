class Solution {
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        const dummy = new ListNode(0);
        dummy.next = head;
        let groupPrev = dummy;
        while (true) {
            let kth: ListNode | null = groupPrev;
            for (let i = 0; i < k && kth; i++) {
                kth = kth.next;
            }
            if (!kth) break;
            const groupNext = kth.next;
            let prev: ListNode | null = groupNext;
            let current = groupPrev.next;
            while (current !== groupNext) {
                const next = current!.next;
                current!.next = prev;
                prev = current;
                current = next;
            }
            const oldGroupHead = groupPrev.next!;
            groupPrev.next = kth;
            groupPrev = oldGroupHead;
        }
        return dummy.next;
    }
}