class Solution {
    fun fullBloomFlowers(flowers: Array<IntArray>, people: IntArray): IntArray {
        val starts = flowers.map { it[0] }.sorted()
        val ends = flowers.map { it[1] }.sorted()

        val result = IntArray(people.size)

        for (i in people.indices) {
            val time = people[i]

            var low = 0
            var high = starts.size

            while (low < high) {
                val mid = low + (high - low) / 2
                if (starts[mid] <= time) {
                    low = mid + 1
                } else {
                    high = mid
                }
            }
            val started = low

            low = 0
            high = ends.size

            while (low < high) {
                val mid = low + (high - low) / 2
                if (ends[mid] < time) {
                    low = mid + 1
                } else {
                    high = mid
                }
            }
            val ended = low

            result[i] = started - ended
        }

        return result
    }
}