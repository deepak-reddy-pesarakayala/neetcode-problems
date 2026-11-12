class Solution {
    eventualSafeNodes(graph: number[][]): number[] {
        const n = graph.length;
        const reverseGraph: number[][] = Array.from(
            { length: n },
            () => []
        );

        const outdegree = new Array(n).fill(0);
        const queue: number[] = [];

        for (let i = 0; i < n; i++) {
            outdegree[i] = graph[i].length;

            for (const next of graph[i]) {
                reverseGraph[next].push(i);
            }

            if (outdegree[i] === 0) {
                queue.push(i);
            }
        }

        const safe: number[] = [];
        let head = 0;

        while (head < queue.length) {
            const node = queue[head++];
            safe.push(node);

            for (const prev of reverseGraph[node]) {
                outdegree[prev]--;

                if (outdegree[prev] === 0) {
                    queue.push(prev);
                }
            }
        }

        return safe.sort((a, b) => a - b);
    }
}
