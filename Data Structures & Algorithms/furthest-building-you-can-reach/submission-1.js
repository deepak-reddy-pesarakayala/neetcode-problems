class Solution {
    furthestBuilding(heights, bricks, ladders) {
        const heap = [];

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

        for (let i = 0; i < heights.length - 1; i++) {
            const climb = heights[i + 1] - heights[i];

            if (climb > 0) {
                push(climb);

                if (heap.length > ladders) {
                    bricks -= pop();
                }

                if (bricks < 0) {
                    return i;
                }
            }
        }

        return heights.length - 1;
    }
}