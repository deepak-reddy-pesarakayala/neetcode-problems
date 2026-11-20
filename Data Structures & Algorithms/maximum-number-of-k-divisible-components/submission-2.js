class Solution {
    maxKDivisibleComponents(n, edges, values, k) {
        const graph = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = Array(n).fill(-1);
        const order = [0];

        for (let i = 0; i < order.length; i++) {
            const node = order[i];

            for (const next of graph[node]) {
                if (next !== parent[node]) {
                    parent[next] = node;
                    order.push(next);
                }
            }
        }

        const sum = values.map(value => value % k);
        let count = 0;

        for (let i = order.length - 1; i >= 0; i--) {
            const node = order[i];

            if (sum[node] % k === 0) {
                count++;
            }

            if (parent[node] !== -1) {
                sum[parent[node]] = (sum[parent[node]] + sum[node]) % k;
            }
        }

        return count;
    }
}