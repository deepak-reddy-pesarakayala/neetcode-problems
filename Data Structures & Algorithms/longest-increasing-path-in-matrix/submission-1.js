class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const memo = Array.from(
            { length: rows },
            () => new Array(cols).fill(0)
        );

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        const dfs = (row, col) => {
            if (memo[row][col] !== 0) {
                return memo[row][col];
            }

            let longest = 1;

            for (const [dr, dc] of directions) {
                const nextRow = row + dr;
                const nextCol = col + dc;

                if (
                    nextRow >= 0 &&
                    nextRow < rows &&
                    nextCol >= 0 &&
                    nextCol < cols &&
                    matrix[nextRow][nextCol] > matrix[row][col]
                ) {
                    longest = Math.max(
                        longest,
                        1 + dfs(nextRow, nextCol)
                    );
                }
            }

            memo[row][col] = longest;
            return longest;
        };

        let answer = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                answer = Math.max(answer, dfs(row, col));
            }
        }

        return answer;
    }
}