class Solution {
    networkDelayTime(times: number[][], n: number, k: number): number {
        const graph: [number, number][][] = Array.from({ length: n + 1 }, () => []);

        for (const [u, v, w] of times) {
            graph[u].push([v, w]);
        }

        const dist = new Array(n + 1).fill(Infinity);
        dist[k] = 0;

        const heap: [number, number][] = [[0, k]];

        const push = (item: [number, number]) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = (): [number, number] => {
            const result = heap[0];
            const last = heap.pop()!;

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

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

        while (heap.length > 0) {
            const [time, node] = pop();

            if (time > dist[node]) continue;

            for (const [next, weight] of graph[node]) {
                const newTime = time + weight;

                if (newTime < dist[next]) {
                    dist[next] = newTime;
                    push([newTime, next]);
                }
            }
        }

        let answer = 0;

        for (let i = 1; i <= n; i++) {
            if (dist[i] === Infinity) return -1;
            answer = Math.max(answer, dist[i]);
        }

        return answer;
    }
}