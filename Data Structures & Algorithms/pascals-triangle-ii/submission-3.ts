class Solution {
    getRow(rowIndex: number): number[] {
        const row: number[] = [1];
        for (let i = 1; i <= rowIndex; i++) {
            row.push(1);
            for (let j = i - 1; j > 0; j--) {
                row[j] = row[j - 1] + row[j];
            }
        }
        return row;
    }
}