class Solution {
    fun accountsMerge(accounts: List<List<String>>): List<List<String>> {
        val emailToId = HashMap<String, Int>()
        val emailToName = HashMap<String, String>()
        var id = 0
        for (account in accounts) {
            val name = account[0]
            for (i in 1 until account.size) {
                val email = account[i]
                if (!emailToId.containsKey(email)) {
                    emailToId[email] = id++
                    emailToName[email] = name
                }
            }
        }
        val parent = IntArray(id) { it }
        fun find(x: Int): Int {
            if (parent[x] != x) {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }
        fun union(a: Int, b: Int) {
            val pa = find(a)
            val pb = find(b)
            if (pa != pb) parent[pb] = pa
        }
        for (account in accounts) {
            val first = emailToId[account[1]]!!
            for (i in 2 until account.size) {
                union(first, emailToId[account[i]]!!)
            }
        }
        val groups = HashMap<Int, MutableList<String>>()
        for ((email, emailId) in emailToId) {
            val root = find(emailId)
            groups.getOrPut(root) { mutableListOf() }.add(email)
        }
        val result = mutableListOf<List<String>>()
        for (emails in groups.values) {
            emails.sort()
            val name = emailToName[emails[0]]!!
            val account = mutableListOf<String>()
            account.add(name)
            account.addAll(emails)
            result.add(account)
        }
        return result
    }
}