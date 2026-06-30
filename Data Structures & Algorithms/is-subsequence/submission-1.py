class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        n, m = len(s), len(t)
        memo = [[-1] * m for _ in range(n)]

        def rec(i, j):
            if i == n:
                return True
            if j == m:
                return False
            if memo[i][j] != -1:
                return memo[i][j] == 1
            if s[i] == t[j]:
                memo[i][j] = 1 if rec(i + 1, j + 1) else 0
            else:
                memo[i][j] = 1 if rec(i, j + 1) else 0
            return memo[i][j] == 1

        return rec(0, 0)