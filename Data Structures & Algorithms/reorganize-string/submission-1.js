class Solution {
    reorganizeString(s) {
        const freq = new Map();

        for (const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }

        const n = s.length;
        let maxFreq = 0;

        for (const count of freq.values()) {
            maxFreq = Math.max(maxFreq, count);
        }

        if (maxFreq > Math.ceil(n / 2)) return "";

        const heap = [];

        const compare = (a, b) => b[0] - a[0];

        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (compare(heap[p], heap[i]) <= 0) break;

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
                let smallest = i;
                let left = i * 2 + 1;
                let right = i * 2 + 2;

                if (
                    left < heap.length &&
                    compare(heap[left], heap[smallest]) < 0
                ) {
                    smallest = left;
                }

                if (
                    right < heap.length &&
                    compare(heap[right], heap[smallest]) < 0
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] =
                    [heap[smallest], heap[i]];

                i = smallest;
            }

            return top;
        };

        for (const [ch, count] of freq) {
            push([count, ch]);
        }

        let result = "";

        while (heap.length >= 2) {
            let [c1, ch1] = pop();
            let [c2, ch2] = pop();

            result += ch1;
            result += ch2;

            if (--c1 > 0) push([c1, ch1]);
            if (--c2 > 0) push([c2, ch2]);
        }

        if (heap.length) {
            result += pop()[1];
        }

        return result;
    }
}