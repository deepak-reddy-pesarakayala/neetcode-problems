class Solution {
    validateBinaryTreeNodes(n, leftChild, rightChild) {
        let parent = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (leftChild[i] !== -1) {
                parent[leftChild[i]]++;
                if (parent[leftChild[i]] > 1) return false;
            }

            if (rightChild[i] !== -1) {
                parent[rightChild[i]]++;
                if (parent[rightChild[i]] > 1) return false;
            }
        }

        let root = -1;

        for (let i = 0; i < n; i++) {
            if (parent[i] === 0) {
                if (root !== -1) return false;
                root = i;
            }
        }

        if (root === -1) return false;

        let visited = new Set();
        let queue = [root];
        let index = 0;

        while (index < queue.length) {
            let node = queue[index++];

            if (visited.has(node)) return false;
            visited.add(node);

            if (leftChild[node] !== -1) {
                queue.push(leftChild[node]);
            }

            if (rightChild[node] !== -1) {
                queue.push(rightChild[node]);
            }
        }

        return visited.size === n;
    }
}