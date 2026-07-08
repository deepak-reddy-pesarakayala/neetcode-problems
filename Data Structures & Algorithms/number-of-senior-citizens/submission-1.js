class Solution {
    countSeniors(details) {
        let count = 0;
        for (let detail of details) {
            let age = Number(detail.substring(11, 13));
            if (age > 60) {
                count++;
            }
        }
        return count;
    }
}