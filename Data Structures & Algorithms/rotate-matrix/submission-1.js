class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let l = 0;
        let r = matrix.length - 1;
        while (l < r) {
            for (let i = 0; i < r - l; i++) {
                const top = l;
                const bottom = r;
                const topLeft = matrix[top][l + i];
                matrix[top][l + i] = matrix[bottom - i][l];
                matrix[bottom - i][l] = matrix[bottom][r - i];
                matrix[bottom][r - i] = matrix[top + i][r];
                matrix[top + i][r] = topLeft;
            }
            r--;
            l++;
        }
    }
}