class Solution {
    totalFruit(fruits: number[]): number {
        const count = new Map<number, number>();
        let left = 0;
        let result = 0;
        for (let right = 0; right < fruits.length; right++) {
            count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);
            while (count.size > 2) {
                count.set(fruits[left], count.get(fruits[left])! - 1);
                if (count.get(fruits[left]) === 0) count.delete(fruits[left]);
                left++;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}