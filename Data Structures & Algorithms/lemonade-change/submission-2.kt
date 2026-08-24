class Solution {
    fun lemonadeChange(bills: IntArray): Boolean {
        var five = 0
        var ten = 0
        for (bill in bills) {
            when (bill) {
                5 -> five++
                10 -> {
                    if (five == 0) return false
                    five--
                    ten++
                }
                20 -> {
                    if (ten > 0 && five > 0) {
                        ten--
                        five--
                    } else if (five >= 3) {
                        five -= 3
                    } else {
                        return false
                    }
                }
            }
        }
        return true
    }
}
