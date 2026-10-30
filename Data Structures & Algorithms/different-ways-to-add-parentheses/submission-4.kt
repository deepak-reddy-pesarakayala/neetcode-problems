class Solution {
    fun diffWaysToCompute(expression: String): List<Int> {
        val memo = HashMap<String, List<Int>>()

        fun solve(s: String): List<Int> {
            if (memo.containsKey(s)) return memo[s]!!

            val result = mutableListOf<Int>()

            for (i in s.indices) {
                val op = s[i]
                if (op == '+' || op == '-' || op == '*') {
                    val left = solve(s.substring(0, i))
                    val right = solve(s.substring(i + 1))

                    for (a in left) {
                        for (b in right) {
                            when (op) {
                                '+' -> result.add(a + b)
                                '-' -> result.add(a - b)
                                '*' -> result.add(a * b)
                            }
                        }
                    }
                }
            }

            if (result.isEmpty()) {
                result.add(s.toInt())
            }

            memo[s] = result
            return result
        }

        return solve(expression)
    }
}