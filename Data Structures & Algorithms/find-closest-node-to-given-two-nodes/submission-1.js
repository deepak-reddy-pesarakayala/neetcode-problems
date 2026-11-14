class Solution {
    closestMeetingNode(edges, node1, node2) {
        const n = edges.length;

        const getDistances = (start) => {
            const dist = Array(n).fill(-1);
            let node = start;
            let steps = 0;

            while (node !== -1 && dist[node] === -1) {
                dist[node] = steps++;
                node = edges[node];
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