class MinHeap {
    constructor() {
        this.heap = [];
    }
    push(item) {
        this.heap.push(item);
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break;
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
            let smallest = i;
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            if (
                left < this.heap.length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }
            if (
                right < this.heap.length &&
                this.heap[right][0] < this.heap[smallest][0]
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
    minimumEffortPath(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const effort = Array.from(
            { length: rows },
            () => Array(cols).fill(Infinity)
        );

        effort[0][0] = 0;
        const heap = new MinHeap();
        heap.push([0, 0, 0]); 
        const dirs = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        while (heap.size()) {
            const [currEffort, r, c] = heap.pop();
            if (r === rows - 1 && c === cols - 1) {
                return currEffort;
            }
            if (currEffort > effort[r][c]) continue;
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (
                    nr < 0 ||
                    nr >= rows ||
                    nc < 0 ||
                    nc >= cols
                ) {
                    continue;
                }
                const edgeCost = Math.abs(
                    heights[r][c] - heights[nr][nc]
                );
                const newEffort = Math.max(
                    currEffort,
                    edgeCost
                );
                if (newEffort < effort[nr][nc]) {
                    effort[nr][nc] = newEffort;
                    heap.push([newEffort, nr, nc]);
                }
            }
        }
        return 0;
    }
}