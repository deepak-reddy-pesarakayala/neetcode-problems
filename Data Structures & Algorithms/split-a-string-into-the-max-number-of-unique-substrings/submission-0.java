public class Solution {
    public int maxUniqueSplit(String s) {
        return backtrack(0, s, new HashSet<>());
    }
    private int backtrack(int start, String s, Set<String> seen) {
        if (start == s.length()) {
            return 0;
        }
        int maxPieces = 0;
        for (int i = start + 1; i <= s.length(); i++) {
            String sub = s.substring(start, i);
            if (!seen.contains(sub)) {
                seen.add(sub);
                maxPieces = Math.max(maxPieces, 1 + backtrack(i, s, seen));
                seen.remove(sub);
            }
        }
        return maxPieces;
    }
}