class Solution {
    validPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return this.isPalindrome(s, left + 1, right) || this.isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }
        return true;
    }
    isPalindrome(s: string, left: number, right: number): boolean {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}