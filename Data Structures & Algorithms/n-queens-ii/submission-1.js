class Solution {
    totalNQueens(n) {
        const columns = new Set();
        const diagonal1 = new Set(); 
        const diagonal2 = new Set(); 

        let count = 0;

        const backtrack = (row) => {
            if (row === n) {
                count++;
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

                columns.add(col);
                diagonal1.add(row - col);
                diagonal2.add(row + col);

                backtrack(row + 1);

                columns.delete(col);
                diagonal1.delete(row - col);
                diagonal2.delete(row + col);
            }
        };

        backtrack(0);
        return count;
    }
}