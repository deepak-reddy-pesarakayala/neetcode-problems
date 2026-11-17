class Solution {
    countCompleteComponents(n, edges) {
        const graph = Array.from({ length: n }, () => []);

        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const visited = Array(n).fill(false);
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;

            const stack = [i];
            visited[i] = true;
            let vertices = 0;
            let degreeSum = 0;

            while (stack.length > 0) {
                const node = stack.pop();
                vertices++;
                degreeSum += graph[node].length;

                for (const next of graph[node]) {
                    if (!visited[next]) {
                        visited[next] = true;
                        stack.push(next);
                    }
                }
            }

            if (degreeSum === vertices * (vertices - 1)) {
                count++;
            }
        }

        return count;
    }
}