class Solution {
    private map: Map<Node, Node> = new Map();

    cloneGraph(node: Node | null): Node | null {
        if (node === null) {
            return null;
        }
        if (this.map.has(node)) {
            return this.map.get(node)!;
        }
        const clone = new Node(node.val);
        this.map.set(node, clone);
        for (const neighbor of node.neighbors) {
            const clonedNeighbor = this.cloneGraph(neighbor);
            if (clonedNeighbor !== null) {
                clone.neighbors.push(clonedNeighbor);
            }
        }

        return clone;
    }
}