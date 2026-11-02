public class Solution {
    public int minimumDeviation(int[] nums) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        int minVal = Integer.MAX_VALUE;
        
        for (int num : nums) {
            if (num % 2 != 0) {
                num *= 2;
            }
            minVal = Math.min(minVal, num);
            pq.offer(num);
        }
        
        int minDeviation = Integer.MAX_VALUE;
        
        while (true) {
            int maxVal = pq.poll();
            minDeviation = Math.min(minDeviation, maxVal - minVal);
            
            if (maxVal % 2 != 0) {
                break;
            }
            
            maxVal /= 2;
            minVal = Math.min(minVal, maxVal);
            pq.offer(maxVal);
        }
        
        return minDeviation;
    }
}