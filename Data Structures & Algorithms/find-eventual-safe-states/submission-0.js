
class Solution {
    eventualSafeNodes(graph) {
        const n = graph.length;
        const reverse = Array.from({ length: n }, () => []);
        const outdegree = Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            outdegree[i] = graph[i].length;

            for (const node of graph[i]) {
                reverse[node].push(i);
            }
        }

        const queue = [];

        for (let i = 0; i < n; i++) {
            if (outdegree[i] === 0) {
                queue.push(i);
            }
        }

        const safe = [];

        let front = 0;

        while (front < queue.length) {
            const node = queue[front++];
            safe.push(node);

            for (const prev of reverse[node]) {
                outdegree[prev]--;

                if (outdegree[prev] === 0) {
                    queue.push(prev);
                }
            }
        }

        return safe.sort((a, b) => a - b);
    }
}
