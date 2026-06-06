class Solution {

    public double averageWaitingTime(int[][] customers) {

        long currentTime = 0;
        long totalWaitingTime = 0;

        for (int[] customer : customers) {

            int arrival = customer[0];
            int time = customer[1];

            if (currentTime < arrival) {
                currentTime = arrival;
            }

            currentTime += time;

            totalWaitingTime += currentTime - arrival;
        }

        return (double) totalWaitingTime / customers.length;
    }
}