class Solution {

    public int[] vowelStrings(String[] words, int[][] queries) {

        int n = words.length;
        int[] prefix = new int[n + 1];

        for (int i = 0; i < n; i++) {

            String word = words[i];

            if (isVowel(word.charAt(0)) &&
                isVowel(word.charAt(word.length() - 1))) {

                prefix[i + 1] = prefix[i] + 1;
            } else {
                prefix[i + 1] = prefix[i];
            }
        }

        int[] ans = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {

            int left = queries[i][0];
            int right = queries[i][1];

            ans[i] = prefix[right + 1] - prefix[left];
        }

        return ans;
    }

    private boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i'
                || ch == 'o' || ch == 'u';
    }
}