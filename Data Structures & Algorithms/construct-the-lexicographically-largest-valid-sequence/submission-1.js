class Solution {
    constructDistancedSequence(n) {
        const size = 2 * n - 1;
        const result = new Array(size).fill(0);
        const used = new Array(n + 1).fill(false);

        const backtrack = (index) => {
            if (index === size) {
                return true;
            }

            if (result[index] !== 0) {
                return backtrack(index + 1);
            }

            for (let num = n; num >= 1; num--) {
                if (used[num]) continue;

                if (num === 1) {
                    result[index] = 1;
                    used[1] = true;

                    if (backtrack(index + 1)) return true;

                    result[index] = 0;
                    used[1] = false;
                } else {
                    const next = index + num;

                    if (next < size && result[next] === 0) {
                        result[index] = num;
                        result[next] = num;
                        used[num] = true;

                        if (backtrack(index + 1)) return true;

                        result[index] = 0;
                        result[next] = 0;
                        used[num] = false;
                    }
                }
            }

            return false;
        };

        backtrack(0);
        return result;
    }
}