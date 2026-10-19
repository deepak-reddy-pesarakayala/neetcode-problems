class Solution {
    isEvenOddTree(root) {
        if (root === null) return true;

        let queue = [root];
        let index = 0;
        let level = 0;

        while (index < queue.length) {
            let size = queue.length - index;
            let prev = level % 2 === 0 ? -Infinity : Infinity;

            for (let i = 0; i < size; i++) {
                let node = queue[index++];
                let val = node.val;

                if (level % 2 === 0) {
                    if (val % 2 === 0 || val <= prev) {
                        return false;
                    }
                } else {
                    if (val % 2 !== 0 || val >= prev) {
                        return false;
                    }
                }

                prev = val;

                if (node.left !== null) queue.push(node.left);
                if (node.right !== null) queue.push(node.right);
            }

            level++;
        }

        return true;
    }
}