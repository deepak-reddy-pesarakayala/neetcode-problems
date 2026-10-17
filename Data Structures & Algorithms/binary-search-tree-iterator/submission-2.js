class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.pushLeft(root);
    }

    pushLeft(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        let node = this.stack.pop();

        if (node.right !== null) {
            this.pushLeft(node.right);
        }

        return node.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}