
class Solution {
    leftmostBuildingQueries(heights, queries) {
        const n = heights.length;
        const q = queries.length;
        const ans = Array(q).fill(-1);
        const buckets = Array.from({ length: n }, () => []);

        for (let i = 0; i < q; i++) {
            let [a, b] = queries[i];

            if (a > b) [a, b] = [b, a];

            if (a === b || heights[a] < heights[b]) {
                ans[i] = b;
            } else {
                buckets[b].push([heights[a], i]);
            }
        }

        const heap = [];

        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = () => {
            const result = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let smallest = i;

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

            return result;
        };

        for (let i = 0; i < n; i++) {
            for (const query of buckets[i]) {
                push(query);
            }

            while (heap.length > 0 && heap[0][0] < heights[i]) {
                const [, queryIndex] = pop();
                ans[queryIndex] = i;
            }
        }

        return ans;
    }
}
