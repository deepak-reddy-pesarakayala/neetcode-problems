class Solution {
    closedIsland(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
        let count = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    let closed = true;
                    const stack = [[i, j]];
                    grid[i][j] = 1;

                    while (stack.length > 0) {
                        const [r, c] = stack.pop();

                        if (r === 0 || c === 0 || r === m - 1 || c === n - 1) {
                            closed = false;
                        }

                        for (const [dr, dc] of dirs) {
                            const nr = r + dr;
                            const nc = c + dc;

                            if (
                                nr >= 0 && nr < m &&
                                nc >= 0 && nc < n &&
                                grid[nr][nc] === 0
                            ) {
                                grid[nr][nc] = 1;
                                stack.push([nr, nc]);
                            }
                        }
                    }

                    if (closed) count++;
                }
            }
        }

        return count;
    }
}