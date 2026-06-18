class Solution {
    public int[] findBuildings(int[] heights) {
        List<Integer> result = new ArrayList<>();
        int maxHeight = 0;
        for (int i = heights.length - 1; i >= 0; i--) {
            if (heights[i] > maxHeight) {
                result.add(i);
                maxHeight = heights[i];
            }
        }
        Collections.reverse(result);
        int[] ans = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            ans[i] = result.get(i);
        }
        return ans;
    }
}
        