class Solution {
    islandPerimeter(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let perimeter = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 0) {
                    continue;
                }
                perimeter += 4;
                if (row > 0 && grid[row - 1][col] === 1) {
                    perimeter -= 2;
                }
                if (col > 0 && grid[row][col - 1] === 1) {
                    perimeter -= 2;
                }
            }
        }
        return perimeter;
    }
}