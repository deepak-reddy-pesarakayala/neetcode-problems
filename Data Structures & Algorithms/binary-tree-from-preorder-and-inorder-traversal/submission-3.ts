class Solution {
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        if (preorder.length === 0) {
            return null;
        }
        const indexMap = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            indexMap.set(inorder[i], i);
        }
        let preorderIndex = 0;
        const build = (left: number, right: number): TreeNode | null => {
            if (left > right) {
                return null;
            }
            const rootValue = preorder[preorderIndex++];
            const root = new TreeNode(rootValue);
            const mid = indexMap.get(rootValue)!;
            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);
            return root;
        };
        return build(0, inorder.length - 1);
    }
}

