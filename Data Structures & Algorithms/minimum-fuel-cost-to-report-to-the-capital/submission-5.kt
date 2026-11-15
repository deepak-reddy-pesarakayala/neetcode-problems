class Solution {
    fun minimumFuelCost(roads: Array<IntArray>, seats: Int): Long {
        val n = roads.size + 1
        val graph = Array(n) { mutableListOf<Int>() }

        for (road in roads) {
            graph[road[0]].add(road[1])
            graph[road[1]].add(road[0])
        }

        val parent = IntArray(n) { -1 }
        val order = mutableListOf<Int>()
        val stack = java.util.ArrayDeque<Int>()

        stack.push(0)
        parent[0] = 0

        while (stack.isNotEmpty()) {
            val node = stack.pop()
            order.add(node)

            for (next in graph[node]) {
                if (parent[next] == -1) {
                    parent[next] = node
                    stack.push(next)
                }
            }
        }

        val people = LongArray(n) { 1L }
        var fuel = 0L

        for (i in order.size - 1 downTo 1) {
            val node = order[i]
            val cars = (people[node] + seats - 1) / seats

            fuel += cars
            people[parent[node]] += people[node]
        }

        return fuel
    }
}