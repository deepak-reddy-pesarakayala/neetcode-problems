class Solution {
    minReorder(n: number, connections: number[][]): number {
        const graph: [number, number][][] = Array.from(
            { length: n },
            () => []
        );

        for (const [a, b] of connections) {
            graph[a].push([b, 1]);
            graph[b].push([a, 0]);
        }

        const visited = new Array(n).fill(false);
        const stack = [0];
        visited[0] = true;

        let reversals = 0;

        while (stack.length > 0) {
            const city = stack.pop()!;

            for (const [next, cost] of graph[city]) {
                if (!visited[next]) {
                    visited[next] = true;
                    reversals += cost;
                    stack.push(next);
                }
            }
        }

        return reversals;
    }
}
