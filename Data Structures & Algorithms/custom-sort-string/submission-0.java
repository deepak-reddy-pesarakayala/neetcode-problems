class Solution {

    public String customSortString(String order, String s) {

        int[] freq = new int[26];

        for (char ch : s.toCharArray()) {
            freq[ch - 'a']++;
        }

        StringBuilder result = new StringBuilder();

        for (char ch : order.toCharArray()) {
            while (freq[ch - 'a'] > 0) {
                result.append(ch);
                freq[ch - 'a']--;
            }
        }

        for (char ch = 'a'; ch <= 'z'; ch++) {
            while (freq[ch - 'a'] > 0) {
                result.append(ch);
                freq[ch - 'a']--;
            }
        }

        return result.toString();
    }
}