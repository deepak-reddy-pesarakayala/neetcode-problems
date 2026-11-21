class Solution {
    private final Map<Integer, Integer> memo = new HashMap<>();

    public int minDays(int n) {
        if (n <= 1) {
            return n;
        }
        Integer cached = memo.get(n);
        if (cached != null) {
            return cached;
        }

        int byTwo = (n % 2) + 1 + minDays(n / 2);
        int byThree = (n % 3) + 1 + minDays(n / 3);
        int res = Math.min(byTwo, byThree);

        memo.put(n, res);
        return res;
    }
}