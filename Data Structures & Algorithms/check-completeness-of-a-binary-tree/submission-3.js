class Solution {
    isCompleteTree(root) {
        if (root === null) {
            return true;
        }

        let queue = [root];
        let foundNull = false;

        while (queue.length > 0) {
            let node = queue.shift();

            if (node === null) {
                foundNull = true;
            } else {
                if (foundNull) {
                    return false;
                }

                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return true;
    }
}