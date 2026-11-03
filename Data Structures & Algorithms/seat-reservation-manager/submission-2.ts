class SeatManager {
    private heap: number[];

    constructor(n: number) {
        this.heap = [];

        for (let i = 1; i <= n; i++) {
            this.heap.push(i);
        }

        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    private heapify(i: number): void {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapify(smallest);
        }
    }

    private push(seat: number): void {
        this.heap.push(seat);
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    reserve(): number {
        const seat = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify(0);
        }

        return seat;
    }

    unreserve(seatNumber: number): void {
        this.push(seatNumber);
    }
}