class Solution {
    maxDistance(grid) {
        const n = grid.length;
        const queue = [];
        let land = 0;
        let water = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    queue.push([i, j]);
                    land++;
                } else {
                    water++;
                }
            }
        }

        if (land === 0 || water === 0) return -1;

        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
        let front = 0;
        let distance = -1;

        while (front < queue.length) {
            const size = queue.length - front;
            distance++;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue[front++];

                for (const [dr, dc] of dirs) {
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
