class Solution {
    makesquare(matchsticks) {
        if (matchsticks.length < 4) {
            return false;
        }
        const total = matchsticks.reduce((sum, stick) => sum + stick, 0);
        if (total % 4 !== 0) {
            return false;
        }
        const side = total / 4;
        matchsticks.sort((a, b) => b - a); 
        if (matchsticks[0] > side) {
            return false;
        }
        const sides = [0, 0, 0, 0];
        const backtrack = (index) => {
            if (index === matchsticks.length) {
                return (
                    sides[0] === side &&
                    sides[1] === side &&
                    sides[2] === side &&
                    sides[3] === side
                );
            }
            const stick = matchsticks[index];
            for (let i = 0; i < 4; i++) {
                if (sides[i] + stick > side) {
                    continue;
                }
                sides[i] += stick;
                if (backtrack(index + 1)) {
                    return true;
                }
                sides[i] -= stick;
                if (sides[i] === 0) {
                    break;
                }
            }
            return false;
        };
        return backtrack(0);
    }
}