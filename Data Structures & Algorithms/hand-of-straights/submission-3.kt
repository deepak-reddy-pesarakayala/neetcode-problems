class Solution {
    fun isNStraightHand(hand: IntArray, groupSize: Int): Boolean {
        if (hand.size % groupSize != 0) return false
        val count = sortedMapOf<Int, Int>()
        for (card in hand) {
            count[card] = (count[card] ?: 0) + 1
        }
        for (start in count.keys.toList()) {
            val freq = count[start] ?: 0
            if (freq == 0) continue
            for (card in start until start + groupSize) {
                val current = count[card] ?: 0
                if (current < freq) return false
                count[card] = current - freq
            }
        }
        return true
    }
}