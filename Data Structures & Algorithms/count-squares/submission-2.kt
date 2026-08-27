class CountSquares {
    private val points = HashMap<Pair<Int, Int>, Int>() 
    fun add(point: IntArray) {
        val key = Pair(point[0], point[1])
        points[key] = (points[key] ?: 0) + 1
    }
    fun count(point: IntArray): Int {
        val x = point[0]
        val y = point[1]
        var result = 0
        for ((key, frequency) in points) {
            val x1 = key.first
            val y1 = key.second
            if (x1 == x || y1 == y) continue
            val side = x1 - x
            val y2 = y + side
            val x2 = x
            val x3 = x1
            val y3 = y1
            val count1 = points[Pair(x1, y)]
            val count2 = points[Pair(x, y1)]
            if (count1 != null && count2 != null) {
                result += frequency * count1 * count2
            }
        }
        return result
    }
}