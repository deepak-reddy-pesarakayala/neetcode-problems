class Solution {
    maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = new Array(n).fill(-1);
        const order: number[] = [0];
        parent[0] = 0;

        for (let i = 0; i < order.length; i++) {
            const node = order[i];

            for (const next of graph[node]) {
                if (next === parent[node]) continue;

                parent[next] = node;
                order.push(next);
            }
        }

        const sums = values.map(value => value % k);
        let components = 0;

        for (let i = order.length - 1; i >= 0; i--) {
            const node = order[i];

            if (sums[node] === 0) {
                components++;
            } else if (node !== 0) {
                sums[parent[node]] = (sums[parent[node]] + sums[node]) % k;
            }
        }

        return components;
    }
}