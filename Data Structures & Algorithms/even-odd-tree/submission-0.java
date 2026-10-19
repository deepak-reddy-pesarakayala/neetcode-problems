public class Solution {
    public boolean isEvenOddTree(TreeNode root) {
        if (root == null) return true;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int level = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            int prevVal = (level % 2 == 0) ? Integer.MIN_VALUE : Integer.MAX_VALUE;
            for (int i = 0; i < size; i++) {
                TreeNode curr = queue.poll();
                int val = curr.val;
                if (level % 2 == 0) {
                    if (val % 2 == 0 || val <= prevVal) return false;
                } else {
                    if (val % 2 != 0 || val >= prevVal) return false;
                }
                prevVal = val;
                if (curr.left != null) queue.offer(curr.left);
                if (curr.right != null) queue.offer(curr.right);
            }
            level++;
        }
        return true;
    }
}