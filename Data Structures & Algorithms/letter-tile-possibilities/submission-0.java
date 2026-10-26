public class Solution {
    public int numTilePossibilities(String tiles) {
        char[] arr = tiles.toCharArray();
        Arrays.sort(arr);
        boolean[] visited = new boolean[arr.length];
        return dfs(arr, visited);
    }
    private int dfs(char[] arr, boolean[] visited) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (visited[i]) continue;
            if (i > 0 && arr[i] == arr[i - 1] && !visited[i - 1]) continue;
            visited[i] = true;
            count += 1 + dfs(arr, visited);
            visited[i] = false;
        }
        return count;
    }
}