class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int alreadySatisfied = 0;
        int extraSatisfied = 0;
        int maxExtra = 0;
        for (int i = 0; i < customers.length; i++) {
            if (grumpy[i] == 0) {
                alreadySatisfied += customers[i];
            } else {
                extraSatisfied += customers[i];
            }
            if (i >= minutes && grumpy[i - minutes] == 1) {
                extraSatisfied -= customers[i - minutes];
            }
            maxExtra = Math.max(maxExtra, extraSatisfied);
        }
        return alreadySatisfied + maxExtra;
    }
}