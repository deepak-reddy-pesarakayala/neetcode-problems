public class Solution {
    public int[] constructDistancedSequence(int n) {
        int[] res = new int[2 * n - 1];
        boolean[] used = new boolean[n + 1];
        backtrack(0, res, used, n);
        return res;
    }
    private boolean backtrack(int index, int[] res, boolean[] used, int n) {
        while (index < res.length && res[index] != 0) {
            index++;
        }
        if (index == res.length) {
            return true;
        }
        for (int i = n; i >= 1; i--) {
            if (used[i]) continue;
            if (i == 1) {
                res[index] = 1;
                used[1] = true;
                if (backtrack(index + 1, res, used, n)) return true;
                res[index] = 0;
                used[1] = false;
            } else {
                if (index + i < res.length && res[index + i] == 0) {
                    res[index] = i;
                    res[index + i] = i;
                    used[i] = true;
                    if (backtrack(index + 1, res, used, n)) return true;
                    res[index] = 0;
                    res[index + i] = 0;
                    used[i] = false;
                }
            }
        }
        return false;
    }
}