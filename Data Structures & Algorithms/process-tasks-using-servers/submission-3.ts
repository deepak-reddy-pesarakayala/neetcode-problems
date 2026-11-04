class Solution {
    assignTasks(servers: number[], tasks: number[]): number[] {
        const available: number[][] = [];
        const busy: number[][] = [];

        const push = (heap: number[][], value: number[]): void => {
            heap.push(value);
            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);

                if (this.compare(heap[p], heap[i]) <= 0) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = (heap: number[][]): number[] => {
            const result = heap[0];
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
                        this.compare(heap[left], heap[smallest]) < 0
                    ) {
                        smallest = left;
                    }

                    if (
                        right < heap.length &&
                        this.compare(heap[right], heap[smallest]) < 0
                    ) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }

            return result;
        };

        for (let i = 0; i < servers.length; i++) {
            push(available, [servers[i], i]);
        }

        const result: number[] = [];
        let time = 0;

        for (let i = 0; i < tasks.length; i++) {
            time = Math.max(time, i);

            while (busy.length > 0 && busy[0][0] <= time) {
                const [finish, weight, index] = pop(busy);
                push(available, [weight, index]);
            }

            if (available.length === 0) {
                time = busy[0][0];

                while (busy.length > 0 && busy[0][0] <= time) {
                    const [finish, weight, index] = pop(busy);
                    push(available, [weight, index]);
                }
            }

            const [weight, serverIndex] = pop(available);

            result.push(serverIndex);

            push(busy, [
                time + tasks[i],
                weight,
                serverIndex
            ]);
        }

        return result;
    }

    private compare(a: number[], b: number[]): number {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }
        }

        return 0;
    }
}