class Solution {
    public List<Integer> findAllPeople(int n, int[][] meetings, int firstPerson) {
        Arrays.sort(meetings, Comparator.comparingInt(m -> m[2]));

        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        union(parent, 0, firstPerson);

        int m = meetings.length;
        int i = 0;
        List<Integer> touched = new ArrayList<>();

        while (i < m) {
            int time = meetings[i][2];
            touched.clear();

            int j = i;
            while (j < m && meetings[j][2] == time) {
                int a = meetings[j][0];
                int b = meetings[j][1];
                union(parent, a, b);
                touched.add(a);
                touched.add(b);
                j++;
            }

            int secretRoot = find(parent, 0);
            for (int person : touched) {
                if (find(parent, person) != secretRoot) {
                    parent[person] = person;
                }
            }

            i = j;
        }

        int secretRoot = find(parent, 0);
        List<Integer> ans = new ArrayList<>();
        for (int person = 0; person < n; person++) {
            if (find(parent, person) == secretRoot) {
                ans.add(person);
            }
        }
        return ans;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    private void union(int[] parent, int a, int b) {
        int rootA = find(parent, a);
        int rootB = find(parent, b);
        if (rootA == rootB) {
            return;
        }
        if (rootB == 0) {
            parent[rootA] = 0;
        } else {
            parent[rootB] = rootA;
        }
    }
}