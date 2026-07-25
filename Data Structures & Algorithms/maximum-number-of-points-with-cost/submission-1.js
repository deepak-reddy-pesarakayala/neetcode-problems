class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    maxPoints(points) {
        const m = points.length;
        const n = points[0].length;
        let prev = points[0].slice();
        for (let r = 1; r < m; r++) {
            const curr = new Array(n).fill(0);
            let leftMax = 0;
            for (let c = 0; c < n; c++) {
                leftMax = Math.max(leftMax - 1, prev[c]);
                curr[c] = leftMax;
            }
            let rightMax = 0;
            for (let c = n - 1; c >= 0; c--) {
                rightMax = Math.max(rightMax - 1, prev[c]);
                curr[c] = Math.max(curr[c], rightMax) + points[r][c];
            }
            prev = curr;
        }
        return Math.max(...prev);
    }
}