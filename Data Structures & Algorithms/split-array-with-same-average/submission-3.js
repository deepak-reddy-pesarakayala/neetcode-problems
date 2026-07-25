class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    splitArraySameAverage(nums) {
        const N = nums.length;
        if (N === 1) return false;
        const S = nums.reduce((acc, val) => acc + val, 0);
        let possible = false;
        for (let k = 1; k <= Math.floor(N / 2); k++) {
            if ((S * k) % N === 0) {
                possible = true;
                break;
            }
        }
        if (!possible) return false;
        const transformed = nums.map(x => N * x - S);
        const half = Math.floor(N / 2);
        const leftSums = new Map(); 
        const buildLeftSums = (index, currentCount, currentSum) => {
            if (index === half) {
                if (currentCount > 0) {
                    if (!leftSums.has(currentCount)) {
                        leftSums.set(currentCount, new Set());
                    }
                    leftSums.get(currentCount).add(currentSum);
                }
                return;
            }
            buildLeftSums(index + 1, currentCount, currentSum);
            buildLeftSums(index + 1, currentCount + 1, currentSum + transformed[index]);
        };
        buildLeftSums(0, 0, 0);
        for (const [count, set] of leftSums.entries()) {
            if (set.has(0)) return true;
        }
        let found = false;

        const checkRightSums = (index, currentCount, currentSum) => {
            if (found) return;
            if (index === N) {
                if (currentCount === 0) return;
                if (currentSum === 0 && currentCount < N) {
                    found = true;
                    return;
                }
                for (let k = 1; k <= Math.floor(N / 2); k++) {
                    const leftCount = k - currentCount;
                    if (leftSums.has(leftCount)) {
                        if (leftSums.get(leftCount).has(-currentSum)) {
                            found = true;
                            return;
                        }
                    }
                }
                return;
            }
            checkRightSums(index + 1, currentCount, currentSum);
            checkRightSums(index + 1, currentCount + 1, currentSum + transformed[index]);
        };
        checkRightSums(half, 0, 0);
        return found;
    }
}