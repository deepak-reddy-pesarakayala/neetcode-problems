class Solution {
    minimumObstacles(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
        const deque = new Array(m * n * 2);
        let front = m * n;
        let back = m * n;

        dist[0][0] = 0;
        deque[back++] = [0, 0];

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while (front < back) {
            const [r, c] = deque[front++];

            if (r === m - 1 && c === n - 1) {
                return dist[r][c];
            }

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

                const cost = dist[r][c] + grid[nr][nc];

                if (cost < dist[nr][nc]) {
                    dist[nr][nc] = cost;

                    if (grid[nr][nc] === 0) {
                        deque[--front] = [nr, nc];
                    } else {
                        deque[back++] = [nr, nc];
                    }
                }
            }
        }

        return dist[m - 1][n - 1];
    }
}