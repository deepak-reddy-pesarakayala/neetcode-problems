class Solution {
    solveNQueens(n: number): string[][] {
        const result: string[][] = [];
        const board: string[][] = Array.from(
            { length: n },
            () => new Array(n).fill(".")
        );

        const cols = new Set<number>();
        const diagonal1 = new Set<number>();
        const diagonal2 = new Set<number>();

        const backtrack = (row: number): void => {
            if (row === n) {
                result.push(board.map(r => r.join("")));
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

                board[row][col] = "Q";
                cols.add(col);
                diagonal1.add(row - col);
                diagonal2.add(row + col);

                backtrack(row + 1);

                board[row][col] = ".";
                cols.delete(col);
                diagonal1.delete(row - col);
                diagonal2.delete(row + col);
            }
        };

        backtrack(0);

        return result;
    }
}