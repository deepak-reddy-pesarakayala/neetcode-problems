class Solution {
    rotateRight(head, k) {
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
        let stepsToNewTail = length - k - 1;
        let newTail = head;
        while (stepsToNewTail > 0) {
            newTail = newTail.next;
            stepsToNewTail--;
        }
        let newHead = newTail.next;
        newTail.next = null;
        return newHead;
    }
}