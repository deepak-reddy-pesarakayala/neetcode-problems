class Solution {
    rotateRight(head: ListNode | null, k: number): ListNode | null {
        if (!head || !head.next || k === 0) return head;
        let length = 1;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
            length++;
        }
        k %= length;
        if (k === 0) return head;
        tail.next = head;
        let steps = length - k;
        let newTail = tail;
        while (steps > 0) {
            newTail = newTail.next!;
            steps--;
        }
        const newHead = newTail.next;
        newTail.next = null;
        return newHead;
    }
}