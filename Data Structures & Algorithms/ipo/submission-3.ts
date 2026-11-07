class Solution {
    findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
        const n = profits.length;

        const projects: [number, number][] = [];

        for (let i = 0; i < n; i++) {
            projects.push([capital[i], profits[i]]);
        }

        projects.sort((a, b) => a[0] - b[0]);

        const heap: number[] = [];

        const push = (value: number): void => {
            heap.push(value);
            let i = heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (heap[parent] >= heap[i]) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };

        const pop = (): number => {
            const result = heap[0];
            const last = heap.pop()!;

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let largest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (left < heap.length && heap[left] > heap[largest]) {
                        largest = left;
                    }

                    if (right < heap.length && heap[right] > heap[largest]) {
                        largest = right;
                    }

                    if (largest === i) break;

                    [heap[i], heap[largest]] = [heap[largest], heap[i]];
                    i = largest;
                }
            }

            return result!;
        };

        let index = 0;

        for (let i = 0; i < k; i++) {
            while (index < n && projects[index][0] <= w) {
                push(projects[index][1]);
                index++;
            }

            if (heap.length === 0) break;

            w += pop();
        }

        return w;
    }
}