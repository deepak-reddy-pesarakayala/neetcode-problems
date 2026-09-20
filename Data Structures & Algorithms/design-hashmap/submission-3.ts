class MyHashMap {
    private keys: number[];
    private values: number[];
    constructor() {
        this.keys = new Array(1000001).fill(-1);
        this.values = new Array(1000001).fill(-1);
    }
    put(key: number, value: number): void {
        this.keys[key] = key;
        this.values[key] = value;
    }
    get(key: number): number {
        return this.keys[key] === key ? this.values[key] : -1;
    }
    remove(key: number): void {
        this.keys[key] = -1;
        this.values[key] = -1;
    }
}