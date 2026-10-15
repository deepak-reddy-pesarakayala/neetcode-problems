class Solution {
    recoverTree(root: TreeNode | null): void {
        let first: TreeNode | null = null;
        let second: TreeNode | null = null;
        let prev: TreeNode | null = null;
        let current = root;
        while (current !== null) {
            if (current.left === null) {
                if (prev !== null && prev.val > current.val) {
                    if (first === null) first = prev;
                    second = current;
                }
                prev = current;
                current = current.right;
            } else {
                let predecessor = current.left;
                while (predecessor.right !== null && predecessor.right !== current) {
                    predecessor = predecessor.right;
                }
                if (predecessor.right === null) {
                    predecessor.right = current;
                    current = current.left;
                } else {
                    predecessor.right = null;
                    if (prev !== null && prev.val > current.val) {
                        if (first === null) first = prev;
                        second = current;
                    }
                    prev = current;
                    current = current.right;
                }
            }
        }
        if (first !== null && second !== null) {
            const temp = first.val;
            first.val = second.val;
            second.val = temp;
        }
    }
}