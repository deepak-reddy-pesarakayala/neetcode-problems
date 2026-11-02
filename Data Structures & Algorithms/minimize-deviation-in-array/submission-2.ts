class Solution {
    minimumDeviation(nums: number[]): number {
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
            const max = heap[0];
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

            return max;
        };

        let min = Infinity;

        for (let num of nums) {
            if (num % 2 === 1) {
                num *= 2;
            }

            push(num);
            min = Math.min(min, num);
        }

        let answer = Infinity;

        while (true) {
            const max = pop();

            answer = Math.min(answer, max - min);

            if (max % 2 === 1) {
                break;
            }

            const next = max / 2;
            min = Math.min(min, next);
            push(next);
        }

        return answer;
    }
}