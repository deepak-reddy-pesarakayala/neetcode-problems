class MyHashSet {
    constructor() {
        this.size = 1009; 
        this.buckets = Array.from({ length: this.size }, () => []);
    }
    hash(key) {
        return key % this.size;
    }
    add(key) {
        const bucket = this.buckets[this.hash(key)];
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }
    remove(key) {
        const bucket = this.buckets[this.hash(key)];
        const index = bucket.indexOf(key);
        if (index !== -1) {
            bucket.splice(index, 1);
        }
    }
    contains(key) {
        const bucket = this.buckets[this.hash(key)];
        return bucket.includes(key);
    }
}