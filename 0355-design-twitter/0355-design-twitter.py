MAX_USER_NUMBER = 500
RECENT_TWEET_SIZE = 10

class Twitter:

    def __init__(self):
        self.timerId = 0
        
        self.users = { userId: {
            'tweets' : [], 'followers' : set()
        } for userId in range(1, MAX_USER_NUMBER + 1)}
        
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.timerId += 1
        self.users[userId]['tweets'].append([self.timerId, tweetId])
    
    def getNewsFeed(self, userId: int) -> List[int]:
        heap = []
        myTweets = self.users[userId]['tweets']
        followerTweets = [tweet for followerId in self.users[userId]['followers'] for tweet in self.users[followerId]['tweets']]
        tweets = [*myTweets, *followerTweets]
        
        for timerId, tweetId in tweets:
            if len(heap) < RECENT_TWEET_SIZE:
                heapq.heappush(heap, (timerId, tweetId))
            else:
                peek = heap[0][0]
                
                if timerId > peek:
                    heapq.heappop(heap)
                    heapq.heappush(heap, (timerId, tweetId))
        
        return list(map(lambda x:x[1], sorted(heap, key=lambda x:-x[0])))
    
    
    def follow(self, followerId: int, followeeId: int) -> None:
        self.users[followerId]['followers'].add(followeeId)
    
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId not in self.users[followerId]['followers']: return
        self.users[followerId]['followers'].remove(followeeId)

        

