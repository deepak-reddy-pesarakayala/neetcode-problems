class Solution {
    minCostConnectPoints(points: number[][]): number {
        const n = points.length;
        const visited = new Array(n).fill(false);
        const minDist = new Array(n).fill(Infinity);

        minDist[0] = 0;
        let cost = 0;

        for (let i = 0; i < n; i++) {
            let minIndex = -1;

            for (let j = 0; j < n; j++) {
                if (!visited[j] && (minIndex === -1 || minDist[j] < minDist[minIndex])) {
                    minIndex = j;
                }
            }

            visited[minIndex] = true;
            cost += minDist[minIndex];

            for (let j = 0; j < n; j++) {
                if (!visited[j]) {
                    const distance =
                        Math.abs(points[minIndex][0] - points[j][0]) +
                        Math.abs(points[minIndex][1] - points[j][1]);

                    minDist[j] = Math.min(minDist[j], distance);
                }
            }
        }

        return cost;
    }
}
