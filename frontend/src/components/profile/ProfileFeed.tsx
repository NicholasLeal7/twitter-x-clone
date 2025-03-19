import { tweet } from '@/data/tweet';
import { TweetItem } from '../tweet/TweetItem';
import './ProfileFeed.scss';

export const ProfileFeed = () => {
    return (
        <div>
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
            <TweetItem tweet={tweet} />
        </div>
    );
};