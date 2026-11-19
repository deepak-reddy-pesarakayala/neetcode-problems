class Solution {
    shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (let i = 0; i < n - 1; i++) {
            graph[i].push(i + 1);
        }

        const result: number[] = [];

        for (const [u, v] of queries) {
            graph[u].push(v);

            const dist = new Array(n).fill(-1);
            const queue = [0];
            dist[0] = 0;

            let front = 0;

            while (front < queue.length) {
                const node = queue[front++];

                if (node === n - 1) break;

                for (const neighbor of graph[node]) {
                    if (dist[neighbor] === -1) {
                        dist[neighbor] = dist[node] + 1;
                        queue.push(neighbor);
                    }
                }
            }

            result.push(dist[n - 1]);
        }

        return result;
    }
}