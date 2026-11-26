class Solution {
    largestIsland(grid: number[][]): number {
        const n = grid.length;
        const area = new Map<number, number>();
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let id = 2;
        let ans = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] !== 1) continue;

                let size = 0;
                const stack: number[][] = [[r, c]];
                grid[r][c] = id;

                while (stack.length > 0) {
                    const [x, y] = stack.pop()!;
                    size++;

                    for (const [dx, dy] of dirs) {
                        const nx = x + dx;
                        const ny = y + dy;

                        if (
                            nx >= 0 && nx < n &&
                            ny >= 0 && ny < n &&
                            grid[nx][ny] === 1
                        ) {
                            grid[nx][ny] = id;
                            stack.push([nx, ny]);
                        }
                    }
                }

                area.set(id, size);
                ans = Math.max(ans, size);
                id++;
            }
        }

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] !== 0) continue;

                const seen = new Set<number>();
                let size = 1;

                for (const [dx, dy] of dirs) {
                    const nr = r + dx;
                    const nc = c + dy;

                    if (nr < 0 || nr >= n || nc < 0 || nc >= n) {
                        continue;
                    }

                    const neighborId = grid[nr][nc];

                    if (neighborId > 1 && !seen.has(neighborId)) {
                        size += area.get(neighborId)!;
                        seen.add(neighborId);
                    }
                }

                ans = Math.max(ans, size);
            }
        }

        return ans;
    }
}