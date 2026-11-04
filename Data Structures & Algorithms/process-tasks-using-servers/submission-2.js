class Solution {
    assignTasks(servers, tasks) {
        const available = [];
        const busy = [];
        const result = [];

        const compareAvailable = (a, b) => a[0] - b[0] || a[1] - b[1];
        const compareBusy = (a, b) => a[0] - b[0] || a[1] - b[1];

        function push(heap, value, compare) {
            heap.push(value);
            let i = heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (compare(heap[p], heap[i]) <= 0) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        }

        function pop(heap, compare) {
            const top = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let l = 2 * i + 1;
                    let r = 2 * i + 2;
                    let s = i;

                    if (l < heap.length && compare(heap[l], heap[s]) < 0) s = l;
                    if (r < heap.length && compare(heap[r], heap[s]) < 0) s = r;
                    if (s === i) break;

                    [heap[i], heap[s]] = [heap[s], heap[i]];
                    i = s;
                }
            }

            return top;
        }

        for (let i = 0; i < servers.length; i++) {
            push(available, [servers[i], i], compareAvailable);
        }

        let currentTime = 0;

        for (let i = 0; i < tasks.length; i++) {
            currentTime = Math.max(currentTime, i);

            if (available.length === 0) {
                currentTime = busy[0][0];
            }

            while (busy.length > 0 && busy[0][0] <= currentTime) {
                const [finishTime, serverIndex] = pop(busy, compareBusy);
                push(available, [servers[serverIndex], serverIndex], compareAvailable);
            }

            const [weight, serverIndex] = pop(available, compareAvailable);
            result.push(serverIndex);

            push(busy, [currentTime + tasks[i], serverIndex], compareBusy);
        }

        return result;
    }
}