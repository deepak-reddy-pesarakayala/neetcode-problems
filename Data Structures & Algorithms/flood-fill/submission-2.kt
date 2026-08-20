class Solution {
    fun floodFill(image: Array<IntArray>, sr: Int, sc: Int, color: Int): Array<IntArray> {
        val original = image[sr][sc]
        if (original == color) return image
        val queue = ArrayDeque<Pair<Int, Int>>()
        queue.addLast(Pair(sr, sc))
        image[sr][sc] = color
        val directions = arrayOf(
            intArrayOf(-1, 0),
            intArrayOf(1, 0),
            intArrayOf(0, -1),
            intArrayOf(0, 1)
        )
        while (queue.isNotEmpty()) {
            val (r, c) = queue.removeFirst()
            for (d in directions) {
                val nr = r + d[0]
                val nc = c + d[1]
                if (nr in image.indices && nc in image[0].indices && image[nr][nc] == original) {
                    image[nr][nc] = color
                    queue.addLast(Pair(nr, nc))
                }
            }
        }
        return image
    }
}