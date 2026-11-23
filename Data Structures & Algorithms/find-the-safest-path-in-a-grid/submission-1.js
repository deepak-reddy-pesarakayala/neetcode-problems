class Solution {
    maximumSafenessFactor(grid) {
        const n = grid.length;
        const dist = Array.from({ length: n }, () => Array(n).fill(-1));
        const queue = [];

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    dist[r][c] = 0;
                    queue.push([r, c]);
                }
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        let front = 0;

        while (front < queue.length) {
            const [r, c] = queue[front++];

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < n &&
                    dist[nr][nc] === -1
                ) {
                    dist[nr][nc] = dist[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }

        const canReach = (limit) => {
            if (dist[0][0] < limit) return false;

            const visited = Array.from(
                { length: n },
                () => Array(n).fill(false)
            );

            const q = [[0, 0]];
            visited[0][0] = true;

            let head = 0;

            while (head < q.length) {
                const [r, c] = q[head++];

                if (r === n - 1 && c === n - 1) {
                    return true;
                }

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        !visited[nr][nc] &&
                        dist[nr][nc] >= limit
                    ) {
                        visited[nr][nc] = true;
                        q.push([nr, nc]);
                    }
                }
            }

            return false;
        };

        let left = 0;
        let right = 2 * n;
        let answer = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (canReach(mid)) {
                answer = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }
}