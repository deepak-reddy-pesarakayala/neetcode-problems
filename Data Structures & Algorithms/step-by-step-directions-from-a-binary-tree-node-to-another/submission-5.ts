class Solution {
    getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
        if (root === null) return "";

        const parent = new Map<number, { value: number; direction: string }>();
        const stack: TreeNode[] = [root];
        parent.set(root.val, { value: -1, direction: "" });

        while (stack.length > 0) {
            const node = stack.pop()!;

            if (node.left !== null) {
                parent.set(node.left.val, { value: node.val, direction: "L" });
                stack.push(node.left);
            }

            if (node.right !== null) {
                parent.set(node.right.val, { value: node.val, direction: "R" });
                stack.push(node.right);
            }
        }

        const startAncestors = new Map<number, number>();
        let current = startValue;
        let depth = 0;

        while (current !== -1) {
            startAncestors.set(current, depth++);
            current = parent.get(current)!.value;
        }

        const destDirections: string[] = [];
        current = destValue;

        while (!startAncestors.has(current)) {
            const info = parent.get(current)!;
            destDirections.push(info.direction);
            current = info.value;
        }

        const lca = current;
        const upCount = startAncestors.get(lca)!;
        const downDirections: string[] = [];

        current = destValue;

        while (current !== lca) {
            const info = parent.get(current)!;
            downDirections.push(info.direction);
            current = info.value;
        }

        return "U".repeat(upCount) + downDirections.reverse().join("");
    }
}