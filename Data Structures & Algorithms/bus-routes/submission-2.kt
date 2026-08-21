class Solution {
    fun numBusesToDestination(routes: Array<IntArray>, source: Int, target: Int): Int {
        if (source == target) return 0
        val stopToBuses = HashMap<Int, MutableList<Int>>()
        for (i in routes.indices) {
            for (stop in routes[i]) {
                stopToBuses.getOrPut(stop) { mutableListOf() }.add(i)
            }
        }
        if (!stopToBuses.containsKey(source) || !stopToBuses.containsKey(target)) return -1
        val queue = ArrayDeque<Int>()
        val visitedBus = BooleanArray(routes.size)
        val visitedStop = HashSet<Int>()
        queue.add(source)
        visitedStop.add(source)
        var buses = 0
        while (queue.isNotEmpty()) {
            val size = queue.size
            buses++
            repeat(size) {
                val stop = queue.removeFirst()
                val busList = stopToBuses[stop] ?: return@repeat
                for (bus in busList) {
                    if (visitedBus[bus]) continue
                    visitedBus[bus] = true
                    for (nextStop in routes[bus]) {
                        if (nextStop == target) return buses
                        if (visitedStop.add(nextStop)) {
                            queue.add(nextStop)
                        }
                    }
                }
            }
        }
        return -1
    }
}