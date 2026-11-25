class Solution {
    findTheCity(n, edges, distanceThreshold) {
        const dist = Array.from(
            { length: n },
            () => Array(n).fill(Infinity)
        );

        for (let i = 0; i < n; i++) {
            dist[i][i] = 0;
        }

        for (const [u, v, w] of edges) {
            dist[u][v] = w;
            dist[v][u] = w;
        }

        for (let k = 0; k < n; k++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    dist[i][j] = Math.min(
                        dist[i][j],
                        dist[i][k] + dist[k][j]
                    );
                }
            }
        }

        let answer = -1;
        let minCount = Infinity;

        for (let i = 0; i < n; i++) {
            let count = 0;

            for (let j = 0; j < n; j++) {
                if (i !== j && dist[i][j] <= distanceThreshold) {
                    count++;
                }
            }

            if (count <= minCount) {
                minCount = count;
                answer = i;
            }
        }

        return answer;
    }
}