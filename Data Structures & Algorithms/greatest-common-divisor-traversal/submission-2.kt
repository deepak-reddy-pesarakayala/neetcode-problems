class DSU(private val n: Int) {
    private val parent = IntArray(n) { it }
    private val rank = IntArray(n)
    var components = n
        private set
    fun find(x: Int): Int {
        if (parent[x] != x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }
    fun union(a: Int, b: Int) {
        var x = find(a)
        var y = find(b)
        if (x == y) return
        if (rank[x] < rank[y]) {
            val temp = x
            x = y
            y = temp
        }
        parent[y] = x
        if (rank[x] == rank[y]) {
            rank[x]++
        }
        components--
    }
}

class Solution {
    fun canTraverseAllPairs(nums: IntArray): Boolean {
        if (nums.size == 1) return true
        if (nums.any { it == 1 }) return false
        val maxValue = nums.maxOrNull() ?: 1
        val dsu = DSU(nums.size)
        val first = IntArray(maxValue + 1) { -1 }
        for (i in nums.indices) {
            var x = nums[i]
            var p = 2
            while (p * p <= x) {
                if (x % p == 0) {
                    if (first[p] == -1) {
                        first[p] = i
                    } else {
                        dsu.union(i, first[p])
                    }
                    while (x % p == 0) {
                        x /= p
                    }
                }
                p++
            }
            if (x > 1) {
                if (first[x] == -1) {
                    first[x] = i
                } else {
                    dsu.union(i, first[x])
                }
            }
        }
        return dsu.components == 1
    }
}