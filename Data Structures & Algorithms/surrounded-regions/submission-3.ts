
class Solution {
    solve(board: string[][]): void {
        const m = board.length;
        const n = board[0].length;
        const queue: number[][] = [];
        let head = 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) &&
                    board[i][j] === 'O') {
                    board[i][j] = '#';
                    queue.push([i, j]);
                }
            }
        }

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < m && nc >= 0 && nc < n &&
                    board[nr][nc] === 'O') {
                    board[nr][nc] = '#';
                    queue.push([nr, nc]);
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O') {
                    board[i][j] = 'X';
                } else if (board[i][j] === '#') {
                    board[i][j] = 'O';
                }
            }
        }
    }
}
