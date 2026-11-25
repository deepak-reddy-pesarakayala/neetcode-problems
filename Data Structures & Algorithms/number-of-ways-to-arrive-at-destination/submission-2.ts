class Solution {
    countPaths(n: number, roads: number[][]): number {
        const MOD = 1000000007;
        const graph: number[][][] = Array.from({ length: n }, () => []);

        for (const [u, v, time] of roads) {
            graph[u].push([v, time]);
            graph[v].push([u, time]);
        }

        const dist = Array(n).fill(Infinity);
        const ways = Array(n).fill(0);

        dist[0] = 0;
        ways[0] = 1;

        const heap: number[][] = [[0, 0]];

        const push = (item: number[]) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = (): number[] => {
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
                    ways[next] = ways[node];
                    push([newTime, next]);
                } else if (newTime === dist[next]) {
                    ways[next] = (ways[next] + ways[node]) % MOD;
                }
            }
        }

        return ways[n - 1];
    }
}