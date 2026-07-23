class Solution {
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;
        if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
            return -1;
        }
        const dirs = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],           [0, 1],
            [1, -1],  [1, 0],  [1, 1]
        ];
        const queue = [[0, 0, 1]];
        grid[0][0] = 1; 
        while (queue.length) {
            const [r, c, dist] = queue.shift();
            if (r === n - 1 && c === n - 1) {
                return dist;
            }
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < n &&
                    grid[nr][nc] === 0
                ) {
                    grid[nr][nc] = 1; 
                    queue.push([nr, nc, dist + 1]);
                }
            }
        }
        return -1;
    }
}