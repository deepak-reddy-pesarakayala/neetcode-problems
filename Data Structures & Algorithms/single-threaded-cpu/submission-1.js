class MinHeap {
    constructor() {
        this.heap = [];
    }
    compare(a, b) {
        if (a[0] !== b[0]) return a[0] - b[0]; 
        return a[1] - b[1]; 
    }
    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[p], this.heap[i]) <= 0) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (true) {
            let smallest = i;
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[smallest]) < 0
            ) {
                smallest = left;
            }
            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[smallest]) < 0
            ) {
                smallest = right;
            }
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return top;
    }
    size() {
        return this.heap.length;
    }
}
class Solution {
    getOrder(tasks) {
        const arr = tasks.map((t, i) => [t[0], t[1], i]);
        arr.sort((a, b) => a[0] - b[0]);
        const heap = new MinHeap();
        const result = [];
        let time = 0;
        let i = 0;
        const n = arr.length;
        while (i < n || heap.size() > 0) {
            if (heap.size() === 0 && time < arr[i][0]) {
                time = arr[i][0];
            }
            while (i < n && arr[i][0] <= time) {
                heap.push([arr[i][1], arr[i][2]]); 
                i++;
            }
            const [procTime, idx] = heap.pop();
            result.push(idx);
            time += procTime;
        }
        return result;
    }
}