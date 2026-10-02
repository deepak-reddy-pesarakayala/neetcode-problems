class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars: [number, number][] = [];
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => b[0] - a[0]);
        const stack: number[] = [];
        for (const [pos, spd] of cars) {
            const time = (target - pos) / spd;
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length;
    }
}