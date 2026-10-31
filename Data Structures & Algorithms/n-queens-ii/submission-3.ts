class Solution {
    totalNQueens(n: number): number {
        let count = 0;

        const cols = new Set<number>();
        const diagonal1 = new Set<number>();
        const diagonal2 = new Set<number>();

        const backtrack = (row: number): void => {
            if (row === n) {
                count++;
                return;
            }

            for (let col = 0; col < n; col++) {
                if (
                    cols.has(col) ||
                    diagonal1.has(row - col) ||
                    diagonal2.has(row + col)
                ) {
                    continue;
                }

                cols.add(col);
                diagonal1.add(row - col);
                diagonal2.add(row + col);

                backtrack(row + 1);

                cols.delete(col);
                diagonal1.delete(row - col);
                diagonal2.delete(row + col);
            }
        };

        backtrack(0);

        return count;
    }
}