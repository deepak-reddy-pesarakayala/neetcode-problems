class Solution {
    findBottomLeftValue(root: TreeNode | null): number {
        if (root === null) return 0;

        const queue: TreeNode[] = [root];
        let result = root.val;
        let index = 0;

        while (index < queue.length) {
            const size = queue.length - index;

            for (let i = 0; i < size; i++) {
                const node = queue[index++];

                if (i === 0) result = node.val;

                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }
        }

        return result;
    }
}