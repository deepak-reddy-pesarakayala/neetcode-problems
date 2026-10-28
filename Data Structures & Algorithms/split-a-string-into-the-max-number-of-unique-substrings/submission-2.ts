class Solution {
    maxUniqueSplit(s) {
        const seen = new Set();

        const backtrack = (index) => {
            if (index === s.length) {
                return 0;
            }

            let maxCount = 0;

            for (let i = index + 1; i <= s.length; i++) {
                const part = s.substring(index, i);

                if (!seen.has(part)) {
                    seen.add(part);
                    maxCount = Math.max(maxCount, 1 + backtrack(i));
                    seen.delete(part);
                }
            }

            return maxCount;
        };

        return backtrack(0);
    }
}