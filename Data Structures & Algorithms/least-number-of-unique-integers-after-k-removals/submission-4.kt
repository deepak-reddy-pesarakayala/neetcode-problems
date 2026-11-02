class Solution {
    fun findLeastNumOfUniqueInts(arr: IntArray, k: Int): Int {
        val freq = HashMap<Int, Int>()

        for (num in arr) {
            freq[num] = (freq[num] ?: 0) + 1
        }

        val list = freq.values.sorted()
        var remaining = freq.size
        var remove = k

        for (count in list) {
            if (remove >= count) {
                remove -= count
                remaining--
            } else {
                break
            }
        }

        return remaining
    }
}