class Solution {
    mostProfitablePath(edges, bob, amount) {
        const n = amount.length;
        const graph = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = Array(n).fill(-1);
        const depth = Array(n).fill(0);
        const queue = [0];
        let front = 0;

        while (front < queue.length) {
            const node = queue[front++];

            for (const next of graph[node]) {
                if (next !== parent[node]) {
                    parent[next] = node;
                    depth[next] = depth[node] + 1;
                    queue.push(next);
                }
            }
        }

        const bobTime = Array(n).fill(Infinity);
        let node = bob;
        let time = 0;

        while (node !== -1) {
            bobTime[node] = time++;
            node = parent[node];
        }

        let answer = -Infinity;
        const stack = [[0, -1, 0, 0]];

        while (stack.length > 0) {
            const [curr, par, aliceTime, income] = stack.pop();

            let gain = 0;

            if (aliceTime < bobTime[curr]) {
                gain = amount[curr];
            } else if (aliceTime === bobTime[curr]) {
                gain = amount[curr] / 2;
            }

            const total = income + gain;
            let isLeaf = true;

            for (const next of graph[curr]) {
                if (next !== par) {
                    isLeaf = false;
                    stack.push([next, curr, aliceTime + 1, total]);
                }
            }

            if (isLeaf) {
                answer = Math.max(answer, total);
            }
        }

        return answer;
    }
}