public class Solution {
    public String smallestFromLeaf(TreeNode root) {
        if (root == null) return "";
        
        String smallest = null;
        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, new StringBuilder()));
        
        while (!stack.isEmpty()) {
            Pair curr = stack.pop();
            TreeNode node = curr.node;
            StringBuilder sb = new StringBuilder(curr.path);
            
            sb.append((char) ('a' + node.val));
            
            if (node.left == null && node.right == null) {
                String current = sb.reverse().toString();
                if (smallest == null || current.compareTo(smallest) < 0) {
                    smallest = current;
                }
            }
            
            if (node.right != null) {
                stack.push(new Pair(node.right, sb));
            }
            if (node.left != null) {
                stack.push(new Pair(node.left, sb));
            }
        }
        
        return smallest;
    }
    
    private static class Pair {
        TreeNode node;
        StringBuilder path;
        
        Pair(TreeNode node, StringBuilder path) {
            this.node = node;
            this.path = path;
        }
    }
}