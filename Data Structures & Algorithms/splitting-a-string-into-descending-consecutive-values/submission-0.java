public class Solution {
    public boolean splitString(String s) {
        return backtrack(s, 0, -1, 0);
    }

    private boolean backtrack(String s, int idx, long prev, int count) {
        if (idx == s.length()) {
            return count >= 2;
        }
        long val = 0;
        for (int i = idx; i < s.length(); i++) {
            int digit = s.charAt(i) - '0';
            if (val > (Long.MAX_VALUE - digit) / 10) {
                break;
            }
            val = val * 10 + digit;
            if (prev == -1) {
                if (backtrack(s, i + 1, val, count + 1)) return true;
            } else {
                if (val == prev - 1) {
                    if (backtrack(s, i + 1, val, count + 1)) return true;
                } else if (val > prev - 1) {
                    break;
                }
            }
        }
        return false;
    }
}