class Solution {
    connect(root: Node | null): Node | null {
        if (root === null) return null;
        let leftmost: Node = root;
        while (leftmost.left !== null) {
            let current: Node | null = leftmost;
            while (current !== null) {
                current.left!.next = current.right;
                if (current.next !== null) {
                    current.right!.next = current.next.left;
                }
                current = current.next;
            }
            leftmost = leftmost.left;
        }
        return root;
    }
}