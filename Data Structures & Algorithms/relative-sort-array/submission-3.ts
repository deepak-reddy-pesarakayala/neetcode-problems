class Solution {
    relativeSortArray(arr1: number[], arr2: number[]): number[] {
        const count = new Map<number, number>();
        for (const num of arr1) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        const result: number[] = [];
        for (const num of arr2) {
            const frequency = count.get(num) || 0;
            for (let i = 0; i < frequency; i++) {
                result.push(num);
            }
            count.delete(num);
        }
        const remaining: number[] = [];
        for (const [num, frequency] of count) {
            for (let i = 0; i < frequency; i++) {
                remaining.push(num);
            }
        }
        for (let i = 1; i < remaining.length; i++) {
            const key = remaining[i];
            let j = i - 1;
            while (j >= 0 && remaining[j] > key) {
                remaining[j + 1] = remaining[j];
                j--;
            }
            remaining[j + 1] = key;
        }
        return result.concat(remaining);
    }
}