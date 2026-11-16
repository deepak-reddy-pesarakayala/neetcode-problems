class Solution {
    findCircleNum(isConnected: number[][]): number {
        const n = isConnected.length;
        const visited = new Array(n).fill(false);
        let provinces = 0;

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                provinces++;

                const stack = [i];
                visited[i] = true;

                while (stack.length > 0) {
                    const city = stack.pop()!;

                    for (let j = 0; j < n; j++) {
                        if (isConnected[city][j] === 1 && !visited[j]) {
                            visited[j] = true;
                            stack.push(j);
                        }
                    }
                }
            }
        }

        return provinces;
    }
}
