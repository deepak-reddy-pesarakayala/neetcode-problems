class Solution {
    largestValues(root) {
        if (root === null) return [];

        let result = [];
        let queue = [root];
        let index = 0;

        while (index < queue.length) {
            let size = queue.length - index;
            let maxVal = -Infinity;

            for (let i = 0; i < size; i++) {
                let node = queue[index++];

                maxVal = Math.max(maxVal, node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            result.push(maxVal);
        }

        return result;
    }
}