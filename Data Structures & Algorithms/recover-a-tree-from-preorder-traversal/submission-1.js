class Solution {
    recoverFromPreorder(traversal) {
        const stack = [];
        let i = 0;

        while (i < traversal.length) {
            let depth = 0;

            while (i < traversal.length && traversal[i] === '-') {
                depth++;
                i++;
            }

            let value = 0;

            while (i < traversal.length && traversal[i] >= '0' && traversal[i] <= '9') {
                value = value * 10 + Number(traversal[i]);
                i++;
            }

            const node = new TreeNode(value);

            while (stack.length > depth) {
                stack.pop();
            }

            if (stack.length > 0) {
                const parent = stack[stack.length - 1];

                if (parent.left === null) {
                    parent.left = node;
                } else {
                    parent.right = node;
                }
            }

            stack.push(node);
        }

        return stack[0];
    }
}