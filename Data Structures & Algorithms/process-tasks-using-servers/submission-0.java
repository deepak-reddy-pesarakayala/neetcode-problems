class Solution {
    public int[] assignTasks(int[] servers, int[] tasks) {
        java.util.PriorityQueue<int[]> freeServers = new java.util.PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            }
            return Integer.compare(a[1], b[1]);
        });
        java.util.PriorityQueue<int[]> busyServers = new java.util.PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            }
            if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            }
            return Integer.compare(a[2], b[2]);
        });
        for (int i = 0; i < servers.length; i++) {
            freeServers.offer(new int[] { servers[i], i });
        }
        int[] ans = new int[tasks.length];
        long currentTime = 0;
        for (int j = 0; j < tasks.length; j++) {
            currentTime = Math.max(currentTime, j);
            while (!busyServers.isEmpty() && busyServers.peek()[0] <= currentTime) {
                int[] busy = busyServers.poll();
                freeServers.offer(new int[] { busy[1], busy[2] });
            }
            if (freeServers.isEmpty()) {
                currentTime = busyServers.peek()[0];
                while (!busyServers.isEmpty() && busyServers.peek()[0] <= currentTime) {
                    int[] busy = busyServers.poll();
                    freeServers.offer(new int[] { busy[1], busy[2] });
                }
            }
            int[] server = freeServers.poll();
            int weight = server[0];
            int index = server[1];
            ans[j] = index;
            int freeTime = (int) currentTime + tasks[j];
            busyServers.offer(new int[] { freeTime, weight, index });
        }
        return ans;
    }
}