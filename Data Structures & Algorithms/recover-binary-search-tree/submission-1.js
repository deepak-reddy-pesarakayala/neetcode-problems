class Solution {
    recoverTree(root) {
        let first = null;
        let second = null;
        let prev = null;
        let curr = root;
        while (curr) {
            if (!curr.left) {
                if (prev && prev.val > curr.val) {
                    if (!first) first = prev;
                    second = curr;
                }
                prev = curr;
                curr = curr.right;
            } else {
                let pred = curr.left;
                while (pred.right && pred.right !== curr) {
                    pred = pred.right;
                }
                if (!pred.right) {
                    pred.right = curr;
                    curr = curr.left;
                } else {
                    pred.right = null;
                    if (prev && prev.val > curr.val) {
                        if (!first) first = prev;
                        second = curr;
                    }
                    prev = curr;
                    curr = curr.right;
                }
            }
        }
        [first.val, second.val] = [second.val, first.val];
    }
}