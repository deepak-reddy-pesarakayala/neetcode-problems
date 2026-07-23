class Solution {
    shortestBridge(grid) {
        const n = grid.length;
        const queue = [];
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        let found = false;
        const dfs = (r, c) => {
            if (
                r < 0 || r >= n ||
                c < 0 || c >= n ||
                grid[r][c] !== 1
            ) {
                return;
            }
            grid[r][c] = 2;
            queue.push([r, c]);
            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc);
            }
        };
        for (let r = 0; r < n && !found; r++) {
            for (let c = 0; c < n && !found; c++) {
                if (grid[r][c] === 1) {
                    dfs(r, c);
                    found = true;
                }
            }
        }
        let flips = 0;
        while (queue.length) {
            let size = queue.length;
            while (size--) {
                const [r, c] = queue.shift();
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (
                        nr < 0 || nr >= n ||
                        nc < 0 || nc >= n
                    ) {
                        continue;
                    }
                    if (grid[nr][nc] === 1) {
                        return flips;
                    }
                    if (grid[nr][nc] === 0) {
                        grid[nr][nc] = 2;
                        queue.push([nr, nc]);
                    }
                }
            }
            flips++;
        }
        return -1;
    }
}