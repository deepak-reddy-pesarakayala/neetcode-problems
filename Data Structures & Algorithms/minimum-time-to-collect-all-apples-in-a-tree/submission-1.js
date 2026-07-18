class Solution {
    minTime(n, edges, hasApple) {
        const adj = Array.from({ length: n }, () => []);
        for (const [parent, child] of edges) {
            adj[parent].push(child);
            adj[child].push(parent);
        }
        const dfs = (cur, parent) => {
            let time = 0;
            for (const child of adj[cur]) {
                if (child === parent) continue;
                const childTime = dfs(child, cur);
                if (childTime > 0 || hasApple[child]) {
                    time += 2 + childTime;
                }
            }
            return time;
        };
        return dfs(0, -1);
    }
}