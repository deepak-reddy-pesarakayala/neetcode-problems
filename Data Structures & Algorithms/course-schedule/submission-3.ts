class Solution {
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adj: number[][] = Array.from({ length: numCourses }, () => []);
        for (const [course, pre] of prerequisites) {
            adj[course].push(pre);
        }
        const visited: number[] = new Array(numCourses).fill(0);
        const dfs = (course: number): boolean => {
            if (visited[course] === 1) return false;
            if (visited[course] === 2) return true;
            visited[course] = 1;
            for (const pre of adj[course]) {
                if (!dfs(pre)) return false;
            }
            visited[course] = 2;
            return true;
        };
        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) return false;
        }
        return true;
    }
}