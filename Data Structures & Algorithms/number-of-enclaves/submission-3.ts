class Solution {
    numEnclaves(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        const queue: [number, number][] = [];
        let head = 0;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (
                    (r === 0 || r === m - 1 || c === 0 || c === n - 1) &&
                    grid[r][c] === 1
                ) {
                    grid[r][c] = 0;
                    queue.push([r, c]);
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
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 0;
                    queue.push([nr, nc]);
                }
            }
        }

        let count = 0;

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    count++;
                }
            }
        }

        return count;
    }
}
