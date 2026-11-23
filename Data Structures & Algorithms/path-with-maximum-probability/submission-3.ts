class Solution {
    maxProbability(
        n: number,
        edges: number[][],
        succProb: number[],
        start: number,
        end: number
    ): number {
        const graph: [number, number][][] = Array.from({ length: n }, () => []);

        for (let i = 0; i < edges.length; i++) {
            const [a, b] = edges[i];
            graph[a].push([b, succProb[i]]);
            graph[b].push([a, succProb[i]]);
        }

        const prob = new Array(n).fill(0);
        prob[start] = 1;

        const visited = new Array(n).fill(false);

        for (let i = 0; i < n; i++) {
            let node = -1;

            for (let j = 0; j < n; j++) {
                if (!visited[j] && (node === -1 || prob[j] > prob[node])) {
                    node = j;
                }
            }

            if (node === -1 || prob[node] === 0) break;
            if (node === end) return prob[node];

            visited[node] = true;

            for (const [next, p] of graph[node]) {
                if (!visited[next]) {
                    prob[next] = Math.max(prob[next], prob[node] * p);
                }
            }
        }

        return prob[end];
    }
}
