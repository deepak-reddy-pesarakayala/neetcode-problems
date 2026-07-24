class Solution {
    findCircleNum(isConnected) {
        const n = isConnected.length;
        const visited = new Array(n).fill(false);
        const dfs = (city) => {
            visited[city] = true;
            for (let neighbor = 0; neighbor < n; neighbor++) {
                if (
                    isConnected[city][neighbor] === 1 &&
                    !visited[neighbor]
                ) {
                    dfs(neighbor);
                }
            }
        };
        let provinces = 0;
        for (let city = 0; city < n; city++) {
            if (!visited[city]) {
                provinces++;
                dfs(city);
            }
        }
        return provinces;
    }
}