class Solution {
    findChampion(n: number, edges: number[][]): number {
        const indegree = new Array(n).fill(0);

        for (const [u, v] of edges) {
            indegree[v]++;
        }

        let champion = -1;
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                champion = i;
                count++;
            }
        }

        return count === 1 ? champion : -1;
    }
}