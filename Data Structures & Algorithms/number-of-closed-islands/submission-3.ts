class Solution {
    closedIsland(grid: number[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        let count = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    let closed = true;
                    const stack: [number, number][] = [[r, c]];
                    grid[r][c] = 1;

                    while (stack.length > 0) {
                        const [x, y] = stack.pop()!;

                        if (
                            x === 0 || x === rows - 1 ||
                            y === 0 || y === cols - 1
                        ) {
                            closed = false;
                        }

                        for (const [dx, dy] of directions) {
                            const nx = x + dx;
                            const ny = y + dy;

                            if (
                                nx >= 0 && nx < rows &&
                                ny >= 0 && ny < cols &&
                                grid[nx][ny] === 0
                            ) {
                                grid[nx][ny] = 1;
                                stack.push([nx, ny]);
                            }
                        }
                    }

                    if (closed) count++;
                }
            }
        }

        return count;
    }
}
