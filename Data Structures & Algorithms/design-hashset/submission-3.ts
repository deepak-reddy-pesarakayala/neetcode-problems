class MyHashSet {
    private data: boolean[];
    constructor() {
        this.data = new Array(1000001).fill(false);
    }
    add(key: number): void {
        this.data[key] = true;
    }
    remove(key: number): void {
        this.data[key] = false;
    }
    contains(key: number): boolean {
        return this.data[key];
    }
}