class Solution {
    minimumEffortPath(heights: number[][]): number {
        const rows = heights.length;
        const cols = heights[0].length;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        const canReach = (limit: number): boolean => {
            const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
            const queue: [number, number][] = [[0, 0]];
            visited[0][0] = true;

            let head = 0;

            while (head < queue.length) {
                const [r, c] = queue[head++];

                if (r === rows - 1 && c === cols - 1) return true;

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < rows &&
                        nc >= 0 && nc < cols &&
                        !visited[nr][nc] &&
                        Math.abs(heights[r][c] - heights[nr][nc]) <= limit
                    ) {
                        visited[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }

            return false;
        };

        let left = 0;
        let right = 1000000;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (canReach(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}