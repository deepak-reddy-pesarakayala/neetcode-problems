class Solution {
    isBipartite(graph) {
        const n = graph.length;
        const color = Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (color[i] !== 0) continue;

            const queue = [i];
            color[i] = 1;
            let front = 0;

            while (front < queue.length) {
                const node = queue[front++];

                for (const next of graph[node]) {
                    if (color[next] === 0) {
                        color[next] = -color[node];
                        queue.push(next);
                    } else if (color[next] === color[node]) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}