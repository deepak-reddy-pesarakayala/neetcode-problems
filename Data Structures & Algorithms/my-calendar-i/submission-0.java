class MyCalendar {
    private List<int[]> bookings;
    public MyCalendar() {
        bookings = new ArrayList<>();
    }
    public boolean book(int startTime, int endTime) {
        for (int[] event : bookings) {
            int start = event[0];
            int end = event[1];
            if (startTime < end && endTime > start) {
                return false;
            }
        }
        bookings.add(new int[]{startTime, endTime});
        return true;
    }
}