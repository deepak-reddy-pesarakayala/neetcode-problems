class Solution {
    reverse(x: number): number {
        const INT_MAX = 2147483647;
        const INT_MIN = -2147483648;
        let res = 0;
        while (x !== 0) {
            const pop = x % 10;
            x = (x / 10) | 0;
            if (res > (INT_MAX / 10 | 0) || (res === (INT_MAX / 10 | 0) && pop > 7)) return 0;
            if (res < (INT_MIN / 10 | 0) || (res === (INT_MIN / 10 | 0) && pop < -8)) return 0;
            res = res * 10 + pop;
        }
        return res;
    }
}