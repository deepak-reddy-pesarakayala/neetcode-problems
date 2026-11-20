class Solution {
    private static final String TARGET = "123450";
    private static final int[][] NEIGHBORS = {
        {1, 3},
        {0, 2, 4},
        {1, 5},
        {0, 4},
        {1, 3, 5},
        {2, 4}
    };

    public int slidingPuzzle(int[][] board) {
        StringBuilder sb = new StringBuilder(6);
        for (int[] row : board) {
            for (int val : row) {
                sb.append(val);
            }
        }
        String start = sb.toString();
        if (TARGET.equals(start)) {
            return 0;
        }

        Set<String> visited = new HashSet<>();
        Queue<String> queue = new ArrayDeque<>();
        visited.add(start);
        queue.offer(start);

        int moves = 0;
        while (!queue.isEmpty()) {
            moves++;
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String curr = queue.poll();
                int zeroIdx = curr.indexOf('0');

                for (int nextIdx : NEIGHBORS[zeroIdx]) {
                    String next = swap(curr, zeroIdx, nextIdx);
                    if (TARGET.equals(next)) {
                        return moves;
                    }
                    if (visited.add(next)) {
                        queue.offer(next);
                    }
                }
            }
        }

        return -1;
    }

    private String swap(String s, int i, int j) {
        char[] chars = s.toCharArray();
        char tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
        return new String(chars);
    }
}