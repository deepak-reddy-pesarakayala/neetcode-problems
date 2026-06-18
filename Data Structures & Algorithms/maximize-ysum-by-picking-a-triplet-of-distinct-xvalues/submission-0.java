class Solution {
    public int maxSumDistinctTriplet(int[] x, int[] y) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < x.length; i++) {
            map.put(x[i], Math.max(map.getOrDefault(x[i], 0), y[i]));
        }
        if (map.size() < 3) {
            return -1;
        }
        int first = 0, second = 0, third = 0;
        for (int value : map.values()) {
            if (value > first) {
                third = second;
                second = first;
                first = value;
            } else if (value > second) {
                third = second;
                second = value;
            } else if (value > third) {
                third = value;
            }
        }
        return first + second + third;
    }
}