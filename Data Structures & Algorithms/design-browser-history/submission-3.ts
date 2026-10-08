class BrowserHistory {
    private history: string[] = [];
    private current: number = 0;

    constructor(homepage: string) {
        this.history.push(homepage);
    }

    visit(url: string): void {
        this.history = this.history.slice(0, this.current + 1);
        this.history.push(url);
        this.current++;
    }

    back(steps: number): string {
        this.current = Math.max(0, this.current - steps);
        return this.history[this.current];
    }

    forward(steps: number): string {
        this.current = Math.min(this.history.length - 1, this.current + steps);
        return this.history[this.current];
    }
}