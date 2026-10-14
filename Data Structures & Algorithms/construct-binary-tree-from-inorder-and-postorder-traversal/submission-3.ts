class Solution {
    buildTree(inorder: number[], postorder: number[]): TreeNode | null {
        const indexMap = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            indexMap.set(inorder[i], i);
        }
        let postIndex = postorder.length - 1;
        const build = (left: number, right: number): TreeNode | null => {
            if (left > right) return null;
            const value = postorder[postIndex--];
            const root = new TreeNode(value);
            const mid = indexMap.get(value)!;
            root.right = build(mid + 1, right);
            root.left = build(left, mid - 1);
            return root;
        };
        return build(0, inorder.length - 1);
    }
}