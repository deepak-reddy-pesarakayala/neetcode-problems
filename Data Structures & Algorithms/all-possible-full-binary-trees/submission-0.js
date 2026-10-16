class Solution {
    allPossibleFBT(n) {
        if (n % 2 === 0) {
            return [];
        }

        let memo = new Map();

        function build(nodes) {
            if (memo.has(nodes)) {
                return memo.get(nodes);
            }

            let result = [];

            if (nodes === 1) {
                result.push(new TreeNode(0));
                return result;
            }

            for (let leftCount = 1; leftCount < nodes; leftCount += 2) {
                let rightCount = nodes - 1 - leftCount;

                let leftTrees = build(leftCount);
                let rightTrees = build(rightCount);

                for (let left of leftTrees) {
                    for (let right of rightTrees) {
                        let root = new TreeNode(0);
                        root.left = clone(left);
                        root.right = clone(right);
                        result.push(root);
                    }
                }
            }

            memo.set(nodes, result);
            return result;
        }

        function clone(node) {
            if (node === null) {
                return null;
            }

            let copy = new TreeNode(0);
            copy.left = clone(node.left);
            copy.right = clone(node.right);
            return copy;
        }

        return build(n);
    }
}