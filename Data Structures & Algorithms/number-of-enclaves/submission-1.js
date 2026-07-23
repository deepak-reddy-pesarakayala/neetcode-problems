class Solution {
    numEnclaves(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const queue = [];
        const add = (r, c) => {
            if (
                r >= 0 && r < m &&
                c >= 0 && c < n &&
                grid[r][c] === 1
            ) {
                grid[r][c] = 0;
                queue.push([r, c]);
            }
        };
        for (let r = 0; r < m; r++) {
            add(r, 0);
            add(r, n - 1);
        }
        for (let c = 0; c < n; c++) {
            add(0, c);
            add(m - 1, c);
        }
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        while (queue.length) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of dirs) {
                add(r + dr, c + dc);
            }
        }
        let count = 0;
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) count++;
            }
        }
        return count;
    }
}