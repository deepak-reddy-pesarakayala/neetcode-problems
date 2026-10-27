class Solution {
    splitString(s: string): boolean {
        const backtrack = (index: number, previous: bigint, count: number): boolean => {
            if (index === s.length) {
                return count >= 2;
            }

            let current = 0n;

            for (let i = index; i < s.length; i++) {
                current = current * 10n + BigInt(s[i]);

                if (count === 0 || current === previous - 1n) {
                    if (backtrack(i + 1, current, count + 1)) {
                        return true;
                    }
                }
            }

            return false;
        };

        for (let i = 1; i < s.length; i++) {
            if (backtrack(i, BigInt(s.substring(0, i)), 1)) {
                return true;
            }
        }

        return false;
    }
}