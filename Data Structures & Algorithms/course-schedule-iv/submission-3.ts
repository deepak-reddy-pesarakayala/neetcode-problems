class Solution {
    checkIfPrerequisite(
        numCourses: number,
        prerequisites: number[][],
        queries: number[][]
    ): boolean[] {
        const reachable: boolean[][] = Array.from(
            { length: numCourses },
            () => new Array(numCourses).fill(false)
        );

        for (const [a, b] of prerequisites) {
            reachable[a][b] = true;
        }

        for (let k = 0; k < numCourses; k++) {
            for (let i = 0; i < numCourses; i++) {
                for (let j = 0; j < numCourses; j++) {
                    if (reachable[i][k] && reachable[k][j]) {
                        reachable[i][j] = true;
                    }
                }
            }
        }

        return queries.map(([u, v]) => reachable[u][v]);
    }
}
