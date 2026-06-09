class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        int[] firstIndex = new int[26];
        Arrays.fill(firstIndex, -1);
        int maxLength = -1;
        for (int i = 0; i < s.length(); i++) {
            int ch = s.charAt(i) - 'a';
            if (firstIndex[ch] == -1) {
                firstIndex[ch] = i;
            } else {
                maxLength = Math.max(maxLength, i - firstIndex[ch] - 1);
            }
        }
        return maxLength;
    }
}
        