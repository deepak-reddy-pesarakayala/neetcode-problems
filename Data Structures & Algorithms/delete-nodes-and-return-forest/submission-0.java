public class Solution {
    public List<TreeNode> delNodes(TreeNode root, int[] to_delete) {
        Set<Integer> toDeleteSet = new HashSet<>();
        for (int val : to_delete) {
            toDeleteSet.add(val);
        }
        List<TreeNode> forest = new ArrayList<>();
        helper(root, true, toDeleteSet, forest);
        return forest;
    }

    private TreeNode helper(TreeNode node, boolean isRoot, Set<Integer> toDeleteSet, List<TreeNode> forest) {
        if (node == null) {
            return null;
        }
        boolean deleted = toDeleteSet.contains(node.val);
        node.left = helper(node.left, deleted, toDeleteSet, forest);
        node.right = helper(node.right, deleted, toDeleteSet, forest);
        if (!deleted && isRoot) {
            forest.add(node);
        }
        return deleted ? null : node;
    }
}