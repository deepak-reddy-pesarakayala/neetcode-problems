class Solution {
    largestPathValue(colors, edges) {
        const n = colors.length;
        const graph = Array.from({ length: n }, () => []);
        const indegree = Array(n).fill(0);

        for (const [u, v] of edges) {
            graph[u].push(v);
            indegree[v]++;
        }

        const dp = Array.from({ length: n }, () => Array(26).fill(0));
        const queue = [];

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let front = 0;
        let processed = 0;
        let answer = 0;

        while (front < queue.length) {
            const node = queue[front++];
            processed++;

            const color = colors.charCodeAt(node) - 97;
            dp[node][color]++;
            answer = Math.max(answer, dp[node][color]);

            for (const next of graph[node]) {
                for (let c = 0; c < 26; c++) {
                    dp[next][c] = Math.max(
                        dp[next][c],
                        dp[node][c]
                    );
                }

                indegree[next]--;

                if (indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        return processed === n ? answer : -1;
    }
}