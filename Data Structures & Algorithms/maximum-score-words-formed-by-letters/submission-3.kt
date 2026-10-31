class Solution {
    fun maxScoreWords(words: Array<String>, letters: CharArray, score: IntArray): Int {
        val freq = IntArray(26)
        for (c in letters) {
            freq[c - 'a']++
        }

        val wordFreq = Array(words.size) { IntArray(26) }
        val wordScore = IntArray(words.size)

        for (i in words.indices) {
            for (c in words[i]) {
                val index = c - 'a'
                wordFreq[i][index]++
                wordScore[i] += score[index]
            }
        }

        fun backtrack(index: Int): Int {
            if (index == words.size) return 0

            var result = backtrack(index + 1)
            var possible = true

            for (i in 0 until 26) {
                if (wordFreq[index][i] > freq[i]) {
                    possible = false
                    break
                }
            }

            if (possible) {
                for (i in 0 until 26) {
                    freq[i] -= wordFreq[index][i]
                }

                result = maxOf(result, wordScore[index] + backtrack(index + 1))

                for (i in 0 until 26) {
                    freq[i] += wordFreq[index][i]
                }
            }

            return result
        }

        return backtrack(0)
    }
}