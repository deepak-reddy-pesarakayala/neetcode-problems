class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}
class MyLinkedList {
    private head: ListNode | null = null;
    private size = 0;
    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current!.val;
    }
    addAtHead(val: number): void {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    addAtTail(val: number): void {
        const node = new ListNode(val);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        const node = new ListNode(val);
        let current = this.head!;
        for (let i = 0; i < index - 1; i++) {
            current = current.next!;
        }
        node.next = current.next;
        current.next = node;
        this.size++;
    }
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head!.next;
            this.size--;
            return;
        }
        let current = this.head!;
        for (let i = 0; i < index - 1; i++) {
            current = current.next!;
        }
        current.next = current.next!.next;
        this.size--;
    }
}