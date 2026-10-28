public class Solution {
    public String smallestNumber(String pattern) {
        int n = pattern.length();
        StringBuilder sb = new StringBuilder();
        int[] stack = new int[n + 1];
        int top = -1;
        
        for (int i = 0; i <= n; i++) {
            stack[++top] = i + 1;
            if (i == n || pattern.charAt(i) == 'I') {
                while (top >= 0) {
                    sb.append(stack[top--]);
                }
            }
        }
        
        return sb.toString();
    }
}