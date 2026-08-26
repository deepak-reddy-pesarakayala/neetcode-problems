class Solution {
    fun isHappy(n: Int): Boolean {
        val seen = HashSet<Int>()
        var num = n
        while (num != 1 && num !in seen) {
            seen.add(num)
            var sum = 0
            while (num > 0) {
                val digit = num % 10
                sum += digit * digit
                num /= 10
            }
            num = sum
        }
        return num == 1
    }
}