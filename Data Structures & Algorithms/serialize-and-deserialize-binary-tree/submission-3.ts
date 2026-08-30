class Codec {
    serialize(root: TreeNode | null): string {
        const result: string[] = [];
        const dfs = (node: TreeNode | null): void => {
            if (node === null) {
                result.push("N");
                return;
            }
            result.push(node.val.toString());
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root);
        return result.join(",");
    }
    deserialize(data: string): TreeNode | null {
        const values = data.split(",");
        let index = 0;
        const dfs = (): TreeNode | null => {
            if (values[index] === "N") {
                index++;
                return null;
            }
            const node = new TreeNode(Number(values[index]));
            index++;
            node.left = dfs();
            node.right = dfs();
            return node;
        };
        return dfs();
    }
}