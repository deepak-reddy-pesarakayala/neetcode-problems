class Solution {
    fun isPalindrome(x: Int): Boolean {
        if (x < 0) return false
        var num = x
        var reversed = 0
        while (num > 0) {
            reversed = reversed * 10 + num % 10
            num /= 10
        }
        return x == reversed
    }
}