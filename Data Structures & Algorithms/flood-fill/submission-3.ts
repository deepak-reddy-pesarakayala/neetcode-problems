class Solution {
    floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
        const originalColor = image[sr][sc];

        if (originalColor === color) return image;

        const rows = image.length;
        const cols = image[0].length;

        const dfs = (r: number, c: number): void => {
            if (r < 0 || c < 0 || r >= rows || c >= cols) return;
            if (image[r][c] !== originalColor) return;

            image[r][c] = color;

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        dfs(sr, sc);

        return image;
    }
}