class Solution {
    smallestFromLeaf(root) {
        let result = null;

        function dfs(node, path) {
            if (node === null) return;

            path = String.fromCharCode(97 + node.val) + path;

            if (node.left === null && node.right === null) {
                if (result === null || path < result) {
                    result = path;
                }
                return;
            }

            dfs(node.left, path);
            dfs(node.right, path);
        }

        dfs(root, "");
        return result;
    }
}