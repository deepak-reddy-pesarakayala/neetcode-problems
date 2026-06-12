class Solution {
    private int[] prefix;
    private int total;
    private Random random;
    public Solution(int[] w) {
        prefix = new int[w.length];
        prefix[0] = w[0];
        for (int i = 1; i < w.length; i++) {
            prefix[i] = prefix[i - 1] + w[i];
        }
        total = prefix[w.length - 1];
        random = new Random();
    }
    public int pickIndex() {
        int target = random.nextInt(total) + 1; 
        int left = 0, right = prefix.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;

            if (prefix[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}