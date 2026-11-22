class Solution {
    minimumEffortPath(heights) {
        const m = heights.length;
        const n = heights[0].length;

        const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
        const heap = [[0, 0, 0]];

        dist[0][0] = 0;

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while (heap.length) {
            heap.sort((a, b) => a[0] - b[0]);

            const [effort, r, c] = heap.shift();

            if (effort > dist[r][c]) continue;

            if (r === m - 1 && c === n - 1) {
                return effort;
            }

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

                const newEffort = Math.max(
                    effort,
                    Math.abs(heights[r][c] - heights[nr][nc])
                );

                if (newEffort < dist[nr][nc]) {
                    dist[nr][nc] = newEffort;
                    heap.push([newEffort, nr, nc]);
                }
            }
        }

        return 0;
    }
}