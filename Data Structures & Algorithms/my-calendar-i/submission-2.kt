class MyCalendar {
    private val bookings = mutableListOf<IntArray>()
    fun book(startTime: Int, endTime: Int): Boolean {
        for (booking in bookings) {
            if (startTime < booking[1] && endTime > booking[0]) {
                return false
            }
        }
        bookings.add(intArrayOf(startTime, endTime))
        return true
    }
}