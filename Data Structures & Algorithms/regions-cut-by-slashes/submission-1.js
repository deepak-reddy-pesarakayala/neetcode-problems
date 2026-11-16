class Solution {
    regionsBySlashes(grid) {
        const n = grid.length;
        const visited = Array.from(
            { length: n },
            () => Array.from({ length: n }, () => Array(4).fill(false))
        );

        const dfs = (r, c, part) => {
            if (r < 0 || c < 0 || r >= n || c >= n) return;
            if (visited[r][c][part]) return;

            visited[r][c][part] = true;

            const ch = grid[r][c];

            if (ch === ' ') {
                for (let i = 0; i < 4; i++) {
                    dfs(r, c, i);
                }
            } else if (ch === '/') {
                if (part === 0 || part === 3) dfs(r, c, 3 - part);
                if (part === 1 || part === 2) dfs(r, c, 3 - part);
            } else {
                if (part === 0 || part === 1) dfs(r, c, 1 - part);
                if (part === 2 || part === 3) dfs(r, c, 5 - part);
            }

            if (part === 0) dfs(r - 1, c, 2);
            if (part === 1) dfs(r, c + 1, 3);
            if (part === 2) dfs(r + 1, c, 0);
            if (part === 3) dfs(r, c - 1, 1);
        };

        let regions = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                for (let part = 0; part < 4; part++) {
                    if (!visited[r][c][part]) {
                        regions++;
                        dfs(r, c, part);
                    }
                }
            }
        }

        return regions;
    }
}