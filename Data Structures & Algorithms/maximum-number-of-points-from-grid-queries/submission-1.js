class Solution {
    maxPoints(grid, queries) {
        const m = grid.length;
        const n = grid[0].length;
        const result = Array(queries.length).fill(0);

        const sortedQueries = queries
            .map((value, index) => [value, index])
            .sort((a, b) => a[0] - b[0]);

        const heap = [];
        const visited = Array.from({ length: m }, () => Array(n).fill(false));

        const push = (r, c, value) => {
            heap.push([value, r, c]);

            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = () => {
            const top = heap[0];
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

            return top;
        };

        push(0, 0, grid[0][0]);
        visited[0][0] = true;

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let points = 0;

        for (const [query, index] of sortedQueries) {
            while (heap.length > 0 && heap[0][0] < query) {
                const [value, r, c] = pop();
                points++;

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr >= 0 && nr < m &&
                        nc >= 0 && nc < n &&
                        !visited[nr][nc]
                    ) {
                        visited[nr][nc] = true;
                        push(nr, nc, grid[nr][nc]);
                    }
                }
            }

            result[index] = points;
        }

        return result;
    }
}