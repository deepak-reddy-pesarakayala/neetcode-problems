
class Solution {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const stack1: number[] = [];
        const stack2: number[] = [];
        while (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        while (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
        let carry = 0;
        let head: ListNode | null = null;
        while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
            const sum = (stack1.pop() ?? 0) + (stack2.pop() ?? 0) + carry;
            carry = Math.floor(sum / 10);
            const node = new ListNode(sum % 10);
            node.next = head;
            head = node;
        }
        return head;
    }
}