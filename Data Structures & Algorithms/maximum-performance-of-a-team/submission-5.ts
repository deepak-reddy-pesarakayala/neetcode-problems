class Solution {
    maxPerformance(n: number, speed: number[], efficiency: number[], k: number): number {
        const MOD = 1000000007n;

        const engineers: [number, number][] = [];

        for (let i = 0; i < n; i++) {
            engineers.push([efficiency[i], speed[i]]);
        }

        engineers.sort((a, b) => b[0] - a[0]);

        const heap: number[] = [];
        let speedSum = 0n;
        let maxPerformance = 0n;

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
            const result = heap[0];
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

            return result!;
        };

        for (const [eff, spd] of engineers) {
            push(spd);
            speedSum += BigInt(spd);

            if (heap.length > k) {
                speedSum -= BigInt(pop());
            }

            const performance = speedSum * BigInt(eff);

            if (performance > maxPerformance) {
                maxPerformance = performance;
            }
        }

        return Number(maxPerformance % MOD);
    }
}