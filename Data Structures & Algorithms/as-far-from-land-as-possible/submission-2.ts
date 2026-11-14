class Solution {
    maxDistance(grid: number[][]): number {
        const n = grid.length;
        const queue: number[][] = [];
        let head = 0;
        let water = 0;

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    queue.push([r, c]);
                } else {
                    water++;
                }
            }
        }

        if (queue.length === 0 || water === 0) return -1;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let distance = -1;

        while (head < queue.length) {
            const size = queue.length - head;
            distance++;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue[head++];

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] === 0
                    ) {
                        grid[nr][nc] = 1;
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        return distance;
    }
}
