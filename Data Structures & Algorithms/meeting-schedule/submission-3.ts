class Solution {
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals.sort((a, b) => a.start - b.start);
        for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i + 1].start < intervals[i].end) return false;
        }
        return true;
    }
}