class Solution {
    reverse(x) {
        const INT_MAX = 2147483647;
        const INT_MIN = -2147483648;
        let num = Math.abs(x);
        let rev = 0;
        while (num > 0) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            if (
                rev > Math.floor(INT_MAX / 10) ||
                (rev === Math.floor(INT_MAX / 10) && digit > 7)
            ) {
                return 0;
            }
            rev = rev * 10 + digit;
        }
        rev = x < 0 ? -rev : rev;
        if (rev < INT_MIN || rev > INT_MAX) {
            return 0;
        }
        return rev;
    }
}