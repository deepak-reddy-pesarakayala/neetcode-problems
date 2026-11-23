class Solution {
    maximumSafenessFactor(grid: number[][]): number {
        const n = grid.length;
        const safety = Array.from({ length: n }, () => new Array(n).fill(-1));
        const queue: number[][] = [];

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1) {
                    safety[r][c] = 0;
                    queue.push([r, c]);
                }
            }
        }

        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        let head = 0;

        while (head < queue.length) {
            const [r, c] = queue[head++];

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < n && nc >= 0 && nc < n && safety[nr][nc] === -1) {
                    safety[nr][nc] = safety[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }

        const visited = Array.from({ length: n }, () => new Array(n).fill(false));
        const heap: number[][] = [[safety[0][0], 0, 0]];

        const push = (item: number[]) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] >= heap[i][0]) break;
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
                    let largest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (left < heap.length && heap[left][0] > heap[largest][0]) {
                        largest = left;
                    }

                    if (right < heap.length && heap[right][0] > heap[largest][0]) {
                        largest = right;
                    }

                    if (largest === i) break;

                    [heap[i], heap[largest]] = [heap[largest], heap[i]];
                    i = largest;
                }
            }

            return top;
        };

        while (heap.length > 0) {
            const [safe, r, c] = pop();

            if (visited[r][c]) continue;
            visited[r][c] = true;

            if (r === n - 1 && c === n - 1) return safe;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
                    push([Math.min(safe, safety[nr][nc]), nr, nc]);
                }
            }
        }

        return 0;
    }
}
