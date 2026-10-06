class Solution {
    private prefix: number[] = [];
    private total: number = 0;

    constructor(w: number[]) {
        for (const weight of w) {
            this.total += weight;
            this.prefix.push(this.total);
        }
    }

    pickIndex(): number {
        const target = Math.floor(Math.random() * this.total) + 1;
        let left = 0;
        let right = this.prefix.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.prefix[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}