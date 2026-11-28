class Solution {
    maxNumEdgesToRemove(n, edges) {
        const createDSU = () => {
            const parent = Array.from({ length: n + 1 }, (_, i) => i);
            const size = Array(n + 1).fill(1);

            const find = (x) => {
                while (parent[x] !== x) {
                    parent[x] = parent[parent[x]];
                    x = parent[x];
                }
                return x;
            };

            const union = (a, b) => {
                a = find(a);
                b = find(b);

                if (a === b) return false;

                if (size[a] < size[b]) {
                    [a, b] = [b, a];
                }

                parent[b] = a;
                size[a] += size[b];

                return true;
            };

            return { union, find };
        };

        const alice = createDSU();
        const bob = createDSU();

        let used = 0;

        for (const [type, u, v] of edges) {
            if (type === 3) {
                const a = alice.union(u, v);
                const b = bob.union(u, v);

                if (a || b) used++;
            }
        }

        for (const [type, u, v] of edges) {
            if (type === 1) {
                if (alice.union(u, v)) used++;
            } else if (type === 2) {
                if (bob.union(u, v)) used++;
            }
        }

        const aliceRoot = alice.find(1);
        const bobRoot = bob.find(1);

        for (let i = 2; i <= n; i++) {
            if (alice.find(i) !== aliceRoot || bob.find(i) !== bobRoot) {
                return -1;
            }
        }

        return edges.length - used;
    }
}