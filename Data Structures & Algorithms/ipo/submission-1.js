class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val); 
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p] >= this.heap[i]) break;
            [this.heap[p], this.heap[i]] =
                [this.heap[i], this.heap[p]];
            i = p;
        }
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }
            if (largest === i) break;
            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }
         return top;
    }
    size() {
        return this.heap.length;
    }
}
class Solution {
    findMaximizedCapital(k, w, profits, capital) {
        const projects = [];
        for (let i = 0; i < profits.length; i++) {
            projects.push([capital[i], profits[i]]);
        }
        projects.sort((a, b) => a[0] - b[0]);
        const maxHeap = new MaxHeap();
        let idx = 0;
        for (let i = 0; i < k; i++) {
            while (
                idx < projects.length &&
                projects[idx][0] <= w
            ) {
                maxHeap.push(projects[idx][1]);
                idx++;
            }
            if (maxHeap.size() === 0) break;
            w += maxHeap.pop();
        }
        return w;
    }
}