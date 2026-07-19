class MyHashMap {
    constructor() {
        this.size = 1009; 
        this.buckets = Array.from({ length: this.size }, () => []);
    }
    hash(key) {
        return key % this.size;
    }
    put(key, value) {
        const bucket = this.buckets[this.hash(key)];
        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value; 
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        const bucket = this.buckets[this.hash(key)];
        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return -1;
    }
    remove(key) {
        const bucket = this.buckets[this.hash(key)];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}