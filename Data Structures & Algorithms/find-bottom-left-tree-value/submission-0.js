class Solution {
    findBottomLeftValue(root) {
        let queue = [root];
        let result = root.val;

        while (queue.length > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let node = queue.shift();

                if (i === 0) {
                    result = node.val;
                }

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
        }

        return result;
    }
}