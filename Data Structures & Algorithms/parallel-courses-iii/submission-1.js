class Solution {
    minimumTime(n, relations, time) {
        const graph = Array.from({ length: n }, () => []);
        const indegree = Array(n).fill(0);
        const dp = [...time];

        for (const [u, v] of relations) {
            graph[u - 1].push(v - 1);
            indegree[v - 1]++;
        }

        const queue = [];

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let front = 0;
        let answer = 0;

        while (front < queue.length) {
            const node = queue[front++];
            answer = Math.max(answer, dp[node]);

            for (const next of graph[node]) {
                dp[next] = Math.max(
                    dp[next],
                    dp[node] + time[next]
                );

                indegree[next]--;

                if (indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        return answer;
    }
}