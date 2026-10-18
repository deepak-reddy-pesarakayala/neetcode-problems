class Solution {
    pseudoPalindromicPaths(root) {
        if (root === null) return 0;

        let count = 0;
        let stack = [[root, 0]];

        while (stack.length > 0) {
            let [node, mask] = stack.pop();

            mask ^= (1 << node.val);

            if (node.left === null && node.right === null) {
                if ((mask & (mask - 1)) === 0) {
                    count++;
                }
            } else {
                if (node.left !== null) {
                    stack.push([node.left, mask]);
                }

                if (node.right !== null) {
                    stack.push([node.right, mask]);
                }
            }
        }

        return count;
    }
}