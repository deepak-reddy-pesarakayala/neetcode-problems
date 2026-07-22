class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
    removeLast() {
        if (this.size === 0) return null;
        const node = this.tail.prev;
        this.remove(node);
        return node;
    }
}
class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.minFreq = 0;
        this.nodeMap = new Map();
        this.freqMap = new Map();
    }
    updateFreq(node) {
        const oldFreq = node.freq;
        const oldList = this.freqMap.get(oldFreq);
        oldList.remove(node);
        if (oldFreq === this.minFreq && oldList.size === 0) {
            this.minFreq++;
        }
        node.freq++;
        if (!this.freqMap.has(node.freq)) {
            this.freqMap.set(node.freq, new DoublyLinkedList());
        }
        this.freqMap.get(node.freq).add(node);
    }
    get(key) {
        if (!this.nodeMap.has(key)) return -1;
        const node = this.nodeMap.get(key);
        this.updateFreq(node);
        return node.value;
    }
    put(key, value) {
        if (this.capacity === 0) return;
        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key);
            node.value = value;
            this.updateFreq(node);
            return;
        }

        if (this.size === this.capacity) {
            const list = this.freqMap.get(this.minFreq);
            const nodeToRemove = list.removeLast();

            this.nodeMap.delete(nodeToRemove.key);
            this.size--;
        }

        const newNode = new Node(key, value);

        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new DoublyLinkedList());
        }

        this.freqMap.get(1).add(newNode);

        this.nodeMap.set(key, newNode);

        this.minFreq = 1;
        this.size++;
    }
}