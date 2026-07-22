class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.curr = 0;
    }
    visit(url) {
        this.history.length = this.curr + 1;
        this.history.push(url);
        this.curr++;
    }
    back(steps) {
        this.curr = Math.max(0, this.curr - steps);
        return this.history[this.curr];
    }
    forward(steps) {
        this.curr = Math.min(
            this.history.length - 1,
            this.curr + steps
        );
        return this.history[this.curr];
    }
}