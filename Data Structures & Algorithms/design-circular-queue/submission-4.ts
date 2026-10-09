class MyCircularQueue {
    private queue: number[];
    private capacity: number;
    private frontIndex: number = 0;
    private size: number = 0;

    constructor(k: number) {
        this.capacity = k;
        this.queue = new Array(k);
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        const rearIndex = (this.frontIndex + this.size) % this.capacity;
        this.queue[rearIndex] = value;
        this.size++;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;
        this.frontIndex = (this.frontIndex + 1) % this.capacity;
        this.size--;
        return true;
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.queue[this.frontIndex];
    }

    Rear(): number {
        if (this.isEmpty()) return -1;
        const rearIndex = (this.frontIndex + this.size - 1) % this.capacity;
        return this.queue[rearIndex];
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this.size === this.capacity;
    }
}