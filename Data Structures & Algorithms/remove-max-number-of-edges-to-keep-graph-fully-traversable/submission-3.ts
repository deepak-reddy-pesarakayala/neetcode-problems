class Solution {
    maxNumEdgesToRemove(n: number, edges: number[][]): number {
        const alice = Array.from({ length: n + 1 }, (_, i) => i);
        const bob = Array.from({ length: n + 1 }, (_, i) => i);

        const find = (parent: number[], x: number): number => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        const union = (parent: number[], a: number, b: number): boolean => {
            const pa = find(parent, a);
            const pb = find(parent, b);

            if (pa === pb) return false;

            parent[pa] = pb;
            return true;
        };

        let used = 0;

        for (const [type, u, v] of edges) {
            if (type === 3) {
                const a = union(alice, u, v);
                const b = union(bob, u, v);

                if (a || b) used++;
            }
        }

        for (const [type, u, v] of edges) {
            if (type === 1) {
                if (union(alice, u, v)) used++;
            } else if (type === 2) {
                if (union(bob, u, v)) used++;
            }
        }

        const connected = (parent: number[]): boolean => {
            const root = find(parent, 1);

            for (let i = 2; i <= n; i++) {
                if (find(parent, i) !== root) return false;
            }

            return true;
        };

        if (!connected(alice) || !connected(bob)) return -1;

        return edges.length - used;
    }
}