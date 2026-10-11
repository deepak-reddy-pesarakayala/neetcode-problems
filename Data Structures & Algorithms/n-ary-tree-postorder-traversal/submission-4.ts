class Solution {
    postorder(root: Node | null): number[] {
        if (!root) return [];
        const result: number[] = [];
        const stack: Node[] = [root];
        while (stack.length > 0) {
            const node = stack.pop()!;
            result.push(node.val);
            if (node.children) {
                for (const child of node.children) {
                    stack.push(child);
                }
            }
        }
        return result.reverse();
    }
}