class Solution {
    snakesAndLadders(board: number[][]): number {
        const n = board.length;
        const target = n * n;

        const getPosition = (label: number): [number, number] => {
            const rowFromBottom = Math.floor((label - 1) / n);
            const colOffset = (label - 1) % n;

            const row = n - 1 - rowFromBottom;
            const col = rowFromBottom % 2 === 0
                ? colOffset
                : n - 1 - colOffset;

            return [row, col];
        };

        const queue: [number, number][] = [[1, 0]];
        const visited = new Array(target + 1).fill(false);
        visited[1] = true;

        let head = 0;

        while (head < queue.length) {
            const [current, rolls] = queue[head++];

            if (current === target) return rolls;

            for (let dice = 1; dice <= 6; dice++) {
                const next = current + dice;

                if (next > target) break;

                const [r, c] = getPosition(next);

                const destination = board[r][c] === -1
                    ? next
                    : board[r][c];

                if (!visited[destination]) {
                    visited[destination] = true;
                    queue.push([destination, rolls + 1]);
                }
            }
        }

        return -1;
    }
}
