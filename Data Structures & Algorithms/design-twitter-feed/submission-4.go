type Tweet struct {
    id   int
    time int
}

type TweetHeap []Tweet

func (h TweetHeap) Len() int {
    return len(h)
}

func (h TweetHeap) Less(i, j int) bool {
    return h[i].time > h[j].time
}

func (h TweetHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *TweetHeap) Push(x interface{}) {
    *h = append(*h, x.(Tweet))
}

func (h *TweetHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[:n-1]
    return x
}

type Twitter struct {
    time     int
    tweets   map[int][]Tweet
    follows  map[int]map[int]bool
}

func Constructor() Twitter {
    return Twitter{
        tweets:  make(map[int][]Tweet),
        follows: make(map[int]map[int]bool),
    }
}

func (this *Twitter) PostTweet(userId int, tweetId int) {
    this.time++
    this.tweets[userId] = append(this.tweets[userId], Tweet{
        id:   tweetId,
        time: this.time,
    })
}

func (this *Twitter) GetNewsFeed(userId int) []int {
    h := &TweetHeap{}

    users := []int{userId}

    for followee := range this.follows[userId] {
        users = append(users, followee)
    }

    for _, user := range users {
        tweets := this.tweets[user]

        for i := len(tweets) - 1; i >= 0 && i >= len(tweets)-10; i-- {
            heap.Push(h, tweets[i])
        }
    }

    result := make([]int, 0, 10)

    for h.Len() > 0 && len(result) < 10 {
        tweet := heap.Pop(h).(Tweet)
        result = append(result, tweet.id)
    }

    return result
}

func (this *Twitter) Follow(followerId int, followeeId int) {
    if this.follows[followerId] == nil {
        this.follows[followerId] = make(map[int]bool)
    }

    this.follows[followerId][followeeId] = true
}

func (this *Twitter) Unfollow(followerId int, followeeId int) {
    delete(this.follows[followerId], followeeId)
}