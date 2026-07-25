class Solution {
    /**
     * @param {number[]} seats
     * @param {number[]} students
     * @return {number}
     */
    minMovesToSeat(seats, students) {
        seats.sort((a, b) => a - b);
        students.sort((a, b) => a - b);
        let totalMoves = 0;
        for (let i = 0; i < seats.length; i++) {
            totalMoves += Math.abs(seats[i] - students[i]);
        }
        return totalMoves;
    }
}