class Solution {
    findMinHeightTrees(n: number, edges: number[][]): number[] {
        if (n === 1) return [0];

        const graph: number[][] = Array.from({ length: n }, () => []);
        const degree = new Array(n).fill(0);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
            degree[u]++;
            degree[v]++;
        }

        let queue: number[] = [];

        for (let i = 0; i < n; i++) {
            if (degree[i] === 1) {
                queue.push(i);
            }
        }

        let remaining = n;

        while (remaining > 2) {
            const size = queue.length;
            remaining -= size;

            const next: number[] = [];

            for (const node of queue) {
                for (const neighbor of graph[node]) {
                    degree[neighbor]--;

                    if (degree[neighbor] === 1) {
                        next.push(neighbor);
                    }
                }
            }

            queue = next;
        }

        return queue;
    }
}