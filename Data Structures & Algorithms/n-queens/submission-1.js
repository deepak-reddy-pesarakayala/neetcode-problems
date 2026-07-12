class Solution {
    solveNQueens(n) {
        const result = [];
        const board = Array.from({ length: n }, () =>
            new Array(n).fill(".")
        );
        const columns = new Set();
        const diagonal1 = new Set(); 
        const diagonal2 = new Set(); 
        const backtrack = (row) => {
            if (row === n) {
                result.push(board.map(currentRow => currentRow.join("")));
                return;
            }
            for (let col = 0; col < n; col++) {
                if (
                    columns.has(col) ||
                    diagonal1.has(row - col) ||
                    diagonal2.has(row + col)
                ) {
                    continue;
                }
                board[row][col] = "Q";
                columns.add(col);
                diagonal1.add(row - col);
                diagonal2.add(row + col);
                backtrack(row + 1);
                board[row][col] = ".";
                columns.delete(col);
                diagonal1.delete(row - col);
                diagonal2.delete(row + col);
            }
        };
        backtrack(0);
        return result;
    }
}