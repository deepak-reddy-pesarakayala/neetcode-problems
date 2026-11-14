class Solution {
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
        const parent = Array.from({ length: n + 1 }, (_, i) => i);
        const rank = new Array(n + 1).fill(1);

        const find = (x: number): number => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };

        const union = (a: number, b: number): boolean => {
            let rootA = find(a);
            let rootB = find(b);

            if (rootA === rootB) return false;

            if (rank[rootA] < rank[rootB]) {
                [rootA, rootB] = [rootB, rootA];
            }

            parent[rootB] = rootA;
            rank[rootA] += rank[rootB];

            return true;
        };

        for (const [a, b] of edges) {
            if (!union(a, b)) {
                return [a, b];
            }
        }

        return [];
    }
}
