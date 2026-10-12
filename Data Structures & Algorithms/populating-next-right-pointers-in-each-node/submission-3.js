class Solution {
    connect(root) {
        if (root === null) {
            return null;
        }

        let leftmost = root;

        while (leftmost.left !== null) {
            let head = leftmost;

            while (head !== null) {
                head.left.next = head.right;

                if (head.next !== null) {
                    head.right.next = head.next.left;
                }

                head = head.next;
            }

            leftmost = leftmost.left;
        }

        return root;
    }
}
