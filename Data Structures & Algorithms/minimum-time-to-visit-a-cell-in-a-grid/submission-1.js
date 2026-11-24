class Solution {
    minimumTime(grid) {
        const m = grid.length;
        const n = grid[0].length;

        if (grid[0][1] > 1 && grid[1][0] > 1) {
            return -1;
        }

        const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

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
                    const l = 2 * i + 1;
                    const r = 2 * i + 2;

                    if (l < heap.length && heap[l][0] < heap[smallest][0]) {
                        smallest = l;
                    }

                    if (r < heap.length && heap[r][0] < heap[smallest][0]) {
                        smallest = r;
                    }

                    if (smallest === i) break;

                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }

            return result;
        };

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        dist[0][0] = 0;
        push([0, 0, 0]);

        while (heap.length > 0) {
            const [time, r, c] = pop();

            if (time !== dist[r][c]) continue;

            if (r === m - 1 && c === n - 1) {
                return time;
            }

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= m || nc < 0 || nc >= n) {
                    continue;
                }

                let nextTime = time + 1;

                if (nextTime < grid[nr][nc]) {
                    const wait = grid[nr][nc] - nextTime;
                    nextTime = grid[nr][nc] + (wait % 2);
                }

                if (nextTime < dist[nr][nc]) {
                    dist[nr][nc] = nextTime;
                    push([nextTime, nr, nc]);
                }
            }
        }

        return -1;
    }
}
