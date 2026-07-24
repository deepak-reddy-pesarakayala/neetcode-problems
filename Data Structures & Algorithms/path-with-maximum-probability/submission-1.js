class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(item) {
        this.heap.push(item);
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] >= this.heap[i][0]) break;
            [this.heap[p], this.heap[i]] =
                [this.heap[i], this.heap[p]];
            i = p;
        }
    }
    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (true) {
            let largest = i;
            let left = i * 2 + 1;
            let right = i * 2 + 2;
            if (
                left < this.heap.length &&
                this.heap[left][0] > this.heap[largest][0]
            ) {
                largest = left;
            }
            if (
                right < this.heap.length &&
                this.heap[right][0] > this.heap[largest][0]
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
    maxProbability(n, edges, succProb, start, end) {
        const graph = Array.from(
            { length: n },
            () => []
        );
        for (let i = 0; i < edges.length; i++) {
            const [u, v] = edges[i];
            const p = succProb[i];
            graph[u].push([v, p]);
            graph[v].push([u, p]);
        }
        const best = new Array(n).fill(0);
        best[start] = 1;
        const heap = new MaxHeap();
        heap.push([1, start]); 
        while (heap.size()) {
            const [prob, node] = heap.pop();
            if (node === end) {
                return prob;
            }
            if (prob < best[node]) continue;
            for (const [next, edgeProb] of graph[node]) {
                const newProb = prob * edgeProb;
                if (newProb > best[next]) {
                    best[next] = newProb;
                    heap.push([newProb, next]);
                }
            }
        }
        return 0;
    }
}