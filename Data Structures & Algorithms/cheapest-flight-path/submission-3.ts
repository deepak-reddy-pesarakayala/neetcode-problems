class Solution {
    findCheapestPrice(
        n: number,
        flights: number[][],
        src: number,
        dst: number,
        k: number
    ): number {
        const dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        for (let i = 0; i <= k; i++) {
            const temp = [...dist];

            for (const [from, to, price] of flights) {
                if (dist[from] !== Infinity) {
                    temp[to] = Math.min(temp[to], dist[from] + price);
                }
            }

            for (let j = 0; j < n; j++) {
                dist[j] = temp[j];
            }
        }

        return dist[dst] === Infinity ? -1 : dist[dst];
    }
}
