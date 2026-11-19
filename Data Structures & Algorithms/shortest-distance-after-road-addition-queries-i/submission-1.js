class Solution {
    shortestDistanceAfterQueries(n, queries) {
        const graph = Array.from({ length: n }, () => []);

        for (let i = 0; i < n - 1; i++) {
            graph[i].push(i + 1);
        }

        const result = [];

        for (const [u, v] of queries) {
            graph[u].push(v);

            const dist = Array(n).fill(-1);
            const queue = [0];
            dist[0] = 0;
            let front = 0;

            while (front < queue.length) {
                const node = queue[front++];

                if (node === n - 1) break;

                for (const next of graph[node]) {
                    if (dist[next] === -1) {
                        dist[next] = dist[node] + 1;
                        queue.push(next);
                    }
                }
            }

            result.push(dist[n - 1]);
        }

        return result;
    }
}