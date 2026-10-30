class Solution {
    constructDistancedSequence(n: number): number[] {
        const result: number[] = new Array(2 * n - 1).fill(0);
        const used: boolean[] = new Array(n + 1).fill(false);

        const backtrack = (index: number): boolean => {
            if (index === result.length) {
                return true;
            }

            if (result[index] !== 0) {
                return backtrack(index + 1);
            }

            for (let num = n; num >= 1; num--) {
                if (used[num]) {
                    continue;
                }

                if (num === 1) {
                    result[index] = 1;
                    used[num] = true;

                    if (backtrack(index + 1)) {
                        return true;
                    }

                    result[index] = 0;
                    used[num] = false;
                } else {
                    const secondIndex = index + num;

                    if (secondIndex >= result.length || result[secondIndex] !== 0) {
                        continue;
                    }

                    result[index] = num;
                    result[secondIndex] = num;
                    used[num] = true;

                    if (backtrack(index + 1)) {
                        return true;
                    }

                    result[index] = 0;
                    result[secondIndex] = 0;
                    used[num] = false;
                }
            }

            return false;
        };

        backtrack(0);
        return result;
    }
}