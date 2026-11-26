class Solution {
    numberOfGoodPaths(vals, edges) {
        const n = vals.length;
        const parent = Array.from({ length: n }, (_, i) => i);
        const size = Array(n).fill(1);
        const graph = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const find = (x) => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        const order = Array.from({ length: n }, (_, i) => i);
        order.sort((a, b) => vals[a] - vals[b]);

        let ans = n;
        let i = 0;

        while (i < n) {
            let j = i;

            while (j < n && vals[order[j]] === vals[order[i]]) {
                j++;
            }

            for (let k = i; k < j; k++) {
                const node = order[k];

                for (const neighbor of graph[node]) {
                    if (vals[neighbor] > vals[node]) continue;

                    let a = find(node);
                    let b = find(neighbor);

                    if (a !== b) {
                        if (size[a] < size[b]) {
                            [a, b] = [b, a];
                        }

                        parent[b] = a;
                        size[a] += size[b];
                    }
                }
            }

            const count = new Map();

            for (let k = i; k < j; k++) {
                const root = find(order[k]);
                count.set(root, (count.get(root) || 0) + 1);
            }

            for (const c of count.values()) {
                ans += c * (c - 1) / 2;
            }

            i = j;
        }

        return ans;
    }
}