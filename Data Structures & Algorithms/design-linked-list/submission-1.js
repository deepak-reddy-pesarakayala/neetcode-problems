class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class MyLinkedList {
    constructor() {
        this.dummy = new ListNode();
        this.size = 0;
    }
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let curr = this.dummy.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }
    addAtHead(val) {
        this.addAtIndex(0, val);
    }
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;
        let prev = this.dummy;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }
        const node = new ListNode(val);
        node.next = prev.next;
        prev.next = node;
        this.size++;
    } 
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        let prev = this.dummy;
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }
        prev.next = prev.next.next;
        this.size--;
    }
}