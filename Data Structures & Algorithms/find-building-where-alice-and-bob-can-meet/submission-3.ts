class Solution {
    leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
        const n = heights.length;
        const tree = new Array(4 * n).fill(0);

        const build = (node: number, l: number, r: number): void => {
            if (l === r) {
                tree[node] = heights[l];
                return;
            }

            const mid = Math.floor((l + r) / 2);
            build(node * 2, l, mid);
            build(node * 2 + 1, mid + 1, r);

            tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1]);
        };

        const findFirst = (node: number, l: number, r: number, start: number, target: number): number => {
            if (r < start || tree[node] <= target) return -1;

            if (l === r) return l;

            const mid = Math.floor((l + r) / 2);

            const left = findFirst(node * 2, l, mid, start, target);

            if (left !== -1) return left;

            return findFirst(node * 2 + 1, mid + 1, r, start, target);
        };

        build(1, 0, n - 1);

        const answer: number[] = [];

        for (const [x, y] of queries) {
            const a = Math.min(x, y);
            const b = Math.max(x, y);

            if (a === b) {
                answer.push(a);
            } else if (heights[a] < heights[b]) {
                answer.push(b);
            } else {
                answer.push(findFirst(1, 0, n - 1, b + 1, heights[a]));
            }
        }

        return answer;
    }
}