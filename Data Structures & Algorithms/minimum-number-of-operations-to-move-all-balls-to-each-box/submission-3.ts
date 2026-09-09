class Solution {
    minOperations(boxes: string): number[] {
        const n = boxes.length;
        const answer = new Array(n).fill(0);
        let balls = 0;
        let moves = 0;
        for (let i = 0; i < n; i++) {
            answer[i] += moves;
            if (boxes[i] === "1") balls++;
            moves += balls;
        }
        balls = 0;
        moves = 0;
        for (let i = n - 1; i >= 0; i--) {
            answer[i] += moves;
            if (boxes[i] === "1") balls++;
            moves += balls;
        }
        return answer;
    }
}