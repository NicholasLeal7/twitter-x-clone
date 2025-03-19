import './HomeFeed.scss';
import { TweetItem } from '../tweet/TweetItem';
import { tweet } from '@/data/tweet';

export const HomeFeed = () => {

    return (
        <div>
            <TweetItem tweet={tweet} />
            {/* <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} /> */}
        </div>
    );
};