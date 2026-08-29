class Solution {
    levelOrder(root: TreeNode | null): number[][] {
        if (root === null) {
            return [];
        }
        const result: number[][] = [];
        const queue: TreeNode[] = [root];
        let index = 0;
        while (index < queue.length) {
            const size = queue.length - index;
            const level: number[] = [];
            for (let i = 0; i < size; i++) {
                const node = queue[index++];
                level.push(node.val);
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
            result.push(level);
        }
        return result;
    }
}
