class Solution {
    floodFill(image, sr, sc, color) {
        const original = image[sr][sc];
        if (original === color) return image;
        const rows = image.length;
        const cols = image[0].length;
        const dfs = (r, c) => {
            if (
                r < 0 || r >= rows ||
                c < 0 || c >= cols ||
                image[r][c] !== original
            ) {
                return;
            }
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