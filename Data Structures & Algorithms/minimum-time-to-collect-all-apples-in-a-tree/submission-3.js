class Solution {
    minTime(n, edges, hasApple) {
        let graph = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }

        let visited = new Array(n).fill(false);

        const dfs = (node) => {
            visited[node] = true;
            let time = 0;

            for (let child of graph[node]) {
                if (!visited[child]) {
                    let childTime = dfs(child);

                    if (childTime > 0 || hasApple[child]) {
                        time += childTime + 2;
                    }
                }
            }

            return time;
        };

        return dfs(0);
    }
}