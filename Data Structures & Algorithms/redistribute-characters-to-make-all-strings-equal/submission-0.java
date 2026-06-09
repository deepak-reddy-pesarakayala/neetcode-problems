class Solution {
    public boolean makeEqual(String[] words) {
        int n = words.length;
        int[] freq = new int[26];
        for (String word : words) {
            for (char ch : word.toCharArray()) {
                freq[ch - 'a']++;
            }
        }
        for (int count : freq) {
            if (count % n != 0) {
                return false;
            }
        }
        return true;
    }
}
        