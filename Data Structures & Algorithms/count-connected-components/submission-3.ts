class Solution {
    countComponents(n: number, edges: number[][]): number {
        const parent: number[] = Array.from({ length: n }, (_, i) => i);
        const rank: number[] = new Array(n).fill(1);
        let components = n;
        const find = (node: number): number => {
            let res = node;
            while (res !== parent[res]) {
                parent[res] = parent[parent[res]];
                res = parent[res];
            }
            return res;
        };
        const union = (n1: number, n2: number): number => {
            const p1 = find(n1);
            const p2 = find(n2);
            if (p1 === p2) return 0;
            if (rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return 1;
        };
        for (const [u, v] of edges) {
            components -= union(u, v);
        }
        return components;
    }
}