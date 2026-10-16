class Solution {
    allPossibleFBT(n: number): (TreeNode | null)[] {
        const memo = new Map<number, (TreeNode | null)[]>();

        const build = (nodes: number): (TreeNode | null)[] => {
            if (nodes % 2 === 0) return [];
            if (nodes === 1) return [new TreeNode(0)];
            if (memo.has(nodes)) return memo.get(nodes)!;

            const result: (TreeNode | null)[] = [];

            for (let leftCount = 1; leftCount < nodes; leftCount += 2) {
                const rightCount = nodes - 1 - leftCount;
                const leftTrees = build(leftCount);
                const rightTrees = build(rightCount);

                for (const left of leftTrees) {
                    for (const right of rightTrees) {
                        const root = new TreeNode(0);
                        root.left = left;
                        root.right = right;
                        result.push(root);
                    }
                }
            }

            memo.set(nodes, result);
            return result;
        };

        return build(n);
    }
}