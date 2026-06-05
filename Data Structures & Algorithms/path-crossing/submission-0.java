class Solution {

    public boolean isPathCrossing(String path) {

        HashSet<String> visited = new HashSet<>();

        int x = 0;
        int y = 0;

        visited.add("0,0");

        for (char ch : path.toCharArray()) {

            if (ch == 'N') {
                y++;
            } else if (ch == 'S') {
                y--;
            } else if (ch == 'E') {
                x++;
            } else {
                x--;
            }

            String position = x + "," + y;

            if (visited.contains(position)) {
                return true;
            }

            visited.add(position);
        }

        return false;
    }
}