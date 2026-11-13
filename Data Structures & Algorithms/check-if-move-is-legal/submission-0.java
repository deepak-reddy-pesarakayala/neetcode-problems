class Solution {
    public boolean checkMove(char[][] board, int rMove, int cMove, char color) {
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
        char opponent = (color == 'W') ? 'B' : 'W';
        int n = 8;
        for (int[] dir : dirs) {
            int dr = dir[0], dc = dir[1];
            int i = rMove + dr, j = cMove + dc;
            int count = 0;
            while (i >= 0 && i < n && j >= 0 && j < n && board[i][j] == opponent) {
                count++;
                i += dr;
                j += dc;
            }
            if (count >= 1 && i >= 0 && i < n && j >= 0 && j < n && board[i][j] == color) {
                return true;
            }
        }
        return false;
    }
}