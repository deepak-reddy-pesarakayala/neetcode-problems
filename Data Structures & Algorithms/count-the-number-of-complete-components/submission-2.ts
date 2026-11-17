class Solution {
    countCompleteComponents(n: number, edges: number[][]): number {
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const visited = new Array(n).fill(false);
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;

            const stack = [i];
            visited[i] = true;

            let nodes = 0;
            let degreeSum = 0;

            while (stack.length > 0) {
                const node = stack.pop()!;
                nodes++;
                degreeSum += graph[node].length;

                for (const neighbor of graph[node]) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        stack.push(neighbor);
                    }
                }
            }

            if (degreeSum === nodes * (nodes - 1)) {
                count++;
            }
        }

        return count;
    }
}