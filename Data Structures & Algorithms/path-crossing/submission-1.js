class Solution {
    isPathCrossing(path) {
        let x = 0;
        let y = 0;
        const visited = new Set();
        visited.add("0,0");
        for (const direction of path) {
            if (direction === "N") y++;
            else if (direction === "S") y--;
            else if (direction === "E") x++;
            else if (direction === "W") x--;
            const position = `${x},${y}`;
            if (visited.has(position)) {
                return true;
            }
            visited.add(position);
        }
        return false;
    }
}