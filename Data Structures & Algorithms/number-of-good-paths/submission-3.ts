class Solution {
    numberOfGoodPaths(vals: number[], edges: number[][]): number {
        const n = vals.length;
        const parent = Array.from({ length: n }, (_, i) => i);
        const count = Array(n).fill(1);

        const find = (x: number): number => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };

        const union = (a: number, b: number) => {
            let pa = find(a);
            let pb = find(b);

            if (pa === pb) return;

            if (count[pa] < count[pb]) {
                [pa, pb] = [pb, pa];
            }

            parent[pb] = pa;
            count[pa] += count[pb];
        };

        const graph: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const order = Array.from({ length: n }, (_, i) => i)
            .sort((a, b) => vals[a] - vals[b]);

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
                    if (vals[neighbor] <= vals[node]) {
                        union(node, neighbor);
                    }
                }
            }

            const freq = new Map<number, number>();

            for (let k = i; k < j; k++) {
                const root = find(order[k]);
                freq.set(root, (freq.get(root) || 0) + 1);
            }

            for (const amount of freq.values()) {
                ans += amount * (amount - 1) / 2;
            }

            i = j;
        }

        return ans;
    }
}