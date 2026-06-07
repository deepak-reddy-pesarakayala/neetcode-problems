class Solution {
    static class Pair {
        int value;
        int index;
        Pair(int value, int index) {
            this.value = value;
            this.index = index;
        }
    }
    public int[] getFinalState(int[] nums, int k, int multiplier) {
        PriorityQueue<Pair> pq = new PriorityQueue<>(
            (a, b) -> {
                if (a.value == b.value) {
                    return a.index - b.index;
                }
                return a.value - b.value;
            }
        );

        for (int i = 0; i < nums.length; i++) {
            pq.offer(new Pair(nums[i], i));
        }

        while (k-- > 0) {
            Pair curr = pq.poll();

            nums[curr.index] *= multiplier;

            pq.offer(new Pair(nums[curr.index], curr.index));
        }

        return nums;
    }
}