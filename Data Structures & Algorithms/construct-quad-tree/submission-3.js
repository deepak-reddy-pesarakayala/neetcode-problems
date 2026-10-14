class Solution {
    construct(grid) {
        const build = (r, c, size) => {
            let same = true;
            let value = grid[r][c];

            for (let i = r; i < r + size; i++) {
                for (let j = c; j < c + size; j++) {
                    if (grid[i][j] !== value) {
                        same = false;
                        break;
                    }
                }
                if (!same) break;
            }

            if (same) {
                return new Node(value === 1, true, null, null, null, null);
            }

            let half = size / 2;

            return new Node(
                true,
                false,
                build(r, c, half),
                build(r, c + half, half),
                build(r + half, c, half),
                build(r + half, c + half, half)
            );
        };

        return build(0, 0, grid.length);
    }
}