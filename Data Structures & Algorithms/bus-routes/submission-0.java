class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        if (source == target) {
            return 0;
        }
        HashMap<Integer, ArrayList<Integer>> stopToBuses = new HashMap<>();
        for (int bus = 0; bus < routes.length; bus++) {
            for (int stop : routes[bus]) {
                stopToBuses.putIfAbsent(stop, new ArrayList<>());
                stopToBuses.get(stop).add(bus);
            }
        }
        Queue<Integer> queue = new LinkedList<>();
        HashSet<Integer> visitedStops = new HashSet<>();
        boolean[] visitedBuses = new boolean[routes.length];
        queue.offer(source);
        visitedStops.add(source);
        int busesTaken = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            busesTaken++;
            for (int i = 0; i < size; i++) {
                int currentStop = queue.poll();
                ArrayList<Integer> buses = stopToBuses.get(currentStop);
                if (buses == null) {
                    continue;
                }
                for (int bus : buses) {
                    if (visitedBuses[bus]) {
                        continue;
                    }
                    visitedBuses[bus] = true;
                    for (int nextStop : routes[bus]) {
                        if (nextStop == target) {
                            return busesTaken;
                        }
                        if (!visitedStops.contains(nextStop)) {
                            visitedStops.add(nextStop);
                            queue.offer(nextStop);
                        }
                    }
                }
            }
        }
        return -1;
    }
}
        