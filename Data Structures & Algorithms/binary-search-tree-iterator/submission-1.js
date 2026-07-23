class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.pushLeft(root);
    }
    pushLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
    next() {
        const node = this.stack.pop();
        if (node.right) {
            this.pushLeft(node.right);
        }
        return node.val;
    }
    hasNext() {
        return this.stack.length > 0;
    }
}