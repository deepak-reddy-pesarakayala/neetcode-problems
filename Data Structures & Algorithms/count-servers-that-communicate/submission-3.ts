class Solution {
    countServers(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        const rows = new Array(m).fill(0);
        const cols = new Array(n).fill(0);

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    rows[i]++;
                    cols[j]++;
                }
            }
        }

        let count = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1 && (rows[i] > 1 || cols[j] > 1)) {
                    count++;
                }
            }
        }

        return count;
    }
}