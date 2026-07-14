class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let n = nums.length;
        nums.sort((a, b) => a - b);
        let res = new Set();
        for (let a = 0; a < n; a++) {
            for (let b = a + 1; b < n; b++) {
                for (let c = b + 1; c < n; c++) {
                    for (let d = c + 1; d < n; d++) {
                        if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
                            res.add(
                                JSON.stringify([
                                    nums[a],
                                    nums[b],
                                    nums[c],
                                    nums[d],
                                ]),
                            );
                        }
                    }
                }
            }
        }
        return Array.from(res).map(JSON.parse);
    }
}