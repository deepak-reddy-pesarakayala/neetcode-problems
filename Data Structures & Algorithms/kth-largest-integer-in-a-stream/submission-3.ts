class KthLargest {
    private k: number;
    private heap: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = [];

        for (const num of nums) {
            this.add(num);
        }
    }

    add(val: number): number {
        this.heap.push(val);
        this.heap.sort((a, b) => a - b);

        if (this.heap.length > this.k) {
            this.heap.shift();
        }

        return this.heap[0];
    }
}