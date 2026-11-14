class Solution {
    shortestPathBinaryMatrix(grid: number[][]): number {
        const n = grid.length;

        if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
            return -1;
        }

        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],           [0, 1],
            [1, -1],  [1, 0],  [1, 1]
        ];

        const queue: [number, number, number][] = [[0, 0, 1]];
        grid[0][0] = 1;

        let head = 0;

        while (head < queue.length) {
            const [r, c, length] = queue[head++];

            if (r === n - 1 && c === n - 1) {
                return length;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 && nr < n &&
                    nc >= 0 && nc < n &&
                    grid[nr][nc] === 0
                ) {
                    grid[nr][nc] = 1;
                    queue.push([nr, nc, length + 1]);
                }
            }
        }

        return -1;
    }
}
