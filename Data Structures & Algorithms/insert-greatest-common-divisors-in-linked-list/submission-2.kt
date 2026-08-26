class Solution {
    fun insertGreatestCommonDivisors(head: ListNode?): ListNode? {
        var current = head
        while (current != null && current.next != null) {
            val next = current.next
            val gcd = findGcd(current.`val`, next!!.`val`)
            val newNode = ListNode(gcd)
            current.next = newNode
            newNode.next = next
            current = next
        }
        return head
    }
    fun findGcd(a: Int, b: Int): Int {
        var x = a
        var y = b
        while (y != 0) {
            val temp = x % y
            x = y
            y = temp
        }
        return x
    }
}