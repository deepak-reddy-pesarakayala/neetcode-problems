class Solution {
    countSubIslands(grid1, grid2) {
        const m = grid2.length;
        const n = grid2[0].length;
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        let count = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid2[i][j] === 1) {
                    let valid = true;
                    const stack = [[i, j]];
                    grid2[i][j] = 0;

                    while (stack.length > 0) {
                        const [r, c] = stack.pop();

                        if (grid1[r][c] === 0) {
                            valid = false;
                        }

                        for (const [dr, dc] of dirs) {
                            const nr = r + dr;
                            const nc = c + dc;

                            if (
                                nr >= 0 && nr < m &&
                                nc >= 0 && nc < n &&
                                grid2[nr][nc] === 1
                            ) {
                                grid2[nr][nc] = 0;
                                stack.push([nr, nc]);
                            }
                        }
                    }

                    if (valid) count++;
                }
            }
        }

        return count;
    }
}
