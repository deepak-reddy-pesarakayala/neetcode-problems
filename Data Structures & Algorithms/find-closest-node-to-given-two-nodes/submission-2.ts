class Solution {
    closestMeetingNode(edges: number[], node1: number, node2: number): number {
        const n = edges.length;

        const getDistances = (start: number): number[] => {
            const dist = new Array(n).fill(-1);
            let current = start;
            let steps = 0;

            while (current !== -1 && dist[current] === -1) {
                dist[current] = steps;
                steps++;
                current = edges[current];
            }

            return dist;
        };

        const dist1 = getDistances(node1);
        const dist2 = getDistances(node2);

        let answer = -1;
        let minDistance = Infinity;

        for (let i = 0; i < n; i++) {
            if (dist1[i] !== -1 && dist2[i] !== -1) {
                const maxDistance = Math.max(dist1[i], dist2[i]);

                if (maxDistance < minDistance) {
                    minDistance = maxDistance;
                    answer = i;
                }
            }
        }

        return answer;
    }
}
