class Solution {
    pseudoPalindromicPaths(root: TreeNode | null): number {
        if (root === null) return 0;

        let count = 0;
        const stack: [TreeNode, number][] = [[root, 0]];

        while (stack.length > 0) {
            const [node, mask] = stack.pop()!;
            const newMask = mask ^ (1 << node.val);

            if (node.left === null && node.right === null) {
                if ((newMask & (newMask - 1)) === 0) {
                    count++;
                }
            } else {
                if (node.right !== null) {
                    stack.push([node.right, newMask]);
                }
                if (node.left !== null) {
                    stack.push([node.left, newMask]);
                }
            }
        }

        return count;
    }
}