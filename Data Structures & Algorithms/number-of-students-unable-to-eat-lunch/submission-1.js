class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = [0, 0];
        for (const student of students) {
            count[student]++;
        }
        for (const sandwich of sandwiches) {
            if (count[sandwich] === 0) {
                break;
            }
            count[sandwich]--;
        }
        return count[0] + count[1];
    }
}