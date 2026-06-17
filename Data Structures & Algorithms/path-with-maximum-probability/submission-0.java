class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        List<List<Pair>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int i = 0; i < edges.length; i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            double prob = succProb[i];

            graph.get(u).add(new Pair(v, prob));
            graph.get(v).add(new Pair(u, prob));
        }
        double[] maxProb = new double[n];
        maxProb[start] = 1.0;
        PriorityQueue<Node> pq = new PriorityQueue<>(
            (a, b) -> Double.compare(b.probability, a.probability)
        );
        pq.offer(new Node(start, 1.0));
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            int node = current.vertex;
            double prob = current.probability;
            if (node == end) {
                return prob;
            }
            for (Pair neighbor : graph.get(node)) {
                int next = neighbor.vertex;
                double newProb = prob * neighbor.probability;

                if (newProb > maxProb[next]) {
                    maxProb[next] = newProb;
                    pq.offer(new Node(next, newProb));
                }
            }
        }

        return 0.0;
    }
    static class Pair {
        int vertex;
        double probability;
        Pair(int vertex, double probability) {
            this.vertex = vertex;
            this.probability = probability;
        }
    }
    static class Node {
        int vertex;
        double probability;

        Node(int vertex, double probability) {
            this.vertex = vertex;
            this.probability = probability;
        }
    }
}