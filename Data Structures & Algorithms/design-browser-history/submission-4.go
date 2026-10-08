type BrowserHistory struct {
	history []string
	current int
}

func Constructor(homepage string) BrowserHistory {
	return BrowserHistory{
		history: []string{homepage},
		current: 0,
	}
}

func (this *BrowserHistory) Visit(url string) {
	this.history = this.history[:this.current+1]
	this.history = append(this.history, url)
	this.current++
}

func (this *BrowserHistory) Back(steps int) string {
	this.current -= steps

	if this.current < 0 {
		this.current = 0
	}

	return this.history[this.current]
}

func (this *BrowserHistory) Forward(steps int) string {
	this.current += steps

	if this.current >= len(this.history) {
		this.current = len(this.history) - 1
	}

	return this.history[this.current]
}