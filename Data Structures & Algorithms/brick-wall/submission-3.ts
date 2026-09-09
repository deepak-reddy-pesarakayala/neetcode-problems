class Solution {
    leastBricks(wall: number[][]): number {
        const edges = new Map<number, number>();
        let maxEdges = 0;
        for (const row of wall) {
            let position = 0;
            for (let i = 0; i < row.length - 1; i++) {
                position += row[i];
                const count = (edges.get(position) || 0) + 1;
                edges.set(position, count);
                maxEdges = Math.max(maxEdges, count);
            }
        }
        return wall.length - maxEdges;
    }
}