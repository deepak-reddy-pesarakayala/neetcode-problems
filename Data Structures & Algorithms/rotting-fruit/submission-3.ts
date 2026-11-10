class Solution {
    orangesRotting(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        const queue: number[][] = [];
        let fresh = 0;
        let minutes = 0;
        let head = 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                } else if (grid[i][j] === 1) {
                    fresh++;
                }
            }
        }

        while (head < queue.length && fresh > 0) {
            const size = queue.length - head;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2;
                        fresh--;
                        queue.push([nr, nc]);
                    }
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}