class Solution {
    private long choose2(long x) {
        if (x < 2) return 0;
        return x * (x - 1) / 2;
    }
    public long distributeCandies(int n, int limit) {
        long L = limit + 1L;
        return choose2(n + 2L)
             - 3 * choose2(n - L + 2L)
             + 3 * choose2(n - 2 * L + 2L)
             - choose2(n - 3 * L + 2L);
    }
}