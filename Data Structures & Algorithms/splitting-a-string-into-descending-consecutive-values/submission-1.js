class Solution {
    splitString(s) {
        const dfs = (index, prev, count) => {
            if (index === s.length) {
                return count >= 2;
            }

            for (let len = 1; index + len <= s.length; len++) {
                const part = s.substring(index, index + len);
                const num = BigInt(part);

                if (count === 0 || prev - num === 1n) {
                    if (dfs(index + len, num, count + 1)) {
                        return true;
                    }
                }
            }

            return false;
        };

        return dfs(0, 0n, 0);
    }
}