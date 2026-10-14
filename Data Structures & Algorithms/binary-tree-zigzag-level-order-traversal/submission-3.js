class Solution {
    zigzagLevelOrder(root) {
        if (root === null) {
            return [];
        }

        let result = [];
        let queue = [root];
        let leftToRight = true;

        while (queue.length > 0) {
            let size = queue.length;
            let level = [];

            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                level.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            if (!leftToRight) {
                level.reverse();
            }

            result.push(level);
            leftToRight = !leftToRight;
        }

        return result;
    }
}