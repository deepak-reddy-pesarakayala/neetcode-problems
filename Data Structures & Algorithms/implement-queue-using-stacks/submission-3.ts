class MyQueue {
    private input: number[] = [];
    private output: number[] = [];

    push(x: number): void {
        this.input.push(x);
    }

    pop(): number {
        this.move();
        return this.output.pop()!;
    }

    peek(): number {
        this.move();
        return this.output[this.output.length - 1];
    }

    empty(): boolean {
        return this.input.length === 0 && this.output.length === 0;
    }

    private move(): void {
        if (this.output.length === 0) {
            while (this.input.length > 0) {
                this.output.push(this.input.pop()!);
            }
        }
    }
}