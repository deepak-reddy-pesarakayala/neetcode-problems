class Solution {
    minimumCost(n, edges, query) {
        const parent = Array.from({ length: n }, (_, i) => i);
        const rank = Array(n).fill(0);
        const cost = Array(n).fill(131071);

        const find = (x) => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };

        for (const [u, v, w] of edges) {
            const pu = find(u);
            const pv = find(v);

            if (pu !== pv) {
                if (rank[pu] < rank[pv]) {
                    parent[pu] = pv;
                } else if (rank[pu] > rank[pv]) {
                    parent[pv] = pu;
                } else {
                    parent[pv] = pu;
                    rank[pu]++;
                }
            }
        }

        for (const [u, v, w] of edges) {
            const root = find(u);
            cost[root] &= w;
        }

        const result = [];

        for (const [u, v] of query) {
            if (find(u) !== find(v)) {
                result.push(-1);
            } else {
                result.push(cost[find(u)]);
            }
        }

        return result;
    }
}
