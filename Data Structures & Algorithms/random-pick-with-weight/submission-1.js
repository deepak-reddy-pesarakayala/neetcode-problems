class Solution {
    /**
     * @param {number[]} w
     */
    constructor(w) {
        this.prefix = [];
        this.total = 0;
        for (const weight of w) {
            this.total += weight;
            this.prefix.push(this.total);
        }
    }
    pickIndex() {
        const target = Math.random() * this.total;
        let left = 0;
        let right = this.prefix.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (target < this.prefix[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}