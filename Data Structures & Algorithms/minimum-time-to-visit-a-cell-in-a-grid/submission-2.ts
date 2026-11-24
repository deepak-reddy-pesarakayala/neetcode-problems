class Solution {
    minimumTime(grid: number[][]): number {
        const m = grid.length;
        const n = grid[0].length;

        if (grid[0][1] > 1 && grid[1][0] > 1) return -1;

        const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
        const visited = Array.from({ length: m }, () => new Array(n).fill(false));

        const heap: number[][] = [[0, 0, 0]];

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const push = (item: number[]) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = (): number[] => {
            const top = heap[0];
            const last = heap.pop()!;

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

            return top;
        };

        dist[0][0] = 0;

        while (heap.length > 0) {
            const [time, r, c] = pop();

            if (visited[r][c]) continue;
            visited[r][c] = true;

            if (r === m - 1 && c === n - 1) return time;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) continue;

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
