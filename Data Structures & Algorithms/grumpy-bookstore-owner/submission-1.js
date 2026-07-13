class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let res = 0,
            n = customers.length;
        for (let i = 0; i < n; i++) {
            if (grumpy[i] === 0) {
                res += customers[i];
            }
        }
        let satisfied = res;
            for (let i = 0; i <= n - minutes; i++) {
            let cur = 0;
            for (let j = i; j < i + minutes; j++) {
                if (grumpy[j] === 1) {
                    cur += customers[j];
                }
            }
            res = Math.max(res, satisfied + cur);
        }
        return res;
    }
}