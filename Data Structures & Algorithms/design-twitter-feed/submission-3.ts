class Twitter {
    private tweets: Map<number, [number, number][]>;
    private following: Map<number, Set<number>>;
    private time: number;

    constructor() {
        this.tweets = new Map();
        this.following = new Map();
        this.time = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }

        this.tweets.get(userId)!.push([this.time++, tweetId]);
    }

    getNewsFeed(userId: number): number[] {
        const users = this.following.get(userId) || new Set<number>();
        const result: [number, number][] = [];

        users.add(userId);

        for (const id of users) {
            const userTweets = this.tweets.get(id) || [];

            for (const tweet of userTweets) {
                result.push(tweet);
            }
        }

        result.sort((a, b) => b[0] - a[0]);

        return result.slice(0, 10).map(tweet => tweet[1]);
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set<number>());
        }

        this.following.get(followerId)!.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        this.following.get(followerId)?.delete(followeeId);
    }
}