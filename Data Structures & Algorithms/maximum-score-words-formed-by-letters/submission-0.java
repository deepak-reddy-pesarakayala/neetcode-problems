public class Solution {
    public int maxScoreWords(String[] words, char[] letters, int[] score) {
        int[] count = new int[26];
        for (char c : letters) {
            count[c - 'a']++;
        }
        return backtrack(words, score, count, 0);
    }
    private int backtrack(String[] words, int[] score, int[] count, int index) {
        if (index == words.length) {
            return 0;
        }
        int res = backtrack(words, score, count, index + 1);
        String word = words[index];
        int[] wordCount = new int[26];
        boolean possible = true;
        int wordScore = 0;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            wordCount[idx]++;
            wordScore += score[idx];
            if (wordCount[idx] > count[idx]) {
                possible = false;
            }
        }
        if (possible) {
            for (int i = 0; i < 26; i++) {
                count[i] -= wordCount[i];
            }
            res = Math.max(res, wordScore + backtrack(words, score, count, index + 1));
            for (int i = 0; i < 26; i++) {
                count[i] += wordCount[i];
            }
        }
        return res;
    }
}