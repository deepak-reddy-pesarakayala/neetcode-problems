class Solution {
    makesquare(matchsticks: number[]): boolean {
        const sum = matchsticks.reduce((a, b) => a + b, 0);

        if (sum % 4 !== 0) {
            return false;
        }

        const target = sum / 4;
        matchsticks.sort((a, b) => b - a);

        if (matchsticks[0] > target) {
            return false;
        }

        const sides = [0, 0, 0, 0];

        const backtrack = (index: number): boolean => {
            if (index === matchsticks.length) {
                return sides.every(side => side === target);
            }

            const stick = matchsticks[index];

            for (let i = 0; i < 4; i++) {
                if (sides[i] + stick <= target) {
                    sides[i] += stick;

                    if (backtrack(index + 1)) {
                        return true;
                    }

                    sides[i] -= stick;
                }

                if (sides[i] === 0) {
                    break;
                }
            }

            return false;
        };

        return backtrack(0);
    }
}