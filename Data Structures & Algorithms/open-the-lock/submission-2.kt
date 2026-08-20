class Solution {
    fun openLock(deadends: Array<String>, target: String): Int {
        val dead = deadends.toHashSet()
        if ("0000" in dead) return -1
        if (target == "0000") return 0
        val queue = ArrayDeque<String>()
        val visited = HashSet<String>()
        queue.addLast("0000")
        visited.add("0000")
        var steps = 0
        while (queue.isNotEmpty()) {
            val size = queue.size
            repeat(size) {
                val current = queue.removeFirst()
                if (current == target) return steps
                for (i in 0 until 4) {
                    val digit = current[i] - '0'
                    val nextUp = (digit + 1) % 10
                    val nextDown = (digit + 9) % 10
                    val up = current.substring(0, i) + nextUp + current.substring(i + 1)
                    val down = current.substring(0, i) + nextDown + current.substring(i + 1)
                    if (up !in dead && visited.add(up)) queue.addLast(up)
                    if (down !in dead && visited.add(down)) queue.addLast(down)
                }
            }
            steps++
        }
        return -1
    }
}