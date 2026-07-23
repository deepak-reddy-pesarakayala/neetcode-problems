class Solution {
    countServers(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const rowCount = new Array(m).fill(0);
        const colCount = new Array(n).fill(0);
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    rowCount[r]++;
                    colCount[c]++;
                }
            }
        }
        let result = 0;
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (
                    grid[r][c] === 1 &&
                    (rowCount[r] > 1 || colCount[c] > 1)
                ) {
                    result++;
                }
            }
        }
        return result;
    }
}