class Solution {
    largestValues(root: TreeNode | null): number[] {
        if (root === null) return [];

        const result: number[] = [];
        const queue: TreeNode[] = [root];
        let index = 0;

        while (index < queue.length) {
            const size = queue.length - index;
            let maxVal = Number.MIN_SAFE_INTEGER;

            for (let i = 0; i < size; i++) {
                const node = queue[index++];
                maxVal = Math.max(maxVal, node.val);

                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }

            result.push(maxVal);
        }

        return result;
    }
}