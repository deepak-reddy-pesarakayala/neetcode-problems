class Solution {
    smallestFromLeaf(root: TreeNode | null): string {
        if (root === null) return "";

        let result: string | null = null;
        const stack: [TreeNode, string][] = [[root, ""]];

        while (stack.length > 0) {
            const [node, path] = stack.pop()!;
            const current = path + String.fromCharCode(97 + node.val);

            if (node.left === null && node.right === null) {
                const candidate = current.split("").reverse().join("");

                if (result === null || candidate < result) {
                    result = candidate;
                }
            } else {
                if (node.right !== null) stack.push([node.right, current]);
                if (node.left !== null) stack.push([node.left, current]);
            }
        }

        return result ?? "";
    }
}