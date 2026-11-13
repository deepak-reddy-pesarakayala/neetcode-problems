class Solution {
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const graph: number[][] = Array.from(
            { length: numCourses },
            () => []
        );

        const indegree = new Array(numCourses).fill(0);

        for (const [course, prerequisite] of prerequisites) {
            graph[prerequisite].push(course);
            indegree[course]++;
        }

        const queue: number[] = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        const result: number[] = [];
        let head = 0;

        while (head < queue.length) {
            const course = queue[head++];
            result.push(course);

            for (const next of graph[course]) {
                indegree[next]--;

                if (indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        return result.length === numCourses ? result : [];
    }
}
