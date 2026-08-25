class Solution {
    fun predictPartyVictory(senate: String): String {
        val queue = java.util.ArrayDeque<Int>()
        var radiant = 0
        var dire = 0
        for (i in senate.indices) {
            queue.addLast(i)
            if (senate[i] == 'R') radiant++ else dire++
        }
        var rBan = 0
        var dBan = 0
        while (radiant > 0 && dire > 0) {
            val i = queue.removeFirst()
            if (senate[i] == 'R') {
                if (rBan > 0) {
                    rBan--
                    radiant--
                } else {
                    dBan++
                    queue.addLast(i)
                }
            } else {
                if (dBan > 0) {
                    dBan--
                    dire--
                } else {
                    rBan++
                    queue.addLast(i)
                }
            }
        }
        return if (radiant > 0) "Radiant" else "Dire"
    }
}