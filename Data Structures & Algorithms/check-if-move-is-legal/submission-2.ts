class Solution {
    checkMove(
        board: string[][],
        rMove: number,
        cMove: number,
        color: string
    ): boolean {
        const opposite = color === "B" ? "W" : "B";

        const directions = [
            [-1, 0], [1, 0],
            [0, -1], [0, 1],
            [-1, -1], [-1, 1],
            [1, -1], [1, 1]
        ];

        for (const [dr, dc] of directions) {
            let r = rMove + dr;
            let c = cMove + dc;
            let count = 0;

            while (
                r >= 0 && r < 8 &&
                c >= 0 && c < 8 &&
                board[r][c] === opposite
            ) {
                count++;
                r += dr;
                c += dc;
            }

            if (
                count > 0 &&
                r >= 0 && r < 8 &&
                c >= 0 && c < 8 &&
                board[r][c] === color
            ) {
                return true;
            }
        }

        return false;
    }
}
