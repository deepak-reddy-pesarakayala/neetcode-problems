class StockSpanner {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.arr.push(price);
        let i = this.arr.length - 2;
        while (i >= 0 && this.arr[i] <= price) {
            i--;
        }
        return this.arr.length - i - 1;
    }
}