class Solution {
    recoverTree(root) {
        let first = null;
        let second = null;
        let prev = null;
        let curr = root;

        while (curr !== null) {
            if (curr.left === null) {
                if (prev !== null && prev.val > curr.val) {
                    if (first === null) {
                        first = prev;
                    }
                    second = curr;
                }

                prev = curr;
                curr = curr.right;
            } else {
                let pred = curr.left;

                while (pred.right !== null && pred.right !== curr) {
                    pred = pred.right;
                }

                if (pred.right === null) {
                    pred.right = curr;
                    curr = curr.left;
                } else {
                    pred.right = null;

                    if (prev !== null && prev.val > curr.val) {
                        if (first === null) {
                            first = prev;
                        }
                        second = curr;
                    }

                    prev = curr;
                    curr = curr.right;
                }
            }
        }

        if (first !== null && second !== null) {
            let temp = first.val;
            first.val = second.val;
            second.val = temp;
        }
    }
}