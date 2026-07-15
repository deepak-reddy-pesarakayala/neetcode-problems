class MyStack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    push(x) {
        this.q2.push(x);
        while (!this.q1.isEmpty()) {
            this.q2.push(this.q1.pop());
        }
        [this.q1, this.q2] = [this.q2, this.q1];
    }
    pop() {
        return this.q1.pop();
    }
    top() {
        return this.q1.front();
    }
    empty() {
        return this.q1.isEmpty();
    }
}