class Solution {
    maxScore(nums1, nums2, k) {
        const arr = nums1.map((num, i) => [nums2[i], num]);

        arr.sort((a, b) => b[0] - a[0]);

        const heap = [];
        let sum = 0;
        let answer = 0;

        const push = (val) => {
            heap.push(val);
            let i = heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (heap[p] <= heap[i]) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = () => {
            const min = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let smallest = i;

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

        for (const [minValue, value] of arr) {
            push(value);
            sum += value;

            if (heap.length > k) {
                sum -= pop();
            }

            if (heap.length === k) {
                answer = Math.max(answer, sum * minValue);
            }
        }

        return answer;
    }
}