class Solution {
    maximumInvitations(favorite) {
        const n = favorite.length;
        const indegree = Array(n).fill(0);
        const depth = Array(n).fill(1);

        for (let i = 0; i < n; i++) {
            indegree[favorite[i]]++;
        }

        const queue = [];

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
        const visited = Array(n).fill(false);

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0 || visited[i]) continue;

            let node = i;
            let cycleLength = 0;

            while (!visited[node]) {
                visited[node] = true;
                cycleLength++;
                node = favorite[node];
            }

            if (cycleLength === 2) {
                const a = node;
                const b = favorite[node];
                pairSum += depth[a] + depth[b];
            } else {
                maxCycle = Math.max(maxCycle, cycleLength);
            }
        }

        return Math.max(maxCycle, pairSum);
    }
}