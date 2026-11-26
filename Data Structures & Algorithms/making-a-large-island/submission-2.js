class Solution {
    largestIsland(grid) {
        const n = grid.length;
        const id = Array.from({ length: n }, () => Array(n).fill(0));
        const areas = [0];
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let islandId = 0;
        let ans = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 0 || id[r][c] !== 0) continue;

                islandId++;
                let area = 0;
                const stack = [[r, c]];
                id[r][c] = islandId;

                while (stack.length) {
                    const [x, y] = stack.pop();
                    area++;

                    for (const [dx, dy] of dirs) {
                        const nx = x + dx;
                        const ny = y + dy;

                        if (
                            nx >= 0 && nx < n &&
                            ny >= 0 && ny < n &&
                            grid[nx][ny] === 1 &&
                            id[nx][ny] === 0
                        ) {
                            id[nx][ny] = islandId;
                            stack.push([nx, ny]);
                        }
                    }
                }

                areas[islandId] = area;
                ans = Math.max(ans, area);
            }
        }

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) continue;

                const seen = new Set();
                let area = 1;

                for (const [dx, dy] of dirs) {
                    const nx = r + dx;
                    const ny = c + dy;

                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        const neighborId = id[nx][ny];

                        if (neighborId !== 0 && !seen.has(neighborId)) {
                            seen.add(neighborId);
                            area += areas[neighborId];
                        }
                    }
                }

                ans = Math.max(ans, area);
            }
        }

        return ans === 0 ? n * n : ans;
    }
}