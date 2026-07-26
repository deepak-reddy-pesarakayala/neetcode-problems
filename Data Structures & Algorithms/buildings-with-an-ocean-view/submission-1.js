class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights) {
        const result = [];
        let maxHeight = 0;
        for (let i = heights.length - 1; i >= 0; i--) {
            if (heights[i] > maxHeight) {
                result.push(i);
                maxHeight = heights[i];
            }
        }
        return result.reverse();
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Solution;
}