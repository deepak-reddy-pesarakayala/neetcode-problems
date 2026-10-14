class Solution {
    construct(grid: number[][]): Node | null {
        const build = (r: number, c: number, size: number): Node => {
            const value = grid[r][c];
            let same = true;
            for (let i = r; i < r + size && same; i++) {
                for (let j = c; j < c + size; j++) {
                    if (grid[i][j] !== value) {
                        same = false;
                        break;
                    }
                }
            }
            if (same) {
                return new Node(value === 1, true);
            }
            const half = size / 2;
            const node = new Node(true, false);
            node.topLeft = build(r, c, half);
            node.topRight = build(r, c + half, half);
            node.bottomLeft = build(r + half, c, half);
            node.bottomRight = build(r + half, c + half, half);
            return node;
        };
        return build(0, 0, grid.length);
    }
}