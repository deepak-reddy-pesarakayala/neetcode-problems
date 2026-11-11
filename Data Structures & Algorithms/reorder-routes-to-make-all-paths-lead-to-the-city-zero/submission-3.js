class Solution {
    minReorder(n, connections) {
        const adj = Array.from({ length: n }, () => []);

        for (const [a, b] of connections) {
            adj[a].push([b, 1]);
            adj[b].push([a, 0]);
        }

        const visited = Array(n).fill(false);
        const stack = [0];
        visited[0] = true;

        let count = 0;

        while (stack.length > 0) {
            const node = stack.pop();

            for (const [next, cost] of adj[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    count += cost;
                    stack.push(next);
                }
            }
        }

        return count;
    }
}
