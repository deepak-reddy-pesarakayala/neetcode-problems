class Solution {
    maxScore(nums1: number[], nums2: number[], k: number): number {
        const arr: [number, number][] = [];

        for (let i = 0; i < nums1.length; i++) {
            arr.push([nums2[i], nums1[i]]);
        }

        arr.sort((a, b) => b[0] - a[0]);

        const heap: number[] = [];

        const push = (value: number): void => {
            heap.push(value);
            let i = heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (heap[parent] <= heap[i]) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };

        const pop = (): number => {
            const min = heap[0];
            const last = heap.pop()!;

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (left < heap.length && heap[left] < heap[smallest]) {
                        smallest = left;
                    }

                    if (right < heap.length && heap[right] < heap[smallest]) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }

            return min;
        };

        let sum = 0;
        let answer = 0;

        for (let i = 0; i < arr.length; i++) {
            const [minNum2, num1] = arr[i];

            push(num1);
            sum += num1;

            if (heap.length > k) {
                sum -= pop();
            }

            if (heap.length === k) {
                answer = Math.max(answer, sum * minNum2);
            }
        }

        return answer;
    }
}