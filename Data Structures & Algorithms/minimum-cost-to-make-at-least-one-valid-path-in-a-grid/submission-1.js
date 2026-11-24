class Solution {
    minCost(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

        const deque = [];
        let front = 0;
        let back = 0;

        dist[0][0] = 0;
        deque.push([0, 0]);

        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];

        while (front < back || deque.length > front) {
            const [r, c] = deque[front++];

            if (r === m - 1 && c === n - 1) {
                return dist[r][c];
            }

            for (let d = 0; d < 4; d++) {
                const nr = r + dirs[d][0];
                const nc = c + dirs[d][1];

                if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
                    continue;
                }

                const cost = d + 1 === grid[r][c] ? 0 : 1;
                const newCost = dist[r][c] + cost;

                if (newCost < dist[nr][nc]) {
                    dist[nr][nc] = newCost;

                    if (cost === 0) {
                        deque.splice(front - 1, 0, [nr, nc]);
                        front--;
                    } else {
                        deque.push([nr, nc]);
                        back++;
                    }
                }
            }
        }

        return dist[m - 1][n - 1];
    }
}