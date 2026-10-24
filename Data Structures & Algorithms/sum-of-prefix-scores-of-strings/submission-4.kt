class Solution {
    fun sumPrefixScores(words: Array<String>): IntArray {
        val prefixCount = HashMap<String, Int>()

        for (word in words) {
            for (i in 1..word.length) {
                val prefix = word.substring(0, i)
                prefixCount[prefix] = prefixCount.getOrDefault(prefix, 0) + 1
            }
        }

        val result = IntArray(words.size)

        for (i in words.indices) {
            val word = words[i]
            var score = 0

            for (j in 1..word.length) {
                score += prefixCount[word.substring(0, j)] ?: 0
            }

            result[i] = score
        }

        return result
    }
}