class Solution {
    trapRainWater(heightMap) {
        const m = heightMap.length;
        const n = heightMap[0].length;

        if (m < 3 || n < 3) return 0;

        const visited = Array.from(
            { length: m },
            () => Array(n).fill(false)
        );

        const heap = [];

        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = () => {
            const result = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (left < heap.length && heap[left][0] < heap[smallest][0]) {
                        smallest = left;
                    }

                    if (right < heap.length && heap[right][0] < heap[smallest][0]) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }

            return result;
        };

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (r === 0 || c === 0 || r === m - 1 || c === n - 1) {
                    if (!visited[r][c]) {
                        visited[r][c] = true;
                        push([heightMap[r][c], r, c]);
                    }
                }
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let water = 0;

        while (heap.length > 0) {
            const [height, r, c] = pop();

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr < 0 || nr >= m ||
                    nc < 0 || nc >= n ||
                    visited[nr][nc]
                ) {
                    continue;
                }

                visited[nr][nc] = true;

                const nextHeight = heightMap[nr][nc];

                if (nextHeight < height) {
                    water += height - nextHeight;
                }

                push([Math.max(height, nextHeight), nr, nc]);
            }
        }

        return water;
    }
}