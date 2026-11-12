class Solution {
    public int snakesAndLadders(int[][] board) {
        int n = board.length;
        int target = n * n;
        int[] flattened = new int[target + 1];
        int idx = 1;
        boolean leftToRight = true;
        for (int r = n - 1; r >= 0; r--) {
            if (leftToRight) {
                for (int c = 0; c < n; c++) {
                    flattened[idx++] = board[r][c];
                }
            } else {
                for (int c = n - 1; c >= 0; c--) {
                    flattened[idx++] = board[r][c];
                }
            }
            leftToRight = !leftToRight;
        }
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[target + 1];
        queue.offer(1);
        visited[1] = true;
        int rolls = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                if (curr == target) {
                    return rolls;
                }
                for (int next = curr + 1; next <= Math.min(curr + 6, target); next++) {
                    int dest = flattened[next] == -1 ? next : flattened[next];
                    if (!visited[dest]) {
                        visited[dest] = true;
                        queue.offer(dest);
                    }
                }
            }
            rolls++;
        }
        return -1;
    }
}