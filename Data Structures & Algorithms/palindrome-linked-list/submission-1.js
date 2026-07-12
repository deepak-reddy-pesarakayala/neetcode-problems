class Solution {
    isPalindrome(head) {
        if (head === null || head.next === null) {
            return true;
        }
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let previous = null;
        let current = slow;
        while (current !== null) {
            const nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }
        let left = head;
        let right = previous;
        while (right !== null) {
            if (left.val !== right.val) {
                return false;
            }
            left = left.next;
            right = right.next;
        }
        return true;
    }
}