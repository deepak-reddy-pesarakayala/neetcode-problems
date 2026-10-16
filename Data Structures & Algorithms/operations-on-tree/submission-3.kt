class LockingTree(parent: IntArray) {
    private val n = parent.size
    private val parent = parent
    private val lockedBy = IntArray(n)
    private val children = Array(n) { mutableListOf<Int>() }

    init {
        for (i in 1 until n) {
            children[parent[i]].add(i)
        }
    }

    fun lock(num: Int, user: Int): Boolean {
        if (lockedBy[num] != 0) return false
        lockedBy[num] = user
        return true
    }

    fun unlock(num: Int, user: Int): Boolean {
        if (lockedBy[num] != user) return false
        lockedBy[num] = 0
        return true
    }

    fun upgrade(num: Int, user: Int): Boolean {
        if (lockedBy[num] != 0) return false

        var p = parent[num]
        while (p != -1) {
            if (lockedBy[p] != 0) return false
            p = parent[p]
        }

        val stack = ArrayDeque<Int>()
        for (child in children[num]) {
            stack.addLast(child)
        }

        val descendants = mutableListOf<Int>()

        while (stack.isNotEmpty()) {
            val node = stack.removeLast()

            if (lockedBy[node] != 0) {
                descendants.add(node)
            }

            for (child in children[node]) {
                stack.addLast(child)
            }
        }

        if (descendants.isEmpty()) return false

        for (node in descendants) {
            lockedBy[node] = 0
        }

        lockedBy[num] = user
        return true
    }
}