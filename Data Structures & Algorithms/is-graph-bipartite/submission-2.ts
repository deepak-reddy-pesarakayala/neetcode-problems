class Solution {
    isBipartite(graph: number[][]): boolean {
        const n = graph.length;
        const color = new Array(n).fill(-1);

        for (let i = 0; i < n; i++) {
            if (color[i] !== -1) continue;

            const queue: number[] = [i];
            color[i] = 0;

            let front = 0;

            while (front < queue.length) {
                const node = queue[front++];

                for (const neighbor of graph[node]) {
                    if (color[neighbor] === -1) {
                        color[neighbor] = 1 - color[node];
                        queue.push(neighbor);
                    } else if (color[neighbor] === color[node]) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}