class Solution {
    maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
        let satisfied = 0;
        let extra = 0;
        let maxExtra = 0;
        for (let i = 0; i < customers.length; i++) {
            if (grumpy[i] === 0) satisfied += customers[i];
            else extra += customers[i];
            if (i >= minutes && grumpy[i - minutes] === 1) {
                extra -= customers[i - minutes];
            }
            maxExtra = Math.max(maxExtra, extra);
        }
        return satisfied + maxExtra;
    }
}