class Solution {
    totalFruit(fruits) {
        let left = 0;
        let maxLength = 0;
        let count = new Map();

        for (let right = 0; right < fruits.length; right++) {
            count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);

            while (count.size > 2) {
                count.set(fruits[left], count.get(fruits[left]) - 1);

                if (count.get(fruits[left]) === 0) {
                    count.delete(fruits[left]);
                }

                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}