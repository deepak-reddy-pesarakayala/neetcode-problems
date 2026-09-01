class Solution {
    minMeetingRooms(intervals: Interval[]): number {
        const starts = intervals.map(i => i.start).sort((a, b) => a - b);
        const ends = intervals.map(i => i.end).sort((a, b) => a - b);
        let rooms = 0;
        let endPtr = 0;
        for (let startPtr = 0; startPtr < starts.length; startPtr++) {
            if (starts[startPtr] < ends[endPtr]) {
                rooms++;
            } else {
                endPtr++;
            }
        }
        return rooms;
    }
}