class Solution {
    private record IndexedQuery(int queryIndex, int a, int b) {}

    public int[] leftmostBuildingQueries(int[] heights, int[][] queries) {
        int n = heights.length;
        int m = queries.length;
        int[] ans = new int[m];
        Arrays.fill(ans, -1);

        IndexedQuery[] indexedQueries = new IndexedQuery[m];
        for (int i = 0; i < m; i++) {
            int a = Math.min(queries[i][0], queries[i][1]);
            int b = Math.max(queries[i][0], queries[i][1]);
            indexedQueries[i] = new IndexedQuery(i, a, b);
        }
        Arrays.sort(indexedQueries, Comparator.comparing(IndexedQuery::b, Comparator.reverseOrder()));

        List<Integer> stack = new ArrayList<>();
        int heightsIndex = n - 1;

        for (IndexedQuery q : indexedQueries) {
            int queryIndex = q.queryIndex();
            int a = q.a();
            int b = q.b();

            if (a == b || heights[a] < heights[b]) {
                ans[queryIndex] = b;
            } else {
                // Add heights with index > b into the monotonic stack
                while (heightsIndex > b) {
                    while (!stack.isEmpty() && heights[stack.get(stack.size() - 1)] <= heights[heightsIndex]) {
                        stack.remove(stack.size() - 1);
                    }
                    stack.add(heightsIndex--);
                }
                
                int j = lastGreater(stack, a, heights);
                if (j != -1) {
                    ans[queryIndex] = stack.get(j);
                }
            }
        }

        return ans;
    }

    private int lastGreater(List<Integer> stack, int target, int[] heights) {
        int l = -1, r = stack.size() - 1;
        while (l < r) {
            int m = (l + r + 1) / 2;
            if (heights[stack.get(m)] > heights[target]) {
                l = m;
            } else {
                r = m - 1;
            }
        }
        return l;
    }
}