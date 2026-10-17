class Solution {
    validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
        const parentCount = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            for (const child of [leftChild[i], rightChild[i]]) {
                if (child !== -1) {
                    parentCount[child]++;
                    if (parentCount[child] > 1) return false;
                }
            }
        }

        let root = -1;

        for (let i = 0; i < n; i++) {
            if (parentCount[i] === 0) {
                if (root !== -1) return false;
                root = i;
            }
        }

        if (root === -1) return false;

        const visited = new Set<number>();
        const queue = [root];
        let index = 0;

        while (index < queue.length) {
            const node = queue[index++];

            if (visited.has(node)) return false;
            visited.add(node);

            if (leftChild[node] !== -1) queue.push(leftChild[node]);
            if (rightChild[node] !== -1) queue.push(rightChild[node]);
        }

        return visited.size === n;
    }
}