class Solution {
    getOrder(tasks: number[][]): number[] {
        const sorted: number[][] = tasks.map((task, index) => [
            task[0],
            task[1],
            index
        ]);

        sorted.sort((a, b) => a[0] - b[0]);

        const heap: number[][] = [];

        const push = (task: number[]): void => {
            heap.push(task);
            let i = heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (
                    heap[parent][0] < heap[i][0] ||
                    (heap[parent][0] === heap[i][0] &&
                     heap[parent][1] <= heap[i][1])
                ) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };

        const pop = (): number[] => {
            const min = heap[0];
            const last = heap.pop()!;

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (
                        left < heap.length &&
                        (heap[left][0] < heap[smallest][0] ||
                         (heap[left][0] === heap[smallest][0] &&
                          heap[left][1] < heap[smallest][1]))
                    ) {
                        smallest = left;
                    }

                    if (
                        right < heap.length &&
                        (heap[right][0] < heap[smallest][0] ||
                         (heap[right][0] === heap[smallest][0] &&
                          heap[right][1] < heap[smallest][1]))
                    ) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }

            return min;
        };

        const result: number[] = [];
        let time = 0;
        let i = 0;

        while (i < tasks.length || heap.length > 0) {
            if (heap.length === 0 && time < sorted[i][0]) {
                time = sorted[i][0];
            }

            while (i < tasks.length && sorted[i][0] <= time) {
                push([sorted[i][1], sorted[i][2]]);
                i++;
            }

            const [processingTime, index] = pop();

            result.push(index);
            time += processingTime;
        }

        return result;
    }
}