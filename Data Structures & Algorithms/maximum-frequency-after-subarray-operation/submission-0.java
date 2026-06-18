class Solution {
    public int maxFrequency(int[] nums, int k) {
        int baseCount = 0;
        for (int num : nums) {
            if (num == k) {
                baseCount++;
            }
        }
        int bestGain = 0;
        for (int target = 1; target <= 50; target++) {
            if (target == k) continue;
            int currentGain = 0;
            for (int num : nums) {
                int gain = 0;
                if (num == target) {
                    gain = 1;      
                } else if (num == k) {
                    gain = -1;     
                }
                currentGain = Math.max(gain, currentGain + gain);
                bestGain = Math.max(bestGain, currentGain);
            }
        }
        return baseCount + bestGain;
    }
}