class Solution {
    maximumInvitations(favorite: number[]): number {
        const n = favorite.length;
        const indegree = Array(n).fill(0);
        const depth = Array(n).fill(1);

        for (let i = 0; i < n; i++) {
            indegree[favorite[i]]++;
        }

        const queue: number[] = [];

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let head = 0;

        while (head < queue.length) {
            const node = queue[head++];
            const next = favorite[node];

            depth[next] = Math.max(depth[next], depth[node] + 1);
            indegree[next]--;

            if (indegree[next] === 0) {
                queue.push(next);
            }
        }

        let maxCycle = 0;
        let pairSum = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) continue;

            let length = 0;
            let node = i;

            while (indegree[node] !== 0) {
                indegree[node] = 0;
                length++;
                node = favorite[node];
            }

            if (length === 2) {
                const a = i;
                const b = favorite[i];
                pairSum += depth[a] + depth[b];
            } else {
                maxCycle = Math.max(maxCycle, length);
            }
        }

        return Math.max(maxCycle, pairSum);
    }
}