class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        for (let t = 0; t < k; t++) {
            let maxIdx = 0;
            for (let i = 1; i < gifts.length; i++) {
                if (gifts[i] > gifts[maxIdx]) {
                    maxIdx = i;
                }
            }
            gifts[maxIdx] = Math.floor(Math.sqrt(gifts[maxIdx]));
        }
        return gifts.reduce((a, b) => a + b, 0);
    }
}