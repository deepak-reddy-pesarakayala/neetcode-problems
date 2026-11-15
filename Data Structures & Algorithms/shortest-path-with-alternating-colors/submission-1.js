class Solution {
    shortestAlternatingPaths(n, redEdges, blueEdges) {
        const graph = Array.from({ length: n }, () => [[], []]);

        for (const [u, v] of redEdges) {
            graph[u][0].push(v);
        }

        for (const [u, v] of blueEdges) {
            graph[u][1].push(v);
        }

        const visited = Array.from({ length: n }, () => [false, false]);
        const dist = Array(n).fill(-1);
        const queue = [[0, 0], [0, 1]];

        visited[0][0] = true;
        visited[0][1] = true;

        let front = 0;
        let steps = 0;

        while (front < queue.length) {
            const size = queue.length - front;

            for (let i = 0; i < size; i++) {
                const [node, lastColor] = queue[front++];

                if (dist[node] === -1) {
                    dist[node] = steps;
                }

                const nextColor = 1 - lastColor;

                for (const next of graph[node][nextColor]) {
                    if (!visited[next][nextColor]) {
                        visited[next][nextColor] = true;
                        queue.push([next, nextColor]);
                    }
                }
            }

            steps++;
        }

        return dist;
    }
}