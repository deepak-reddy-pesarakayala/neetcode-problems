class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(item) {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent][0] <= this.heap[index][0]) break
            [this.heap[parent], this.heap[index]] =
            [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
    bubbleDown(index) {
        const n = this.heap.length;
        while (true) {
            let smallest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
class Solution {
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);
        const sortedQueries = queries
            .map((value, index) => [value, index])
            .sort((a, b) => a[0] - b[0]);
        const result = new Array(queries.length).fill(-1);
        const heap = new MinHeap();
        let i = 0;
        for (const [query, originalIndex] of sortedQueries) {
            while (i < intervals.length && intervals[i][0] <= query) {
                const [left, right] = intervals[i];
                if (right >= query) {
                    heap.push([right - left + 1, right]);
                }
                i++;
            }
            while (heap.size() && heap.peek()[1] < query) {
                heap.pop();
            }
            if (heap.size()) {
                result[originalIndex] = heap.peek()[0];
            }
        }
        return result;
    }
}