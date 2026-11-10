class Solution {
    islandsAndTreasure(grid: number[][]): void {
        const m = grid.length;
        const n = grid[0].length;

        const queue: number[][] = [];
        let head = 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 && nr < m &&
                    nc >= 0 && nc < n &&
                    grid[nr][nc] === 2147483647
                ) {
                    grid[nr][nc] = grid[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }
    }
}