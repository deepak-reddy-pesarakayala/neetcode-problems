class Solution {
    minCost(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
        const deque: number[][] = new Array(m * n * 2);
        let head = m * n;
        let tail = m * n;

        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        dist[0][0] = 0;
        deque[tail++] = [0, 0];

        while (head < tail) {
            const [r, c] = deque[head++];

            for (let d = 0; d < 4; d++) {
                const nr = r + dirs[d][0];
                const nc = c + dirs[d][1];

                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

                const cost = grid[r][c] === d + 1 ? 0 : 1;
                const newCost = dist[r][c] + cost;

                if (newCost < dist[nr][nc]) {
                    dist[nr][nc] = newCost;

                    if (cost === 0) {
                        deque[--head] = [nr, nc];
                    } else {
                        deque[tail++] = [nr, nc];
                    }
                }
            }
        }

        return dist[m - 1][n - 1];
    }
}
