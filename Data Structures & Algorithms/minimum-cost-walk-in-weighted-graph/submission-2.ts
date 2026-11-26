class Solution {
    minimumCost(n: number, edges: number[][], query: number[][]): number[] {
        const parent = Array.from({ length: n }, (_, i) => i);
        const rank = Array(n).fill(0);
        const cost = Array(n).fill(131071);

        const find = (x: number): number => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };

        const union = (u: number, v: number) => {
            let pu = find(u);
            let pv = find(v);

            if (pu === pv) return;

            if (rank[pu] < rank[pv]) {
                [pu, pv] = [pv, pu];
            }

            parent[pv] = pu;

            if (rank[pu] === rank[pv]) {
                rank[pu]++;
            }
        };

        for (const [u, v, w] of edges) {
            union(u, v);
        }

        for (const [u, v, w] of edges) {
            const root = find(u);
            cost[root] &= w;
        }

        const ans: number[] = [];

        for (const [u, v] of query) {
            if (find(u) !== find(v)) {
                ans.push(-1);
            } else {
                ans.push(cost[find(u)]);
            }
        }

        return ans;
    }
}