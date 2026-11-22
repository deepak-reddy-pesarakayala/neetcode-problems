class Solution {
    fun findAllPeople(
        n: Int,
        meetings: Array<IntArray>,
        firstPerson: Int
    ): List<Int> {
        meetings.sortBy { it[2] }

        val knows = BooleanArray(n)
        knows[0] = true
        knows[firstPerson] = true

        var i = 0

        while (i < meetings.size) {
            val time = meetings[i][2]
            val graph = HashMap<Int, MutableList<Int>>()
            val people = HashSet<Int>()

            while (i < meetings.size && meetings[i][2] == time) {
                val a = meetings[i][0]
                val b = meetings[i][1]

                graph.getOrPut(a) { mutableListOf() }.add(b)
                graph.getOrPut(b) { mutableListOf() }.add(a)

                people.add(a)
                people.add(b)
                i++
            }

            val queue = ArrayDeque<Int>()
            val visited = HashSet<Int>()

            for (person in people) {
                if (knows[person]) {
                    queue.add(person)
                    visited.add(person)
                }
            }

            while (queue.isNotEmpty()) {
                val person = queue.removeFirst()
                knows[person] = true

                for (next in graph[person] ?: emptyList()) {
                    if (visited.add(next)) {
                        queue.add(next)
                    }
                }
            }
        }

        return (0 until n).filter { knows[it] }
    }
}