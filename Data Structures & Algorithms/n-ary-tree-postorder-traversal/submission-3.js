class Solution {
    postorder(root) {
        if (!root) return [];

        let stack = [root];
        let result = [];

        while (stack.length > 0) {
            let node = stack.pop();
            result.unshift(node.val);

            for (let child of node.children) {
                stack.push(child);
            }
        }

        return result;
    }
}