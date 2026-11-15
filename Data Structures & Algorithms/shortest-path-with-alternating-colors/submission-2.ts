class Solution {
    shortestAlternatingPaths(
        n: number,
        redEdges: number[][],
        blueEdges: number[][]
    ): number[] {
        const red: number[][] = Array.from({ length: n }, () => []);
        const blue: number[][] = Array.from({ length: n }, () => []);

        for (const [u, v] of redEdges) {
            red[u].push(v);
        }

        for (const [u, v] of blueEdges) {
            blue[u].push(v);
        }

        const dist = Array.from({ length: n }, () => [-1, -1]);

        const queue: [number, number][] = [[0, 0], [0, 1]];
        let head = 0;

        dist[0][0] = 0;
        dist[0][1] = 0;

        while (head < queue.length) {
            const [node, color] = queue[head++];

            const nextEdges = color === 0 ? blue[node] : red[node];
            const nextColor = 1 - color;

            for (const next of nextEdges) {
                if (dist[next][nextColor] === -1) {
                    dist[next][nextColor] = dist[node][color] + 1;
                    queue.push([next, nextColor]);
                }
            }
        }

        const answer: number[] = [];

        for (let i = 0; i < n; i++) {
            const redDist = dist[i][0];
            const blueDist = dist[i][1];

            if (redDist === -1) {
                answer.push(blueDist);
            } else if (blueDist === -1) {
                answer.push(redDist);
            } else {
                answer.push(Math.min(redDist, blueDist));
            }
        }

        return answer;
    }
}
