class Solution {
    largestPathValue(colors: string, edges: number[][]): number {
        const n = colors.length;
        const graph: number[][] = Array.from({ length: n }, () => []);
        const indegree = new Array(n).fill(0);

        for (const [u, v] of edges) {
            graph[u].push(v);
            indegree[v]++;
        }

        const dp: number[][] = Array.from(
            { length: n },
            () => new Array(26).fill(0)
        );

        const queue: number[] = [];

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let head = 0;
        let processed = 0;
        let answer = 0;

        while (head < queue.length) {
            const node = queue[head++];
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