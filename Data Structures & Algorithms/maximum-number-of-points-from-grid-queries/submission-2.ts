class Solution {
    maxPoints(grid: number[][], queries: number[]): number[] {
        const m = grid.length;
        const n = grid[0].length;

        const result = new Array(queries.length).fill(0);
        const sorted = queries.map((value, index) => [value, index]);
        sorted.sort((a, b) => a[0] - b[0]);

        const heap: number[][] = [[grid[0][0], 0, 0]];

        const visited = Array.from({ length: m }, () => new Array(n).fill(false));
        visited[0][0] = true;

        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let points = 0;

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

        for (const [query, index] of sorted) {
            while (heap.length > 0 && heap[0][0] < query) {
                const [value, r, c] = pop();
                points++;

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        !visited[nr][nc]
                    ) {
                        visited[nr][nc] = true;
                        push([grid[nr][nc], nr, nc]);
                    }
                }
            }

            result[index] = points;
        }

        return result;
    }
}