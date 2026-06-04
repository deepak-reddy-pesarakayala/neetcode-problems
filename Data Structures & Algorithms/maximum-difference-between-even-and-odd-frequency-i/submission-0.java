class Solution {
    public int maxDifference(String s) {
        int[] freq = new int[26];

        for (char ch : s.toCharArray()) {
            freq[ch - 'a']++;
        }

        int maxOdd = Integer.MIN_VALUE;
        int minEven = Integer.MAX_VALUE;

        for (int count : freq) {
            if (count == 0) {
                continue;
            }

            if (count % 2 == 1) {
                maxOdd = Math.max(maxOdd, count);
            } else {
                minEven = Math.min(minEven, count);
            }
        }

        return maxOdd - minEven;
    }
}