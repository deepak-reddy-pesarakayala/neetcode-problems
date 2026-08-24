class Solution {
    fun findBuildings(heights: IntArray): IntArray {
        val result = mutableListOf<Int>()
        var maxHeight = 0
        for (i in heights.lastIndex downTo 0) {
            if (heights[i] > maxHeight) {
                result.add(i)
                maxHeight = heights[i]
            }
        }
        result.reverse()
        return result.toIntArray()
    }
}
