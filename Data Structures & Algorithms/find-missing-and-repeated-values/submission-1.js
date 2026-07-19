class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const n = grid.length;
        let doubleVal = 0,
            missing = 0;
        for (let num = 1; num <= n * n; num++) {
            let cnt = 0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (grid[i][j] === num) {
                        cnt++;
                    }
                }
            }
            if (cnt === 2) {
                doubleVal = num;
            } else if (cnt === 0) {
                missing = num;
            }
        }
        return [doubleVal, missing];
    }
}