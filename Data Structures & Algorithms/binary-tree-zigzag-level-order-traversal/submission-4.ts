class Solution {
    zigzagLevelOrder(root: TreeNode | null): number[][] {
        if (root === null) return [];
        const result: number[][] = [];
        const queue: TreeNode[] = [root];
        let leftToRight = true;
        while (queue.length > 0) {
            const size = queue.length;
            const level: number[] = new Array(size);
            for (let i = 0; i < size; i++) {
                const node = queue.shift()!;
                const index = leftToRight ? i : size - 1 - i;
                level[index] = node.val;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(level);
            leftToRight = !leftToRight;
        }
        return result;
    }
}