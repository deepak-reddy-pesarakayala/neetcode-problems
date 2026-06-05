class Solution {

    public int countConsistentStrings(String allowed, String[] words) {

        boolean[] present = new boolean[26];

        for (char ch : allowed.toCharArray()) {
            present[ch - 'a'] = true;
        }

        int count = 0;

        for (String word : words) {

            boolean isConsistent = true;

            for (char ch : word.toCharArray()) {
                if (!present[ch - 'a']) {
                    isConsistent = false;
                    break;
                }
            }

            if (isConsistent) {
                count++;
            }
        }

        return count;
    }
}