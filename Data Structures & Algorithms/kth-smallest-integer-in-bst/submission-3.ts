class Solution {
    kthSmallest(root: TreeNode | null, k: number): number {
        const stack: TreeNode[] = [];
        let current = root;
        let count = 0;
        while (current !== null || stack.length > 0) {
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop()!;
            count++;
            if (count === k) {
                return current.val;
            }
            current = current.right;
        }
        return -1;
    }
}

