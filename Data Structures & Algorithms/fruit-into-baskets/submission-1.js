class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let n = fruits.length,
            res = 0;
        for (let i = 0; i < n; i++) {
            let types = new Set();
            let j = i;
        while (j < n && (types.size < 2 || types.has(fruits[j]))) {
                types.add(fruits[j]);
                j++;
            }
            res = Math.max(res, j - i);
        }
        return res;
    }
}