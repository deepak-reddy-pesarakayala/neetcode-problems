public class Solution {
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : arr) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
        
        List<Integer> frequencies = new ArrayList<>(countMap.values());
        Collections.sort(frequencies);
        
        int distinct = frequencies.size();
        for (int freq : frequencies) {
            if (k >= freq) {
                k -= freq;
                distinct--;
            } else {
                break;
            }
        }
        return distinct;
    }
}