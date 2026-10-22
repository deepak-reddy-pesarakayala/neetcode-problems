class Solution {
    getDirections(root, startValue, destValue) {
        const paths = new Map();
        const stack = [[root, ""]];

        let startPath = "";
        let destPath = "";

        while (stack.length > 0) {
            const [node, path] = stack.pop();

            if (node.val === startValue) startPath = path;
            if (node.val === destValue) destPath = path;

            if (node.right) stack.push([node.right, path + "R"]);
            if (node.left) stack.push([node.left, path + "L"]);

            if (startPath !== "" && destPath !== "") break;
        }

        let i = 0;

        while (
            i < startPath.length &&
            i < destPath.length &&
            startPath[i] === destPath[i]
        ) {
            i++;
        }

        return "U".repeat(startPath.length - i) + destPath.substring(i);
    }
}