class Solution {
    minimumTime(n: number, relations: number[][], time: number[]): number {
        const graph: number[][] = Array.from({ length: n }, () => []);
        const indegree = new Array(n).fill(0);

        for (const [u, v] of relations) {
            graph[u - 1].push(v - 1);
            indegree[v - 1]++;
        }

        const dp = [...time];
        const queue: number[] = [];

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let head = 0;
        let answer = 0;

        while (head < queue.length) {
            const node = queue[head++];

            answer = Math.max(answer, dp[node]);

            for (const next of graph[node]) {
                dp[next] = Math.max(dp[next], dp[node] + time[next]);
                indegree[next]--;

                if (indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        return answer;
    }
}