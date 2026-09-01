class Solution {
    minEnd(n: number, x: number): number {
        let result = BigInt(x);
        let remaining = BigInt(n - 1);
        let bit = 0n;

        while (remaining > 0n) {
            if ((result & (1n << bit)) === 0n) {
                if ((remaining & 1n) === 1n) {
                    result |= (1n << bit);
                }
                remaining >>= 1n;
            }
            bit++;
        }

        return Number(result);
    }
}