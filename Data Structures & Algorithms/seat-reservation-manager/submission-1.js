class SeatManager {
    constructor(n) {
        this.heap = [];
        for (let i = 1; i <= n; i++) {
            this.heap.push(i);
        }
    }

    reserve() {
        return this.removeMin();
    }

    unreserve(seatNumber) {
        this.add(seatNumber);
    }

    add(value) {
        this.heap.push(value);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    removeMin() {
        let min = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                    smallest = left;
                }

                if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }

        return min;
    }
}