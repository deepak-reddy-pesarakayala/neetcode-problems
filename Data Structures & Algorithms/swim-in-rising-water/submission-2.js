class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;

        const minHeap = [[grid[0][0], 0, 0]];
        const visited = Array.from(
            { length: n },
            () => new Array(n).fill(false)
        );

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while (minHeap.length > 0) {
            minHeap.sort((a, b) => a[0] - b[0]);
            const [time, row, col] = minHeap.shift();

            if (visited[row][col]) {
                continue;
            }

            visited[row][col] = true;

            if (row === n - 1 && col === n - 1) {
                return time;
            }

            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                if (
                    newRow >= 0 &&
                    newRow < n &&
                    newCol >= 0 &&
                    newCol < n &&
                    !visited[newRow][newCol]
                ) {
                    const newTime = Math.max(
                        time,
                        grid[newRow][newCol]
                    );

                    minHeap.push([newTime, newRow, newCol]);
                }
            }
        }

        return -1;
    }
}