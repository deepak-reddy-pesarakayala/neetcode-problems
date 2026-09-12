class RandomizedSet {
    nums: number[];
    map: Map<number, number>;

    constructor() {
        this.nums = [];
        this.map = new Map();
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;
        this.map.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;
        const index = this.map.get(val)!;
        const last = this.nums[this.nums.length - 1];
        this.nums[index] = last;
        this.map.set(last, index);
        this.nums.pop();
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.nums.length);
        return this.nums[index];
    }
}