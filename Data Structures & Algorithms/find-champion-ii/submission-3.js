class Solution {
    findChampion(n, edges) {
        const indegree = Array(n).fill(0);

        for (const [u, v] of edges) {
            indegree[v]++;
        }

        let champion = -1;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                if (champion !== -1) return -1;
                champion = i;
            }
        }

        return champion;
    }
}
