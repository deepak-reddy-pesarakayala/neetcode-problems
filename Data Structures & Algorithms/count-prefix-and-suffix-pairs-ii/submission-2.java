public class Solution {
    public long countPrefixSuffixPairs(String[] words) {
        long count = 0;
        Map<String, Integer> map = new HashMap<>();
        for (String word : words) {
            for (String key : map.keySet()) {
                if (word.startsWith(key) && word.endsWith(key)) {
                    count += map.get(key);
                }
            }
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
        return count;
    }
}