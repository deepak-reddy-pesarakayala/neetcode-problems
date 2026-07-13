class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let res = blocks.length;
        for (let i = 0; i <= blocks.length - k; i++) {
            let count_w = 0;
            for (let j = i; j < i + k; j++) {
                if (blocks[j] === 'W') {
                    count_w++;
                }
            }
            res = Math.min(res, count_w);
        }
        return res;
    }
}