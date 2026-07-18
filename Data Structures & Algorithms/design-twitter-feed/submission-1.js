class Twitter {
    constructor() {
        this.time = 0;
        this.tweets = new Map();   
        this.following = new Map(); 
    }
    postTweet(userId, tweetId) {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId).push([this.time++, tweetId]);
    }
    getNewsFeed(userId) {
        const allTweets = [];
        if (this.tweets.has(userId)) {
            allTweets.push(...this.tweets.get(userId));
        }
        if (this.following.has(userId)) {
            for (const followee of this.following.get(userId)) {
                if (this.tweets.has(followee)) {
                    allTweets.push(...this.tweets.get(followee));
                }
            }
        }

        allTweets.sort((a, b) => b[0] - a[0]);

        const feed = [];
        for (let i = 0; i < Math.min(10, allTweets.length); i++) {
            feed.push(allTweets[i][1]);
        }

        return feed;
    }
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;

        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set());
        }

        this.following.get(followerId).add(followeeId);
    }
    unfollow(followerId, followeeId) {
        if (this.following.has(followerId)) {
            this.following.get(followerId).delete(followeeId);
        }
    }
}