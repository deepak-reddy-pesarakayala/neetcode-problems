class Solution {
    minimumObstacles(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
        const deque: number[][] = new Array(m * n * 2);
        let head = m * n;
        let tail = m * n;

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        dist[0][0] = 0;
        deque[tail++] = [0, 0];

        while (head < tail) {
            const [r, c] = deque[head++];

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

                const cost = grid[nr][nc];
                const newDist = dist[r][c] + cost;

                if (newDist < dist[nr][nc]) {
                    dist[nr][nc] = newDist;

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
