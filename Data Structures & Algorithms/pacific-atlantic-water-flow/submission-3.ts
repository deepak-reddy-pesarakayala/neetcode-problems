class Solution {
    pacificAtlantic(heights: number[][]): number[][] {
        if (!heights || heights.length === 0 || heights[0].length === 0) return [];
        const rows = heights.length, cols = heights[0].length;
        const pacific: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const atlantic: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const dfs = (r: number, c: number, ocean: boolean[][], prevHeight: number) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || ocean[r][c] || heights[r][c] < prevHeight) return;
            ocean[r][c] = true;
            dfs(r + 1, c, ocean, heights[r][c]);
            dfs(r - 1, c, ocean, heights[r][c]);
            dfs(r, c + 1, ocean, heights[r][c]);
            dfs(r, c - 1, ocean, heights[r][c]);
        };
        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific, heights[r][0]);
            dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
        }
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific, heights[0][c]);
            dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
        }
        const result: number[][] = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacific[r][c] && atlantic[r][c]) result.push([r, c]);
            }
        }
        return result;
    }
}