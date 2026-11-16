class Solution {
    regionsBySlashes(grid: string[]): number {
        const n = grid.length;
        const size = n * 3;

        const expanded = Array.from(
            { length: size },
            () => new Array(size).fill(0)
        );

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const ch = grid[r][c];
                const x = r * 3;
                const y = c * 3;

                if (ch === '/') {
                    expanded[x][y + 2] = 1;
                    expanded[x + 1][y + 1] = 1;
                    expanded[x + 2][y] = 1;
                } else if (ch === '\\') {
                    expanded[x][y] = 1;
                    expanded[x + 1][y + 1] = 1;
                    expanded[x + 2][y + 2] = 1;
                }
            }
        }

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let regions = 0;

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (expanded[r][c] === 0) {
                    regions++;

                    const stack: [number, number][] = [[r, c]];
                    expanded[r][c] = 1;

                    while (stack.length > 0) {
                        const [x, y] = stack.pop()!;

                        for (const [dx, dy] of directions) {
                            const nx = x + dx;
                            const ny = y + dy;

                            if (
                                nx >= 0 && nx < size &&
                                ny >= 0 && ny < size &&
                                expanded[nx][ny] === 0
                            ) {
                                expanded[nx][ny] = 1;
                                stack.push([nx, ny]);
                            }
                        }
                    }
                }
            }
        }

        return regions;
    }
}
