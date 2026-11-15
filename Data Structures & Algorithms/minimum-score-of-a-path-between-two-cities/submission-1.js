class Solution {
    minScore(n, roads) {
        const graph = Array.from({ length: n + 1 }, () => []);

        for (const [u, v, distance] of roads) {
            graph[u].push([v, distance]);
            graph[v].push([u, distance]);
        }

        const visited = Array(n + 1).fill(false);
        const stack = [1];
        visited[1] = true;

        let answer = Infinity;

        while (stack.length > 0) {
            const node = stack.pop();

            for (const [next, distance] of graph[node]) {
                answer = Math.min(answer, distance);

                if (!visited[next]) {
                    visited[next] = true;
                    stack.push(next);
                }
            }
        }

        return answer;
    }
}