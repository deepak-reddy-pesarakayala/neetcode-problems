class Solution {
    inorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];
        const stack: TreeNode[] = [];
        let current = root;
        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop()!;
            result.push(current.val);
            current = current.right;
        }
        return result;
    }
}