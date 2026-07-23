class Solution {
    longestDiverseString(a, b, c) {
        const heap = [];
        const push = (count, ch) => {
            if (count <= 0) return;
            heap.push([count, ch]);
            let i = heap.length - 1;
            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (heap[p][0] >= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };
        const pop = () => {
            if (heap.length === 1) return heap.pop();
            const top = heap[0];
            heap[0] = heap.pop();
            let i = 0;
            while (true) {
                let largest = i;
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                if (
                    left < heap.length &&
                    heap[left][0] > heap[largest][0]
                ) {
                    largest = left;
                }
                if (
                    right < heap.length &&
                    heap[right][0] > heap[largest][0]
                ) {
                    largest = right;
                }
                if (largest === i) break;

                [heap[i], heap[largest]] =
                    [heap[largest], heap[i]];
                i = largest;
            }

            return top;
        };

        push(a, 'a');
        push(b, 'b');
        push(c, 'c');

        let result = [];

        while (heap.length > 0) {
            let [count1, ch1] = pop();

            const n = result.length;

            if (
                n >= 2 &&
                result[n - 1] === ch1 &&
                result[n - 2] === ch1
            ) {
                if (heap.length === 0) break;

                let [count2, ch2] = pop();

                result.push(ch2);
                count2--;
            if (count2 > 0) push(count2, ch2);
                push(count1, ch1);
            } else {
                result.push(ch1);
                count1--;
                if (count1 > 0) push(count1, ch1);
            }
        }
        return result.join('');
    }
}