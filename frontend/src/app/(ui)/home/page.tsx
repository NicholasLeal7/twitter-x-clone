import { HomeFeed } from "@/components/home/HomeFeed";
import { HomeHeader } from "@/components/home/HomeHeader";
import { TweetPost } from "@/components/tweet/TweetPost";

export default function Page() {
    return (
        <div>
            <HomeHeader />
            <TweetPost />
            <HomeFeed />
        </div>
    );
}