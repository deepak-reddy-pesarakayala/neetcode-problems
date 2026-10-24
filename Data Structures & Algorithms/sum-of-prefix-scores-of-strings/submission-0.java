public class Solution {
    private static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        int count = 0;
    }
    public int[] sumPrefixScores(String[] words) {
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode curr = root;
            for (char c : word.toCharArray()) {
                int idx = c - 'a';
                if (curr.children[idx] == null) {
                    curr.children[idx] = new TrieNode();
                }
                curr = curr.children[idx];
                curr.count++;
            }
        }
        int[] result = new int[words.length];
        for (int i = 0; i < words.length; i++) {
            TrieNode curr = root;
            int sum = 0;
            for (char c : words[i].toCharArray()) {
                curr = curr.children[c - 'a'];
                sum += curr.count;
            }
            result[i] = sum;
        }
        return result;
    }
}