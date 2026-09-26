class Solution {
    customSortString(order: string, s: string): string {
        const count = new Map<string, number>();
        for (const ch of s) {
            count.set(ch, (count.get(ch) || 0) + 1);
        }
        let result = "";
        for (const ch of order) {
            const frequency = count.get(ch) || 0;
            result += ch.repeat(frequency);
            count.delete(ch);
        }
        for (const [ch, frequency] of count) {
            result += ch.repeat(frequency);
        }
        return result;
    }
}