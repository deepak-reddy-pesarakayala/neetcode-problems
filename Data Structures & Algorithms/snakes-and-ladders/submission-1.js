
class Solution {
    snakesAndLadders(board) {
        const n = board.length;
        const target = n * n;
        const visited = Array(target + 1).fill(false);
        const queue = [[1, 0]];

        visited[1] = true;

        const getPosition = (num) => {
            const rowFromBottom = Math.floor((num - 1) / n);
            const colOffset = (num - 1) % n;

            const row = n - 1 - rowFromBottom;
            const col = rowFromBottom % 2 === 0
                ? colOffset
                : n - 1 - colOffset;

            return [row, col];
        };

        let front = 0;

        while (front < queue.length) {
            const [curr, moves] = queue[front++];

            if (curr === target) return moves;

            for (let dice = 1; dice <= 6 && curr + dice <= target; dice++) {
                let next = curr + dice;

                const [r, c] = getPosition(next);

                if (board[r][c] !== -1) {
                    next = board[r][c];
                }

                if (!visited[next]) {
                    visited[next] = true;
                    queue.push([next, moves + 1]);
                }
            }
        }

        return -1;
    }
}
