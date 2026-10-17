class BSTIterator {
    private stack: TreeNode[] = [];

    constructor(root: TreeNode | null) {
        this.pushLeft(root);
    }

    private pushLeft(node: TreeNode | null): void {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next(): number {
        const node = this.stack.pop()!;
        this.pushLeft(node.right);
        return node.val;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}