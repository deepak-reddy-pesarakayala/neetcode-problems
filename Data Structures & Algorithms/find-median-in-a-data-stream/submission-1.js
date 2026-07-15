class MedianFinder {
    constructor() {
        this.data = [];
    }
    addNum(num) {
        this.data.push(num);
    }
    findMedian() {
        this.data.sort((a, b) => a - b);
        let n = this.data.length;
        if (n & 1) {
            return this.data[Math.floor(n / 2)];
        } else {
            return (this.data[n / 2] + this.data[n / 2 - 1]) / 2;
        }
    }
}