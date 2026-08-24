class Solution {
    fun minMovesToSeat(seats: IntArray, students: IntArray): Int {
        seats.sort()
        students.sort()
        var moves = 0
        for (i in seats.indices) {
            moves += kotlin.math.abs(seats[i] - students[i])
        }
        return moves
    }
}
