class Solution {
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const reachable = Array.from(
            { length: numCourses },
            () => Array(numCourses).fill(false)
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
        const answer = [];
        for (const [u, v] of queries) {
            answer.push(reachable[u][v]);
        }
        return answer;
    }
}