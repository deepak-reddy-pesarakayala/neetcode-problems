class Solution {
    countStudents(students: number[], sandwiches: number[]): number {
        let count0 = 0;
        let count1 = 0;
        for (const student of students) {
            if (student === 0) count0++;
            else count1++;
        }
        for (const sandwich of sandwiches) {
            if (sandwich === 0) {
                if (count0 === 0) return count1;
                count0--;
            } else {
                if (count1 === 0) return count0;
                count1--;
            }
        }
        return 0;
    }
}