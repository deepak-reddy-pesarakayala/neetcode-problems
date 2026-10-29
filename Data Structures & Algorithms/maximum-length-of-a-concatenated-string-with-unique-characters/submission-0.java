public class Solution {
    public int maxLength(List<String> arr) {
        List<Integer> masks = new ArrayList<>();
        for (String s : arr) {
            int mask = 0, dup = 0;
            for (char c : s.toCharArray()) {
                int bit = 1 << (c - 'a');
                if ((mask & bit) != 0) {
                    dup = 1;
                    break;
                }
                mask |= bit;
            }
            if (dup == 0) {
                masks.add(mask);
            }
        }
        return dfs(masks, 0, 0);
    }

    public int maxLength(String[] arr) {
        return maxLength(Arrays.asList(arr));
    }
    
    private int dfs(List<Integer> masks, int index, int currentMask) {
        if (index == masks.size()) {
            return Integer.bitCount(currentMask);
        }
        int maxLen = dfs(masks, index + 1, currentMask);
        if ((currentMask & masks.get(index)) == 0) {
            maxLen = Math.max(maxLen, dfs(masks, index + 1, currentMask | masks.get(index)));
        }
        return maxLen;
    }
}