class Solution {
    fun intervalIntersection(firstList: Array<IntArray>, secondList: Array<IntArray>): Array<IntArray> {
        val result = mutableListOf<IntArray>()
        var i = 0
        var j = 0
        while (i < firstList.size && j < secondList.size) {
            val start = maxOf(firstList[i][0], secondList[j][0])
            val end = minOf(firstList[i][1], secondList[j][1])
            if (start <= end) {
                result.add(intArrayOf(start, end))
            }
            if (firstList[i][1] < secondList[j][1]) {
                i++
            } else {
                j++
            }
        }
        return result.toTypedArray()
    }
}