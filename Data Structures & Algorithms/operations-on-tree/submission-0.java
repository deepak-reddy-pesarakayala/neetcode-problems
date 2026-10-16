class LockingTree {
    int[] parent;
    int[] lockedBy;
    List<Integer>[] children;

    public LockingTree(int[] parent) {
        int n = parent.length;
        this.parent = parent;
        lockedBy = new int[n];
        children = new ArrayList[n];

        for (int i = 0; i < n; i++) {
            children[i] = new ArrayList<>();
        }

        for (int i = 1; i < n; i++) {
            children[parent[i]].add(i);
        }
    }

    public boolean lock(int num, int user) {
        if (lockedBy[num] != 0) {
            return false;
        }

        lockedBy[num] = user;
        return true;
    }

    public boolean unlock(int num, int user) {
        if (lockedBy[num] != user) {
            return false;
        }

        lockedBy[num] = 0;
        return true;
    }

    public boolean upgrade(int num, int user) {
        if (lockedBy[num] != 0) {
            return false;
        }

        int p = parent[num];

        while (p != -1) {
            if (lockedBy[p] != 0) {
                return false;
            }
            p = parent[p];
        }

        if (!unlockDescendants(num)) {
            return false;
        }

        lockedBy[num] = user;
        return true;
    }

    private boolean unlockDescendants(int num) {
        boolean found = false;

        for (int child : children[num]) {
            if (lockedBy[child] != 0) {
                lockedBy[child] = 0;
                found = true;
            }

            if (unlockDescendants(child)) {
                found = true;
            }
        }

        return found;
    }
}