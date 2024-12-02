import { Tweet } from "@/types/tweet";
import { user } from "../data/user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia mágico',
    image: 'https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png',
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
};