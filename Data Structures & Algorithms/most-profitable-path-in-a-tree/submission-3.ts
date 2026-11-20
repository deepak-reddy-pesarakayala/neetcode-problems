class Solution {
    mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
        const n = amount.length;
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = new Array(n).fill(-1);
        const depth = new Array(n).fill(0);
        const order = [0];

        for (let i = 0; i < order.length; i++) {
            const node = order[i];

            for (const neighbor of graph[node]) {
                if (neighbor === parent[node]) continue;

                parent[neighbor] = node;
                depth[neighbor] = depth[node] + 1;
                order.push(neighbor);
            }
        }

        const bobTime = new Array(n).fill(Infinity);
        let node = bob;
        let time = 0;

        while (node !== -1) {
            bobTime[node] = time++;
            node = parent[node];
        }

        let answer = -Infinity;
        const stack: [number, number, number][] = [[0, -1, 0]];

        while (stack.length > 0) {
            const [curr, prev, income] = stack.pop()!;

            let gain = amount[curr];

            if (depth[curr] > bobTime[curr]) {
                gain = 0;
            } else if (depth[curr] === bobTime[curr]) {
                gain = gain / 2;
            }

            const total = income + gain;
            let isLeaf = true;

            for (const neighbor of graph[curr]) {
                if (neighbor !== prev) {
                    isLeaf = false;
                    stack.push([neighbor, curr, total]);
                }
            }

            if (isLeaf) {
                answer = Math.max(answer, total);
            }
        }

        return answer;
    }
}