class Solution {
    shortestBridge(grid: number[][]): number {
        const n = grid.length;
        const queue: number[][] = [];
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        let found = false;

        for (let i = 0; i < n && !found; i++) {
            for (let j = 0; j < n && !found; j++) {
                if (grid[i][j] === 1) {
                    const stack: number[][] = [[i, j]];
                    grid[i][j] = 2;

                    while (stack.length > 0) {
                        const [r, c] = stack.pop()!;
                        queue.push([r, c]);

                        for (const [dr, dc] of directions) {
                            const nr = r + dr;
                            const nc = c + dc;

                            if (
                                nr >= 0 && nr < n &&
                                nc >= 0 && nc < n &&
                                grid[nr][nc] === 1
                            ) {
                                grid[nr][nc] = 2;
                                stack.push([nr, nc]);
                            }
                        }
                    }

                    found = true;
                }
            }
        }

        let head = 0;
        let flips = 0;

        while (head < queue.length) {
            const size = queue.length - head;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 || nr >= n ||
                        nc < 0 || nc >= n
                    ) {
                        continue;
                    }

                    if (grid[nr][nc] === 1) {
                        return flips;
                    }

                    if (grid[nr][nc] === 0) {
                        grid[nr][nc] = 2;
                        queue.push([nr, nc]);
                    }
                }
            }

            flips++;
        }

        return -1;
    }
}
