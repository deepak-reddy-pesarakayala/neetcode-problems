class Solution {
    fun checkIfPrerequisite(numCourses: Int, prerequisites: Array<IntArray>, queries:      Array<IntArray>): List<Boolean> {
        val reach = Array(numCourses) { BooleanArray(numCourses) }
        for (p in prerequisites) {
            reach[p[0]][p[1]] = true
        }
        for (k in 0 until numCourses) {
            for (i in 0 until numCourses) {
                if (reach[i][k]) {
                    for (j in 0 until numCourses) {
                        if (reach[k][j]) {
                            reach[i][j] = true
                        }
                    }
                }
            }
        }
        val answer = ArrayList<Boolean>()
        for (q in queries) {
            answer.add(reach[q[0]][q[1]])
        }
        return answer
    }
}