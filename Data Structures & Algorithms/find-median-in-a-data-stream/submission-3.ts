class MaxHeap {
    private heap: number[] = [];
    add(value: number): void {
        this.heap.push(value);
        this.up();
    }
    remove(): number {
        const top = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.down();
        }
        return top;
    }
    peek(): number {
        return this.heap[0];
    }
    size(): number {
        return this.heap.length;
    }
    private up(): void {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) {
                break;
            }
            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    private down(): void {
        let i = 0;
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

            if (largest === i) {
                break;
            }

            [this.heap[i], this.heap[largest]] =
            [this.heap[largest], this.heap[i]];

            i = largest;
        }
    }
}

class MinHeap {
    private heap: number[] = [];

    add(value: number): void {
        this.heap.push(value);
        this.up();
    }

    remove(): number {
        const top = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.down();
        }

        return top;
    }

    peek(): number {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    private up(): void {
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    private down(): void {
        let i = 0;

        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === i) {
                break;
            }

            [this.heap[i], this.heap[smallest]] =
            [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }
}

class MedianFinder {
    private left = new MaxHeap();
    private right = new MinHeap();

    addNum(num: number): void {
        if (this.right.size() === 0 || num >= this.right.peek()) {
            this.right.add(num);
        } else {
            this.left.add(num);
        }

        if (this.left.size() > this.right.size() + 1) {
            this.right.add(this.left.remove());
        }

        if (this.right.size() > this.left.size() + 1) {
            this.left.add(this.right.remove());
        }
    }

    findMedian(): number {
        if (this.left.size() > this.right.size()) {
            return this.left.peek();
        }

        if (this.right.size() > this.left.size()) {
            return this.right.peek();
        }

        return (this.left.peek() + this.right.peek()) / 2;
    }
}