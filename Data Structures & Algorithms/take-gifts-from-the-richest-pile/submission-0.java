class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for (int gift : gifts) {
            pq.add(gift);
        }

        while (k-- > 0) {
            int max = pq.poll();
            int remaining = (int) Math.sqrt(max);
            pq.add(remaining);
        }

        long sum = 0;
        while (!pq.isEmpty()) {
            sum += pq.poll();
        }

        return sum;
    }
}